from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:42069"],  # Update this for production
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
client = MongoClient("mongodb+srv://LiamRibe:liamribe12@tm.u8uic.mongodb.net/admin?retryWrites=true&w=majority")
db = client["TM_db"]
collection = db["Users"]  # Change this to your collection name

# Pydantic model for Item
class Item(BaseModel):
    name: str
    latitude: float
    longitude: float
    msgtime: str
    speedOverGround: Optional[float]

# Endpoint to get all items from MongoDB collection
@app.get("/items", response_model=List[Item])
async def get_items():
    try:
        items = list(collection.find())  # Konverter cursor til liste
        if not items:
            raise HTTPException(status_code=404, detail="No items found")
        return [
            {
                "name": item["name"],
                "latitude": item["latitude"],
                "longitude": item["longitude"],
                "msgtime": item["msgtime"],
                "speedOverGround": item.get("speedOverGround")
            }
            for item in items
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching items: {e}")
    
@app.get("/items/{boat_name}")
async def get_item(boat_name: str):
    item = collection.find_one({"name": boat_name})
    if not item:
        raise HTTPException(status_code=404, detail="Boat not found")
    
    return {
        "position": {
            "lat": item["latitude"],
            "lng": item["longitude"]
        },
        "name": item["name"],
        "msgtime": item["msgtime"],
        "speedOverGround": item.get("speedOverGround")
    }


