from typing import Union
from fastapi import FastAPI

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
  return jsonify(data)

