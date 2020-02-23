import io
import os
import requests
import pymongo

from flask import Flask, request, jsonify

# app initialization
app = Flask(__name__)

# db connection
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["testdb"]
joblisting = mydb["job"]

# dummy tests
job1 = {
    "title": "",
    "description": "", 
    "location": "",
    "wage": "", 
    "requirements": ""
}

@app.route('/retrieve', methods = ['GET'])
def retrieve():

    return jsonify({
        "hello":"hello"
    }), 200

"""
Kat's superior pythonic code
also this one takes in json files for the search
"""
@app.route('/createjob', methods = ['POST'])
def get_json():

    return jsonify({
        "status":"done"
    }), 200

    #  main
if __name__ == "__main__":
    app.run()
