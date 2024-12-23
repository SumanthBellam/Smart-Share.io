from typing import Union
from fastapi import FastAPI
import json

app = FastAPI()

@app.get("/profile")
def get_profile():
  data = {    
    "userId": "abbwat@uw.edu",
    "name": "Abby Watson",
    "major": "Computer Science",
    "interests": "Reading, Painting, Cooking, PM, Software Engineering",
    "about": "Text entry up to 300 characters about yourself, can include social links.",
    "linkedin": "",
    "instagram": "",
    "bluesky": "",
  }
  return json.dumps(data)

@app.get("/")
def get_home():
  data = [
      {
      "id": "post1",
      "userId": 1,
      "title": "3 hardcover noteboks",
      "description": "They're blank. I just want to donate this because I've never used them.",
      "picture": "https://images.squarespace-cdn.com/content/v1/5349ba13e4b095a3fb0ba65c/1585747771945-6LI4PT1R59OYSZT90QPU/Best-Hardcover-Notebooks-Everyday-Writers",
      "location": "San Francisco",
      "pickupTime": "2022-01-01T10:00:00.000Z",
      "type": "request",
      "status": "Open" 
    },

    {
      "id": "item2",
      "userId": 5,
      "title": "Another Example Item",
      "description": "This is another example item",
      "picture": "https://example.com/another-item-picture.jpg",
      "location": "New York",
      "pickupTime": "2022-01-02T14:00:00.000Z",
      "type": "donation",
      "status": "Matched" 
    }
  ]
  return [json.dumps(i) for i in data]