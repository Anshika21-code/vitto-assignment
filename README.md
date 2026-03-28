#  Vitto — AI-First BFSI Infrastructure Website

A full-stack web application built as part of the **Vitto Full Stack Intern Assignment**.
This project demonstrates an **AI-native digital credit infrastructure platform** for Banks, NBFCs, and MFIs — covering frontend product thinking, backend APIs, and database integration.

---

##  Live Demo

*  Frontend: *(Add your Vercel/Netlify link here)*
*  Backend API: *(Add your Render/Railway link here)*

---

##  Project Overview

This is **not a marketing website** — it is a **technical product website** designed to communicate:

* AI-first lending infrastructure
* End-to-end automation (LOS + LMS + Collections)
* Agentic AI architecture (RAG + SLM)
* Real-world BFSI workflows

---

##  Tech Stack

### Frontend

* React.js (Functional Components + Hooks)
* React Router DOM
* CSS / Tailwind (depending on your setup)

### Backend

* Node.js + Express.js
* JWT Authentication
* REST APIs

### Databases

* PostgreSQL (Lead storage)
* MongoDB (OTP session with TTL)

### Deployment

* Frontend → Vercel / Netlify
* Backend → Render / Railway

---

##  Folder Structure


<img width="300" height="700" alt="image" src="https://github.com/user-attachments/assets/50de4f2a-3b67-420d-a791-9d68c0caf8e7" />
<img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/f4e26fe3-5e53-4612-8174-225bc2edc760" />

---

##  Website Pages

* Homepage
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/cfcd80f1-73d3-44f9-b696-fef431f79b20" />

* AI-First Platform Page
* Full Stack Automation Page
<img width="480" height="257.5" alt="image" src="https://github.com/user-attachments/assets/ed8d4d68-6a42-49a8-902f-ccede15d3c31" />

* Collections Intelligence Page
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/50e52b0b-0b20-4ae4-b1a7-1cbbcc29420d" />

* Agentic AI Page
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/6d094e21-e13d-42e7-aedc-32b5e57dd119" />

* API Infrastructure Page
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/55d54fb2-fb23-473d-8138-afe3e3eabf68" />

* About Page
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/49c19fb0-11c9-437e-ae54-2e9aa8d06e40" />

* Contact Page
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/58d06957-5f27-441a-8585-df542b4a5c58" />

* Self Sign-Up Page (OTP flow)
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/6071634e-9b72-4477-a5fe-df4bba930fc9" />



---

##  Backend API Endpoints

### Auth

* `POST /api/auth/send-otp`
  → Sends mock OTP (logged in console)
<img width="800" height="500" alt="Postman_uysy4ezjJL" src="https://github.com/user-attachments/assets/7359d358-7844-49b0-96fc-9de0f0aaea27" />


* `POST /api/auth/verify-otp`
  → Verifies OTP and returns JWT token
<img width="800" height="500" alt="Postman_xT7zCqyhhV" src="https://github.com/user-attachments/assets/76c577e5-d756-4cff-939f-7b9048c7449d" />


### Leads

* `POST /api/leads`
  → Saves institution details in PostgreSQL

<img width="960" height="515" alt="vivaldi_aU79nGE47I" src="https://github.com/user-attachments/assets/0a0846d5-f4e8-4160-8ed8-b3dc2c3f5265" />


* `GET /api/leads/:id`
  → Fetches lead details
<img width="800" height="515" alt="Postman_MQJwg6Isao" src="https://github.com/user-attachments/assets/17b68933-7b85-491c-b91b-de5071fe5478" />

---

## 🗄️ Database Design

### PostgreSQL (Leads Table)
<img width="960" height="515" alt="image" src="https://github.com/user-attachments/assets/7d4aee7f-4af2-4bcf-871f-19dae20e2556" />


---

### MongoDB (OTP Collection)

* Stores OTP sessions
* TTL index: **10 minutes expiry**
* Used for temporary authentication

---

##  Environment Variables

Create a `.env` file in `server/`:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string
DATABASE_URL=your_postgres_connection_string

JWT_SECRET=your_secret_key


```

---

##  How to Run Locally

###  Clone Repo

```
git clone https://github.com/your-username/vitto-assign.git
cd vitto-assign
```

---

###  Setup Backend

```
cd server
npm install
npm run dev
```

---

###  Setup Frontend

```
cd client
npm install
npm run dev
```

---

###  Open App

```
http://localhost:5173
```

---

##  API Testing (Postman / Curl)

### Send OTP

```
POST /api/auth/send-otp
Body:
{
  "email": "test@example.com"
}
```

---

### Verify OTP

```
POST /api/auth/verify-otp
Body:
{
  "email": "test@example.com",
  "otp": "123456"
}
```

---

### Create Lead

```
POST /api/leads
Body:
{
  "email": "test@example.com",
  "phone": "9999999999",
  "institution_name": "ABC Finance",
  "institution_type": "NBFC",
  "city": "Mumbai",
  "loan_book_size": "50 Cr"
}
```

---

### Get Lead

```
GET /api/leads/:id
```

---

##  Key Features

*  AI-first product positioning (not retrofitted SaaS)
*  OTP-based onboarding flow
*  PostgreSQL + MongoDB hybrid architecture
*  Agentic AI explanation (RAG + SLM)
*  Real BFSI use-case driven UI
*  Clean modular frontend architecture

---

##  Thought Leadership

Included article:
**“Retrofit AI vs AI-Native Infrastructure in BFSI”**

(Attached in submission PDF)

---

##  Notes

* OTP is mocked (logged in console)
* No real SMS/email integration
* Backend designed for demonstration, not production

---

##  Author

**Anshika Tank**
B.Tech CSE (E-Commerce Technology)
VIT Bhopal

---

## 🎯 Final Thought

> Traditional LOS is a transaction system.
> **Vitto is a decisioning system.**
