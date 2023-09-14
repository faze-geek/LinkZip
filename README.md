# LinkZip
A URL Shortener Application build with React JS, Flask and Firebase. \
Checkout Video Tutorial - https://drive.google.com/file/d/1827iDkJSYXS-Ob5LtUHGCruUQo7e-r8j/view?usp=drive_link 

The project is composed a client (linkzip) and a server (linkzip-server).

## Client
Takes the long URL from a user, stores it in a database and gives the user a generated mini url. 

### Changes 
1. Firebase config in index.js. Change it as per your own firebase account.

### Running Locally
1. `npm install`
2. `npm start`
3. `npm run build`

## Server
A flask web server that listens for calls made with the generated URL, goes to the database, fetches the long URL then redirects the user.

### Changes
1. Firebase ServiceAccountKey.json file in `linkzip-server/app/main.py`.
2. Firebase Database URL in `linkzip-server/app/main.py`.

### Running Locally
1. Place the build inside `linkzip-server/app`. 
2. `python wsgi.py`
