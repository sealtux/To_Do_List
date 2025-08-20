from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Allow React frontend to fetch data

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",  # change this to your MySQL password
    database="flask"      # change this to your database name
)

@app.route("/")
def home():
    return "Flask is running!"

@app.route("/users")
def get_users():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM ppl")  # your table name
    results = cursor.fetchall()
    cursor.close()
    return jsonify(results)

if __name__ == "__main__":
    print("Running on http://127.0.0.1:5000")
    app.run(debug=True)
