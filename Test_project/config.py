import os

class Config:    

    COUCHDB_URL = os.getenv("COUCHDB_URL", "http://localhost:5984")
    COUCHDB_USERNAME = os.getenv("COUCHDB_USERNAME", "admin")
    COUCHDB_PASSWORD = os.getenv("COUCHDB_PASSWORD", "admin")
    
    REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
    REDIS_PORT = int(os.getenv("REDIS_PORT", "6379"))
    REDIS_PASSWORD = os.getenv("REDIS_PASSWORD", None)
    
    CACHE_TTL = int(os.getenv("CACHE_TTL", "300")) 
    CACHE_PREFIX = os.getenv("CACHE_PREFIX", "couchdb_app")
    
    LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
    DEBUG = os.getenv("DEBUG", "False").lower() == "true"