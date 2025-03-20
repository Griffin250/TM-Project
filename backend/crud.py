# Description: This file contains the CRUD operations for the MongoDB database.
from pymongo import MongoClient
from models import User
from config import collection

# Insert a new user
def create_user(user: User):
    user_dict = user.dict()
    result = collection.insert_one(user_dict)
    return str(result.inserted_id)

# Get all users
def get_all_users():
    return list(collection.find({}, {"_id": 0}))

# Update a user based on MMSI
def update_user(mmsi: int, user_data: dict):
    result = collection.update_one({"mmsi": mmsi}, {"$set": user_data})
    return result.modified_count > 0

# Delete a user
def delete_user(mmsi: int):
    result = collection.delete_one({"mmsi": mmsi})
    return result.deleted_count > 0
