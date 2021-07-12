from flask import Flask
from flask.globals import request
from flask_cors import CORS 
from werkzeug.utils import secure_filename
import base64
import os
from model import model 
from io import BytesIO
from flask import Flask, flash, request, redirect, url_for
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

CORS(app)     #CORS module added to app

image_req_args = reqparse.RequestParser()       #access request parameter from frontend
image_req_args.add_argument("image", type=str)  #add image parameter


@app.route('/api', methods=['POST'])            #set api name and method
def index():

    args = image_req_args.parse_args()
    image = BytesIO(base64.urlsafe_b64decode(args['image'])) #convert base64 image string to binary
    Result  = model(image)              # assign return object from model() to Result               

    return Result                       # return Result as response to frontend
    


    