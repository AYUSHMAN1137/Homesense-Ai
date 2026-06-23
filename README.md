# HomeSense AI

AI-powered guest review analytics dashboard for eco-homestays in Uttarakhand.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **AI:** Google Gemini (Week 5+)
- **Database:** In-memory (Week 4) → PostgreSQL/Supabase (Week 5)

---

## How to Run Frontend Locally

```bash
# From project root
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## How to Run Backend Locally

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create your .env file from example
cp .env.example .env

# Start the development server
npm run dev
```

Backend runs at: `http://localhost:5000`

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/reviews` | List all reviews |
| GET | `/api/reviews/:id` | Get single review |
| POST | `/api/reviews` | Add a new review |
| DELETE | `/api/reviews/:id` | Delete a review |
| GET | `/api/reviews/search?q=` | Search reviews |
| POST | `/api/analyze` | Analyze a review with AI |
| GET | `/api/dashboard` | Get dashboard stats |

---

## Project Structure

```
├── backend/              # Express backend
│   ├── data/             # In-memory data store
│   ├── routes/           # API route definitions
│   ├── controllers/      # Business logic
│   ├── middleware/       # Error handling
│   ├── server.js         # Entry point
│   └── .env.example      # Environment variable template
├── src/                  # React frontend
│   ├── components/       # Reusable UI components
│   └── pages/            # Application pages
└── README.md
```

---

## Intern ID: TBI-26100898
