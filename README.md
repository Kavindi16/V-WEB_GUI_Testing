# Initialization

npm init -y


# Run the server

npm install express
node src/server.js

The application will run at http://localhost:3000



# Run the UI test

## Create a new venv
python3 -m venv selenium-env

## Activate it
source selenium-env/bin/activate   # Linux / macOS
selenium-env\Scripts\activate      # Windows PowerShell

## Install dependencies
pip install --upgrade pip
pip install selenium webdriver-manager pytest

## Run the test
pytest -s test_ui.py



# Optional

## Dependencies Installation

npm install express --save

npm install --save-dev mocha chai supertest

## Run the unit test
npx mocha test/hextorgb.test.js

## Run the Integration test
npx mocha test/server.test.js
