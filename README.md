📦 Banks Information API (Nepal)

A simple REST API that provides structured information about banks, financial institutions, and related instruments listed in Nepal.
The API is deployed on Render and serves data directly from a JSON source.

🚀 Features

Get a list of all institutions

Fetch only bank names

Fetch details by symbol (e.g. NABIL)

Filter institutions by sector

Lightweight, fast, and easy to integrate

No database required (JSON-based)

🛠️ Tech Stack

Node.js

Express.js

JSON data source

Render.com (hosting)

📂 Project Structure
.
├── index.js          # Express server
├── bankinfo.json     # Data source (institutions list)
├── package.json      # Project configuration
└── README.md

🌐 Base URL

After deployment on Render, your API will be available at:

https://your-app-name.onrender.com

📌 API Endpoints
1️⃣ Health Check
GET /


Response

{
  "ok": true,
  "message": "Banks API is running"
}

2️⃣ Get All Institutions
GET /banks


Returns all institutions available in the dataset.

3️⃣ Get Only Names
GET /banks/names


Response

[
  "Nabil Bank Limited",
  "Nepal Investment Bank Limited",
  "Standard Chartered Bank Limited"
]

4️⃣ Get Institution by Symbol
GET /banks/:symbol


Example

GET /banks/NABIL


Response

{
  "id": 131,
  "symbol": "NABIL",
  "name": "Nabil Bank Limited",
  "sector": "Commercial Bank",
  "instrument": "Equity"
}

5️⃣ Filter by Sector
GET /banks?sector=Commercial%20Bank


Available sectors include

Commercial Bank

Development Bank

Finance

Microfinance

Hydro Power

Insurance

Mutual Fund

Debenture

Manufacturing And Processing

Hotels And Tourism

Investment

Others

🧑‍💻 Running Locally (Optional)

If you want to run it locally:

npm install
npm start


Then open:

http://localhost:3000

☁️ Deployment (Render)

This project is designed to run on Render.com.

Render Settings

Environment: Node

Build Command: npm install

Start Command: npm start

Render automatically installs dependencies from package.json.

📦 Data Source

All data is stored in a single JSON file:

bankinfo.json


You can update or extend the data without changing the API logic.

🔐 CORS Support

CORS is enabled, so this API can be safely consumed from:

Web apps

Mobile apps

Flutter / React / Vue

Backend services

📄 License

This project is open for learning, internal tools, and integration use.
You may adapt or extend it as needed.
