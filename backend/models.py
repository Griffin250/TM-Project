from pydantic import BaseModel

class User(BaseModel):
    name: str
    latitude: float
    longitude: float
    courseOverGround: float
    rateOfTurn: int
    shipType: int
    speedOverGround: float
    trueHeading: int
    navigationalStatus: int
    mmsi: int
    msgtime: str
