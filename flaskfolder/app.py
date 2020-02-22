import io
import os
import requests
import psycopg2

from flask import Flask, request, jsonify

app = Flask(__name__)

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
