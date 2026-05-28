# 💰 Smart Expense Tracker

A full-stack expense tracking web application built using **Django REST Framework** and **React** that helps users manage and monitor their expenses efficiently.

## 🚀 Features

* 🔐 User Authentication (Signup & Login)
* 💸 Add, Edit, and Delete Expenses
* 📊 Expense Tracking Dashboard
* 📅 Date-wise Expense Management
* 📂 Category-based Expense Organization
* 🔄 REST API Integration
* 📱 Responsive UI
* ☁️ Deployment Ready (Render + Vercel)

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
* SQLite / PostgreSQL

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
expense-tracker/
│
├── backend/
│   ├── api/
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

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

---

### 2. Backend Setup (Django)

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

Windows:

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

Run backend server:

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000/
```

---

### 3. Frontend Setup (React)

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

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| POST   | /signup/       | Register user  |
| POST   | /login/        | User login     |
| GET    | /expenses/     | Fetch expenses |
| POST   | /expenses/     | Add expense    |
| PUT    | /expenses/:id/ | Update expense |
| DELETE | /expenses/:id/ | Delete expense |

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

* Expense Analytics & Charts
* Budget Limit Alerts
* Monthly Reports
* Export to CSV/PDF
* Dark Mode
* AI-based Spending Insights

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
