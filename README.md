# 🎬 Netflix Clone - Fault Tolerant Architecture

> A full-stack MERN application engineered with resilience in mind. Features a self-healing backend that automatically switches to a local backup strategy during network failures or database outages.

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-000000?style=for-the-badge&logo=react)
![Uptime](https://img.shields.io/badge/Uptime-100%25-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Build-Resilient-blue?style=for-the-badge)

## 🚀 Key Features

* **🛡️ Fault-Tolerant Backend:** The core differentiator of this project. The server detects cloud database connection failures (e.g., `ECONNREFUSED` due to firewalls) and seamlessly degrades to a "Safe Mode," serving local cached data to ensure zero downtime for the user.
* **⚡ High-Performance Frontend:** Built with React.js for instantaneous page transitions and dynamic DOM manipulation.
* **🔐 Secure Architecture:** Environment variable management and isolated database connection logic.
* **📱 Responsive Design:** Fully adaptive UI mimicking the production Netflix experience.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, CSS3, TMDB API Integration
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud) + Local JSON Fallback (Resilience Layer)
* **Version Control:** Git & GitHub

---

## 🔧 Installation & Setup

If you want to run this locally, follow these steps:

### 1. Clone the Repository
```bash
git clone [https://github.com/Raghavsai12/MyNetflixProject.git](https://github.com/Raghavsai12/MyNetflixProject.git)
cd MyNetflixProject
### 2. Install Dependencies
You need to install packages for both the Client and Server.

### Backend:
```bash
cd backend
npm install

### Frontend:
```bash
cd ../frontend
npm install

### Running the Application
Start the Backend (Port 5000)
```Bash
cd backend
node server.js
### Note on Resilience: If you are on a restricted network (like a college WiFi), you may see a CONNECTION FAILED error in the terminal. This is expected behavior. The application will automatically switch to "Backup Mode" and continue functioning normally.

#### Start the Frontend (Port 3000)
Open a new terminal:

```Bash
cd frontend
npm start
### The application will launch automatically at http://localhost:3000.

## Architectural Decisions
### Why Fault Tolerance?
In production environments, database connections can be flaky. Instead of crashing the application (white screen of death), I implemented a Try-Catch-Fallback pattern in server.js.

Attempt: Connect to MongoDB Atlas.

Detect: Catch ECONNREFUSED or timeout errors.

Recover: Serve static backupData to the frontend.

This ensures the user experience is never interrupted, regardless of backend health.

## Author
Raghav Sai Full Stack Developer | Problem Solver
