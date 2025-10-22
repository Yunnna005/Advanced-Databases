# Advanced Databases

This repository contains materials and code examples for the Advanced Databases course.

## Environment Setup

This project runs in a development container with the following tools pre-installed:
- Python 3 with pip3
- Node.js and npm

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Advanced-Databases.git

cd Advanced-Databases
```

## Project Structure

```
/Advanced-Databases/
├── README.md
├── client_project/
├── coffee_shop_offline_app/
├── Dataset/
└── Documents/
```

## Client Side Project
Technologies: Python

Database: CouchDB (local)

The project shows how to connect to DB and use GET request.

To run the code
```bash
python3 app.py
```
! Do not forget to start redis.

Use config.py file to set your CouchDB deatils.

### Install the dependencies
```bash
pip install -r requirements.txt
```

### Import Data into CouchDB
The "import_csv.py" shows how to import dataset to CouchDB.

To run the script
```bash
python3 import_csv.py
```

## Coffee Shop Offline App
Vite + React + Tailwind CSS + Flowbite

The project does basic CRUD requests with coffee shop data using PouchDB for offline aclivity and CouchDB for main. The project runs on port 3000.

To start install npm
```bash
npm install

npm run dev
```

## Dataset
Using Data Analytics skils the data set was prepared to beimported to CouchDB with import_csv.py script. 


### Documents
Folder with Reports and declaration of originality form.
