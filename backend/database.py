from motor.motor_asyncio import AsyncIOMotorClient
import os
from pymongo import MongoClient
from  pymongo.database import Database

MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://LiamRibe:liamribe12@tm.u8uic.mongodb.net/admin?retryWrites=true&w=majority")  # Use environment variable or default to localhost
DATABASE_NAME = "TM_db"  # Change this to your database name

client = AsyncIOMotorClient(MONGO_URI)  # Connect to MongoDB


client = MongoClient("mongodb+srv://LiamRibe:liamribe12@tm.u8uic.mongodb.net/admin?retryWrites=true&w=majority")  # Change this to your MongoDB connection string
db = client["TM_db"]  # Replace with your database name
devs_collection = db["Users"]  # Replace with your collection name