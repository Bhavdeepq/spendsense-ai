# 💰 Smart Expense Tracker (SpendSense)

A full-stack expense tracking web application built using **Django REST Framework** and **React** that helps users manage, organize, and monitor their expenses efficiently.

## 🌐 Live Demo

**Frontend (Vercel):**
https://spendsense-ai-kappa.vercel.app/

**Backend API (Render):**
https://spendsense-ai-1.onrender.com/

---

## 🚀 Features

* 🔐 Secure User Authentication (Signup & Login using JWT)
* 💸 Add, Edit, and Delete Expenses
* 📊 Expense Tracking Dashboard
* 📅 Date-wise Expense Management
* 📂 Category-based Expense Organization
* 🔄 REST API Integration
* 📱 Responsive User Interface
* ☁️ Fully Deployed using Render + Vercel

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* JavaScript
* CSS

### Backend

* Django
* Django REST Framework
* JWT Authentication
* SQLite

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
spendsense-ai/
│
├── backend/
│   ├── config/
│   ├── expenses/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Bhavdeepq/spendsense-ai.git
cd spendsense-ai
```

---

## Backend Setup (Django)

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Apply migrations:

```bash
python manage.py migrate
```

Run backend:

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000/
```

---

## Frontend Setup (React)

Move to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000/
```

---

## 🔌 API Endpoints

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| POST   | /api/signup/       | Register User  |
| POST   | /api/login/        | User Login     |
| GET    | /api/expenses/     | Fetch Expenses |
| POST   | /api/expenses/     | Add Expense    |
| PUT    | /api/expenses/:id/ | Update Expense |
| DELETE | /api/expenses/:id/ | Delete Expense |

---

## 📸 Screenshots

Add screenshots of:

* Login Page
* Signup Page
* Dashboard
* Expense List

Example:

```md
![Dashboard](screenshots/dashboard.png)
```

---

## 🎯 Future Improvements

* 📈 Expense Analytics & Charts
* 💰 Budget Limit Alerts
* 📊 Monthly Reports
* 📄 Export to CSV/PDF
* 🌙 Dark Mode
* 🤖 AI-based Spending Insights

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Bhavdeep Singh**
B.Tech CSE (AI & ML)
Passionate about Full Stack Development, AI/ML, and solving real-world problems.
