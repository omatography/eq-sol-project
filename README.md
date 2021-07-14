# EQ-Sol
### Handwritten Equation Solving Web Application



EQ-Sol is a web application used to solve handwritten equations. It uses either webcam pic or uploaded pic and also can crop out the equation out of the image. Answer returns as the scanned Equation, it's type and solution.

## Features

- Have both options to take a picture using webcam and upload a pic
- Cropping out the equation from the image
- Uses contours for segmentation
- Uses CNN as classifier for the model
- Frontend is created using React

## Tech

EQ-Sol uses following technologies:

- React JS
- Node JS( for running react)
- Flask(for backend server)
- Contours(openCV)
- Convolutional Neural Network(CNN)
- Sympy


## Installation
### Frontend

EQ-Sol requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd eq-sol-frontend
npm start
```
That's all, the WebApp will load on your browser
### Backend
EQ-Sol requires [Node.js](https://nodejs.org/) v10+ to run.
```sh
cd eq-sol-backend
pip install flask
pip install flask-restful
pip install flask-cors
pip install tensorflow
pip install sympy
pip install opencv-python
pip install keras
flask run
```
Last statement will run flask  server.

That's it!, enjoy solving the equation.
