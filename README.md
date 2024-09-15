# job-application-management-system-Backend
Job Application Management System
This is a Job Application Management System built using the MERN stack (MongoDB, Express.js, Node.js) for managing job listings, applicants, and interview scheduling. The system provides role-based access for applicants and interviewers with features like JWT-based authentication, job applications, and interview management.

# Table of Contents
Technologies
Features
Prerequisites
Installation
Environment Variables
API Endpoints
Running the Project
Testing with Postman
Project Structure
License
Technologies
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JWT (JSON Web Tokens)
Validation: express-validator
Security: Bcrypt.js (for password hashing)
# Features
User authentication (signup/login with JWT)
Role-based access control (Applicants, Interviewers)
Job listing management
Applicant job applications
Interview scheduling
Basic input validation (email, password complexity, etc.)
Error handling (non-existent job/applicant, duplicate applications, etc.)
# Prerequisites
Before running the project, ensure you have:

Node.js (v14+)
MongoDB installed locally or a cloud-based MongoDB service
Postman for API testing (optional)
Installation
Clone the repository:

# bash
Copy code
git clone https://github.com/your-username/job-application-management-system.git
Navigate to the project directory:

bash
Copy code
cd job-application-management-system
Install the dependencies:

bash
Copy code
npm install
Environment Variables
Create a .env file in the root directory and add the following environment variables:

env
Copy code
# MongoDB connection string
MONGO_URI=mongodb://localhost:27017/job_application_system

# JWT Secret for token generation
JWT_SECRET=your_jwt_secret

# Server Port
PORT=5000
# API Endpoints
Authentication
POST /api/auth/signup: Register a new user (applicant/interviewer)
POST /api/auth/login: Login and get a JWT
Jobs
GET /api/jobs: Get all job listings
POST /api/jobs: Create a new job (interviewer only)
Applicants
POST /api/applicants: Apply for a job (applicant only)
GET /api/applicants: Get applicant's job applications (applicant only)
Interviews
POST /api/interviews: Schedule an interview (interviewer only)
GET /api/interviews: Get interviews for an applicant (interviewer only)
Running the Project
Start the server in development mode using nodemon:

# bash
Copy code
node app.js
OR start the server normally:

# bash
Copy code
node app.js
The server should now be running on http://localhost:5000.

# Make API requests using Postman or any other API client.

# Testing with Postman
User Authentication:

Signup: POST /api/auth/signup
Body: { "email": "user@example.com", "password": "Password123!", "role": "applicant" }
Login: POST /api/auth/login
Body: { "email": "user@example.com", "password": "Password123!" }
Job Management (for interviewers):

Create Job: POST /api/jobs
Body: { "title": "Frontend Developer", "description": "React.js developer", "company": "ABC Corp", "salary": "70000" }
Applicant Management (for applicants):

Apply for Job: POST /api/applicants
Body: { "jobId": "job-id-here", "applicantId": "applicant-id-here" }
Interview Management (for interviewers):

Schedule Interview: POST /api/interviews
Body: { "applicantId": "applicant-id-here", "date": "2023-12-25" }
