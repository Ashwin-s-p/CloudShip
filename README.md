![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue)
![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-black)
![Nginx](https://img.shields.io/badge/Nginx-Reverse_Proxy-brightgreen)
![Uptime Kuma](https://img.shields.io/badge/Uptime_Kuma-Monitoring-purple)

#  CloudShip – Production-Style DevOps Deployment System

CloudShip is a production-style DevOps project built using Node.js, Docker, AWS EC2, Nginx, GitHub Actions CI/CD, and monitoring tools.

This project demonstrates real-world deployment practices including containerization, automated deployment pipelines, reverse proxy configuration, health monitoring, logging, and uptime tracking.

---

#  Live Deployment

http://3.110.131.24

---

#  Project Goal

CloudShip was built to understand real-world DevOps workflows including containerization, automated deployment pipelines, reverse proxy setup, health monitoring, logging, and uptime tracking in a production-style cloud environment.

---

#  Features

✅ Dockerized Node.js Application  
✅ AWS EC2 Deployment  
✅ GitHub Actions CI/CD Pipeline  
✅ Nginx Reverse Proxy  
✅ Health Check Endpoint  
✅ Request Logging  
✅ Uptime Monitoring using Uptime Kuma  
✅ Public Cloud Deployment  
✅ Automated Container Deployment  
✅ Real-Time Monitoring Dashboard  

---

#  Tech Stack

- Node.js
- Express.js
- Docker
- AWS EC2
- GitHub Actions
- Nginx
- Uptime Kuma
- Linux (Ubuntu)

---

#  Project Architecture

```text
User
  ↓
Nginx Reverse Proxy
  ↓
Docker Container
  ↓
Node.js Application
  ↓
Health Monitoring & Logging
  ↓
Uptime Kuma Monitoring
```

---

#  CI/CD Workflow

1. Developer pushes code to GitHub  
2. GitHub Actions pipeline triggers automatically  
3. GitHub Actions connects to AWS EC2 using SSH  
4. Existing Docker container stops  
5. New Docker image builds automatically  
6. Updated container deploys automatically  
7. Nginx routes traffic to the application  

---

#  Health Monitoring

The application includes a dedicated health monitoring endpoint:

```bash
/health
```

This endpoint is continuously monitored using Uptime Kuma for uptime tracking and availability checks.

---

#  Request Logging

CloudShip includes request-level logging to monitor incoming traffic and observe public internet requests hitting the deployed server.

Example logs:

```bash
GET /
GET /health
GET /.env
GET /wp-admin
```

---

#  Real-World Traffic Observation

After deploying the application publicly on AWS EC2, the server received automated vulnerability scanning requests targeting common PHP and WordPress paths.

Request logging was used to monitor and analyze incoming traffic patterns in real time.

---

#  Project Structure

```text
CloudShip/
│
├── .github/workflows/
├── screenshots/
├── Dockerfile
├── app.js
├── package.json
└── README.md
```

---

#  Screenshots

## 🟢 Application Running

![Application Running](screenshots/app-running.png)

---

## 🟢 Health Endpoint

![Health Endpoint](screenshots/health-endpoint.png)

---

## 🟢 GitHub Actions CI/CD

![GitHub Actions](screenshots/github-actions.png)

---

## 🟢 Uptime Kuma Monitoring

![Uptime Kuma](screenshots/uptime-kuma.png)

---

## 🟢 Docker Logs

![Docker Logs](screenshots/docker-logs.png)

---

#  Deployment Steps

## Clone Repository

```bash
git clone https://github.com/Ashwin-s-p/CloudShip.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Application

```bash
node app.js
```

---

## Build Docker Image

```bash
docker build -t cloudship-app .
```

---

## Run Docker Container

```bash
docker run -d -p 3000:3000 --name cloudship-container cloudship-app
```

---

#  Monitoring Setup

Uptime Kuma is used for continuous health monitoring of the application.

Monitor URL:

```bash
http://3.110.131.24/health
```

The monitoring dashboard continuously checks application uptime and response availability.

---

# 👨‍💻 Author

Ashwin Poojary

GitHub: https://github.com/Ashwin-s-p
