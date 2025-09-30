import os

class Config:    

    COUCHDB_URL = os.getenv("COUCHDB_URL", "http://admin:admin@host.docker.internal:5984")
    COUCHDB_USERNAME = os.getenv("COUCHDB_USERNAME", "admin")
    COUCHDB_PASSWORD = os.getenv("COUCHDB_PASSWORD", "admin")
    
    REDIS_HOST = os.getenv("REDIS_HOST", "host.docker.internal")
    REDIS_PORT = int(os.getenv("REDIS_PORT", "6379"))
    REDIS_PASSWORD = os.getenv("REDIS_PASSWORD", None)
    
    CACHE_TTL = int(os.getenv("CACHE_TTL", "300")) 