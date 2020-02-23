import io
import os
import requests
import pymongo
import json

from flask import Flask, request, jsonify

# app initialization
app = Flask(__name__)

# db connection
myclient = pymongo.MongoClient("mongodb://admin:admin@127.0.0.1:27017")
mydb = myclient["testdb"]
joblistings = mydb["job"]

if joblistings.count() == 0:

    # dummy tests
    jobs = [{
        "title": "worker",
        "description": "you will be working", 
        "location": "Bikini bottom",
        "wage": "You don't get a wage fool", 
        "requirements": "flipping burgers",
        "contactInfo": "email: bob@example.com"
    },
    {
        "title": "worker2",
        "description": "you will be working2", 
        "location": "Bikini bottom2",
        "wage": "You don't get a wage fool2", 
        "requirements": "flipping burgers2",
        "contactInfo": "phone: 123-456-7890"
    }
    ]

    myInsert = joblistings.insert_many(jobs)

@app.route('/retrieve', methods = ['GET'])
def retrieve():
    return jsonify(joblistings), 200

"""
Kat's superior pythonic code
also this one takes in json files for the search
"""
@app.route('/createjob', methods = ['POST'])
def get_json():
    text = json.load(request.get_json())
    myInsert = joblistings.insert_one(text)
    return jsonify({
        "status":"done"
    }), 200

    #  main
if __name__ == "__main__":
    app.run(port=5000)
