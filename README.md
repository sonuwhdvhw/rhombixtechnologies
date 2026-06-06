# 🖥️ Terminal Portfolio — MERN Stack

A retro terminal-aesthetic portfolio with amber-on-charcoal palette, glitch animations, polaroid photo frame, and full MERN backend.

## Quick Start

### 1. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 2. Configure environment variables

**server/.env**
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
JWT_SECRET=your_super_secret_key_here
PORT=5000
```

**client/.env**
```
VITE_API_URL=http://localhost:5000/api
```

### 3. Add your profile photo

Place your photo at:
```
client/public/profile/photo.jpg
```

### 4. Update your personal data

Edit `client/src/data/portfolioData.js` — replace ALL placeholder values with your real info:
- `aboutData` — name, title, bio, goals, contact details, social links, WhatsApp number
- `backgroundData` — education and certifications
- `skillsData` — your actual skills
- `experienceData` — work history
- `projectsData` — your projects
- `testimonialsData` — endorsements
- `achievementsData` — awards and honors
- `blogData` — add articles when available

Also update `client/public/resume.html` with your real resume content.

### 5. Run the app

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
web/
├── client/                    # Vite + React frontend
│   ├── public/
│   │   ├── profile/photo.jpg  ← your photo here
│   │   └── resume.html        ← your resume
│   └── src/
│       ├── api/axios.js
│       ├── components/
│       │   ├── sections/      ← all 10 sections
│       │   ├── BackgroundEffect.jsx
│       │   ├── Footer.jsx
│       │   ├── Intro.jsx
│       │   ├── ScrollIndicator.jsx
│       │   └── SideMenu.jsx
│       ├── context/ThemeContext.jsx
│       ├── data/portfolioData.js  ← YOUR DATA HERE
│       ├── pages/Portfolio.jsx
│       ├── App.jsx
│       └── index.css
└── server/                    # Express + MongoDB backend
    ├── middleware/auth.js
    ├── models/                ← all Mongoose models
    ├── routes/                ← all API routes
    └── index.js
```

## API Endpoints

| Method | Endpoint              | Auth Required |
|--------|-----------------------|---------------|
| GET    | /api/about            | No            |
| GET    | /api/background       | No            |
| GET    | /api/skills           | No            |
| GET    | /api/experience       | No            |
| GET    | /api/projects         | No            |
| GET    | /api/testimonials     | No            |
| GET    | /api/blog             | No            |
| GET    | /api/achievements     | No            |
| POST   | /api/contact          | No            |
| POST   | /api/auth/login       | No            |
| POST   | /api/auth/register    | No (one-time) |
| POST   | /api/projects         | JWT ✓         |
| PUT    | /api/projects/:id     | JWT ✓         |
| DELETE | /api/projects/:id     | JWT ✓         |
| *(etc for all resources)* | | JWT ✓ |

## Deployment

**Frontend → Vercel**
1. Push `client/` to GitHub
2. Import to Vercel
3. Set env var: `VITE_API_URL=https://your-api.railway.app/api`

**Backend → Railway / Render / Fly.io**
1. Push `server/` to GitHub
2. Set env vars: `MONGO_URI`, `JWT_SECRET`, `PORT`

## Customization Checklist

- [ ] Replace all data in `portfolioData.js`
- [ ] Add profile photo to `public/profile/photo.jpg`
- [ ] Update `public/resume.html`
- [ ] Update `index.html` title tag
- [ ] Update WhatsApp number in `aboutData.whatsapp`
- [ ] Add real project GitHub / live URLs
- [ ] Add real credential URLs in background certifications
- [ ] Update the "OPEN TO WORK" badge text on the photo if needed
- [ ] Add blog articles when available
