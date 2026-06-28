# 🚀 GitHub Profile Analyzer API

A backend service that analyzes GitHub user profiles using the GitHub Public API and stores useful insights in a MySQL database.

The application fetches GitHub user details, analyzes repository data, and stores the analysis results for future access.

---

# ✨ Features

- Fetch GitHub profile data using username
- Fetch public repositories from GitHub API
- Analyze GitHub profile:
  - Public repository count
  - Followers count
  - Following count
  - Total repository stars
  - Total repository forks
  - Top programming language
  - Most starred repository
  - Average stars per repository
- Store analysis results in MySQL database
- Duplicate profile handling using UPSERT
- REST API architecture
- Error handling
- Cloud database support
- Deployed API

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js

## Database

- MySQL
- Railway Cloud MySQL

## External API

- GitHub REST API

## Deployment

- Render (Backend)
- Railway (Database)

---

# 📁 Project Structure

```text
github-profile-analyzer/

│
├── src/
│
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── profileController.js
|   |
│   ├── middleware/
│   │   └── errorHandler.js
│   │   └── notFound.js
│   │
│   ├── models/
│   │   └── profileModel.js
│   │
│   ├── routes/
│   │   └── profileRoute.js
│   │
│   ├── services/
│   │   └── analyzerService.js
|   |   └── githubService.js
│   │
│   ├── utils/
│   │   └── asyncHandler.js
│   │
│   ├── app.js
│   │
│   └── server.js
│
│
├── database/
│   └── schema.sql
│
│
├── postman/
│   └── GitHub Profile Analyzer API.postman_collection.json
│
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/github-profile-analyzer.git
```

Go into project:

```bash
cd github-profile-analyzer
```

---

## 2. Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create `.env` file in the root folder.

Example:

```env
PORT=5000

DB_HOST=your_mysql_host
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=railway

GITHUB_API=https://api.github.com
```

---

# 🗄️ Database Setup

Create table using:

```
database/schema.sql
```

SQL:

```sql
CREATE TABLE profiles (

id INT AUTO_INCREMENT PRIMARY KEY,

username VARCHAR(100) UNIQUE NOT NULL,

name VARCHAR(150),

avatar_url TEXT,

github_url TEXT,

public_repos INT,

followers INT,

following INT,

total_stars INT,

total_forks INT,

top_language VARCHAR(100),

most_starred_repo VARCHAR(200),

average_stars FLOAT,

account_created DATETIME,

analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
```

---

# ▶️ Run Project

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server:

```text
http://localhost:5000
```

---

# 🌐 Live API

Deployment:

```text
https://github-profile-analyzer-bsg2.onrender.com
```

---

# 📡 API Documentation

## Analyze GitHub Profile

### Method

```http
GET
```

### Endpoint

```http
/api/analyze/:username
```

---

Example:

```text
https://github-profile-analyzer-bsg2.onrender.com/api/analyze/appy-spec
```

---

# ✅ Success Response

```json
{
    "success": true,
    "message": "Profile analyzed successfully",
    "analysis": {

        "total_stars": 12500,

        "total_forks": 3400,

        "top_language": "JavaScript",

        "most_starred_repo": "example-repo",

        "average_stars": 450

    }
}
```

---

# ❌ Error Response

```json
{
    "success": false,
    "message": "GitHub user not found"
}
```

---

# 🗃️ Database Fields

| Column | Description |
|---|---|
| id | Primary key |
| username | GitHub username |
| name | User full name |
| avatar_url | Profile image |
| github_url | GitHub profile link |
| public_repos | Repository count |
| followers | Followers count |
| following | Following count |
| total_stars | Total stars |
| total_forks | Total forks |
| top_language | Most used language |
| most_starred_repo | Highest starred repository |
| average_stars | Average stars |
| account_created | GitHub account creation date |
| analyzed_at | Analysis timestamp |

---

# 📮 Postman Collection

Postman collection is available here:

```text
postman/

└── GitHub Profile Analyzer API.postman_collection.json
```

Import this file into Postman.

Available API:

```http
GET /api/analyze/:username
```

Example:

```http
GET

https://github-profile-analyzer-bsg2.onrender.com/api/analyze/appy-spec
```

---

# 🚀 Deployment

## Backend

Platform:

```text
Render
```

Steps:

```text
1. Push project to GitHub

2. Connect repository with Render

3. Select Node environment

4. Build Command:

npm install


5. Start Command:

npm start


6. Add environment variables

7. Deploy
```

---

## Database

Platform:

```text
Railway MySQL
```

Database credentials are added using environment variables.

---

# ⚠️ Common Errors

## Database connection failed

Check:

```text
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```

---

## Table does not exist

Run:

```text
database/schema.sql
```

---

## Invalid date error

Use:

```sql
account_created DATETIME
```

because GitHub API returns timestamp format.

---

# 🔮 Future Improvements

- Authentication
- User dashboard
- Redis caching
- API rate limiting
- Pagination
- GitHub contribution analysis
- Frontend dashboard

---

# 👨‍💻 Author

Rahul Patel

---

# 📄 License

This project is created for educational purposes.
