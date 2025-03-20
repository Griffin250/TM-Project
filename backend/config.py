import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://LiamRibe:liamribe12@tm.u8uic.mongodb.net/admin?retryWrites=true&w=majority")
DB_NAME = os.getenv("DB_NAME", "TM_db")

# Initialize MongoDB client
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db["Users"]

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")
API_KEY = os.getenv("API_KEY")
SECRET_KEY = os.getenv("SECRET_KEY")