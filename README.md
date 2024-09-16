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
git clone https://github.com/riteshmaurya089/job-application-management-system-Backend
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
The server should now be running on http://localhost:5000.

# Make API requests using Postman or any other API client.
Endpoints to Test in Postman
1. POST /api/signup (Signup as an Applicant or Interviewer)
Method: POST
URL: https://job-application-management-system.onrender.com/api/signup
Body (raw - JSON):
json
Copy code
{
  "name": "Super Man",
  "email": "superman@gmail.com",
  "password": "Superman@123",
  "role": "applicant"  // or "interviewer"
}
Response:
Status: 201 Created
Body: User details with the JWT token.
2. POST /api/login (Login to get JWT)
Method: POST
URL: https://job-application-management-system.onrender.com/api/login
Body (raw - JSON):
json
Copy code
{
   "email": "superman@gmail.com",
  "password": "Superman@123"
}
Response:
Status: 200 OK
Body: JWT token.
3. POST /api/jobs (Add a Job Position)
Method: POST
URL: https://job-application-management-system.onrender.com/api/jobs
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Body (raw - JSON):
json
Copy code
{
  "title": "Software Engineer",
  "department": "Engineering",
  "description": "Develop software",
  "openDate": "2024-09-15"
}
Response:
Status: 201 Created
Body: Details of the newly created job.
4. GET /api/jobs (Retrieve All Jobs)
Method: GET
URL: https://job-application-management-system.onrender.com/api/jobs
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Response:
Status: 200 OK
Body: Array of job positions.
5. POST /api/applicants (Add an Applicant to a Job)
Method: POST
URL: https://job-application-management-system.onrender.com/api/applicants
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Body (raw - JSON):
json
Copy code
{
  "jobId": "jobObjectId",
  "name": "Yogeshmasai",
  "email": "yogeshmasai@gmail.com",
  "resumeLink": "http://example.com/resume.pdf",
  "status": "Pending"
}
Response:
Status: 201 Created
Body: Details of the applicant.
6. GET /api/applicants?jobId={jobId} (Retrieve Applicants for a Job)
Method: GET
URL: https://job-application-management-system.onrender.com/api/applicants?jobId=jobObjectId
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Response:
Status: 200 OK
Body: Array of applicants for the specific job.
7. PATCH /api/applicants/{applicantId} (Update Applicant Status)
Method: PATCH
URL: https://job-application-management-system.onrender.com/api/applicants/applicantObjectId
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Body (raw - JSON):
json
Copy code
{
  "status": "Interviewed"
}
Response:
Status: 200 OK
Body: Updated applicant details.
8. DELETE /api/applicants/{applicantId} (Delete an Applicant)
Method: DELETE
URL: https://job-application-management-system.onrender.com/api/applicants/applicantObjectId
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Response:
Status: 200 OK
Body: Success message.
9. POST /api/interviews (Schedule an Interview)
Method: POST
URL: https://job-application-management-system.onrender.com/api/interviews
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Body (raw - JSON):
json
Copy code
{
  "applicantId": "applicantObjectId",
  "interviewDate": "2024-09-20",
  "interviewerName": "John Interviewer"
}
Response:
Status: 201 Created
Body: Interview details.
10. GET /api/interviews?applicantId={applicantId} (Fetch Interview Details for an Applicant)
Method: GET
URL: https://job-application-management-system.onrender.com/api/interviews?applicantId=applicantObjectId
Authorization Header:
Type: Bearer Token
Token: Copy the JWT token from the login response.
Response:
Status: 200 OK
Body: Interview details for the applicant.

#All Endpoints to Test in Postman Tested.


![Screenshot (12)](https://github.com/user-attachments/assets/cc808ccf-1179-44f2-9e48-aa52d66e18c9)

![Screenshot (13)](https://github.com/user-attachments/assets/94269e57-544c-4abe-80a6-7527ad68b00e)

![Screenshot (11)](https://github.com/user-attachments/assets/15bcc100-92e1-4f47-a137-e5347bb4781d)

![Screenshot (14)](https://github.com/user-attachments/assets/69686bf7-05d6-41ef-97e8-4f574090e998)


![Screenshot (15)](https://github.com/user-attachments/assets/16c575dc-2a1c-40e9-9067-9d4d9051db2d)


![Screenshot (16)](https://github.com/user-attachments/assets/7534aab7-34be-4fec-b325-a36ee7ed6ec9)

![Screenshot (17)](https://github.com/user-attachments/assets/6a5a57cc-7a10-43d8-a45c-7f3a3da8af72)


![Screenshot (18)](https://github.com/user-attachments/assets/a5386e75-b9df-4880-8068-e5cc30d41f82)

![Screenshot (19)](https://github.com/user-attachments/assets/9816f016-761e-430b-94db-b17992dc277e)

![Screenshot (20)](https://github.com/user-attachments/assets/d95d2040-d8cd-4f29-b25d-0ab461615a1c)


