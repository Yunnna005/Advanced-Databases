import couchdb
import redis
import logging
import hashlib
import json

from config import Config

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DatabaseClient:
    def __init__(self, couchdb_url: str = Config.COUCHDB_URL, 
                 redis_host: str = Config.REDIS_HOST, redis_port: int = Config.REDIS_PORT,
                 cache_ttl: int = Config.CACHE_TTL):
        
        self.cache_ttl = cache_ttl

        try:
            self.couch = couchdb.Server(couchdb_url)
            logger.info(f"Connected to CouchDB at {couchdb_url}")

            self.redis_client = redis.Redis(
                host=redis_host, 
                port=redis_port, 
                decode_responses=True
            )

            self.redis_client.ping()
            logger.info(f"Connected to Redis at {redis_host}:{redis_port}")

        except Exception as e:
            logger.error(f"Failed to initialize connections: {e}")
            raise

    def _generate_cache_key(self, database: str, doc_id: str) -> str:
        key = f"couchdb:{database}:{doc_id}"
        return hashlib.md5(key.encode()).hexdigest()
    

    def get_document(self, database_name: str, doc_id: str, 
                    use_cache: bool = True):

        cache_key = self._generate_cache_key(database_name, doc_id)
        
        if use_cache:
            try:
                cached_data = self.redis_client.get(cache_key)
                if cached_data:
                    logger.info(f"Cache HIT for document {doc_id}")
                    return json.loads(cached_data)
                else:
                    logger.info(f"Cache MISS for document {doc_id}")
            except Exception as e:
                logger.warning(f"Redis cache read error: {e}")
        
        try:
            db = self.couch[database_name]
            document = db[doc_id]
            
            if use_cache:
                try:
                    self.redis_client.setex(
                        cache_key, 
                        self.cache_ttl, 
                        json.dumps(dict(document))
                    )
                    logger.info(f"Cached document {doc_id} for {self.cache_ttl}s")
                except Exception as e:
                    logger.warning(f"Redis cache write error: {e}")
            
            return dict(document)
            
        except couchdb.ResourceNotFound:
            logger.warning(f"Document {doc_id} not found in {database_name}")
            return None
        except Exception as e:
            logger.error(f"Error retrieving document {doc_id}: {e}")
            return None
        
    def get_cache_stats(self):
        try:
            info = self.redis_client.info()
            return {
                "keyspace_hits": info.get("keyspace_hits", 0),
                "keyspace_misses": info.get("keyspace_misses", 0),
                "used_memory": info.get("used_memory_human", "unknown"),
                "connected_clients": info.get("connected_clients", 0)
            }
        except Exception as e:
            logger.error(f"Error getting cache stats: {e}")
            return {}

def main():    
    try:
        db_client = DatabaseClient()
        
        database_name = "coffee_shop"
        doc_id = "2b41fc9495f223d12473fe3abd00011d" 
        
        print("\nFirst request (cache miss expected):")
        document = db_client.get_document(database_name, doc_id)
        if document:
            print(f"Retrieved document: {json.dumps(document, indent=2)}")
        
        print("\nSecond request (cache hit expected):")
        document = db_client.get_document(database_name, doc_id)
        if document:
            print(f"Retrieved document from cache: {json.dumps(document, indent=2)}")
        
        cache_stats = db_client.get_cache_stats()
        print(f"\nCache Statistics: {json.dumps(cache_stats, indent=2)}")
        
    except Exception as e:
        logger.error(f"Application error: {e}")

if __name__ == "__main__":
    main()