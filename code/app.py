from flask import Flask, jsonify
import json
from pymongo import MongoClient



#mongodb
mongo = MongoClient(port=27017) 
db = mongo['healthandgreenspacedata']

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/api/health-green-data")
def health_green_data():
    
    return jsonify(db)

if __name__ == "__main__":
    app.run(debug=True)