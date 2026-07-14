# Muskurahat (مسکراہٹ) — Digital Oral Health Platform Prototype

A clickable, front-end prototype for **Muskurahat**, a digital oral health platform
for Pakistan. Built with **React + Vite + Tailwind CSS**, with a small
**Python/Flask** API stub to show the intended full-stack shape.

```
Muskurahat/
├── frontend/          React + Vite + Tailwind (the actual UI, this is what you'll run/see)
│   └── src/
│       ├── components/   Navbar, Hero, FeaturesGrid, EducationalHub,
│       │                 Dashboard, ClinicLocator, BookingModal, Chatbot, Footer
│       └── data/         mockData.js — clinics, articles, chatbot knowledge
└── backend/           Flask API stub (clinics, appointments, chatbot endpoints)
```

The frontend works fully standalone using mock data (`src/data/mockData.js`) —
you do **not** need to run the backend to see or interact with the prototype.
The backend is included to demonstrate how a real API would plug in.

---

## 1. Prerequisites

Install these once on your machine:

| Tool | Why | Check version |
|---|---|---|
| [Node.js](https://nodejs.org/) (LTS, v18+) | Runs the React/Vite frontend | `node -v` |
| [Python 3.10+](https://www.python.org/downloads/) | Runs the optional Flask backend | `python --version` |
| [VS Code](https://code.visualstudio.com/) | Editor | — |
| [Git](https://git-scm.com/) (optional) | Version control | `git --version` |

---

## 2. VS Code setup

### Recommended extensions
Open VS Code → Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`) and install:

1. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`) — fast component scaffolding
2. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) — autocomplete for the color tokens (`bg-cream`, `text-navy`, etc.)
3. **ESLint** (`dbaeumer.vscode-eslint`) — catches JS/JSX errors as you type
4. **Prettier – Code formatter** (`esbenp.prettier-vscode`) — consistent formatting on save
5. **Auto Rename Tag** (`formulahendry.auto-rename-tag`) — keeps JSX opening/closing tags in sync
6. **Python** (`ms-python.python`) — only needed if you'll touch `backend/app.py`
7. **Pylance** (`ms-python.vscode-pylance`) — Python IntelliSense
8. (Optional) **Path Intellisense** (`christian-kohler.path-intellisense`) — autocompletes import paths

Quick install from the command line (paste into VS Code's integrated terminal):

```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-rename-tag
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
```

### Recommended VS Code settings
Create `.vscode/settings.json` in the project root with:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*[\"'`]([^\"'`]*)[\"'`]"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

Open the project by choosing **File → Open Folder…** and selecting the
`Muskurahat/` folder (this shows both `frontend/` and `backend/` side by side).

---

## 3. Run the frontend (the prototype itself)

```bash
cd Muskurahat/frontend
npm install
npm run dev
```

Vite will print a local URL, typically **http://localhost:5173** — open it in
your browser (it will also try to auto-open). Any code change hot-reloads
instantly.

To build a static production bundle later: `npm run build` (output goes to
`frontend/dist/`, deployable to any static host — Vercel, Netlify, GitHub Pages, etc.).

---

## 4. Run the backend (optional, for the full-stack demo)

```bash
cd Muskurahat/backend
python -m venv venv
source venv/bin/activate        # on Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

This serves the API on **http://127.0.0.1:5000** with endpoints:

- `GET  /api/health` — sanity check
- `GET  /api/clinics?city=Karachi&service=RCT&verified_only=true` — filtered clinic list
- `POST /api/appointments` — create a booking (`name`, `phone`, `clinicId`, `date`, `time`)
- `GET  /api/appointments/<id>` — fetch a booking
- `POST /api/chat` — send `{ "message": "why do my gums bleed?" }`, get a mock AI reply

The React app currently talks to its own in-file mock data
(`src/data/mockData.js`) rather than this API, so the two run independently.
To wire them together, replace the imports in `ClinicLocator.jsx`,
`BookingModal.jsx`, and `Chatbot.jsx` with `fetch('http://127.0.0.1:5000/api/...')`
calls.

---

## 5. What's implemented in this prototype

- **Hero** — tagline, "Book an Appointment" / "Explore Resources" CTAs, animated doodle-style smile illustration
- **Features grid** — 6 ecosystem cards
- **Educational Hub** — English/Urdu toggle, tag filters, dedicated chaalia/gutka awareness card
- **Interactive Tools Dashboard** — working 2-minute brushing timer (start/pause/reset, quadrant prompts, animated progress ring), toothbrush replacement tracker, digital records list, care-reminder checklist, weekly streak
- **Clinic Locator** — live search + city filter + "PMDC verified only" filter
- **Booking Modal** — 3-step appointment flow (details → date/time → confirmation), pre-fills the clinic when booked from a clinic card
- **AI Chatbot** — sticky floating assistant with keyword-matched canned responses and a typing indicator

## 6. Design tokens used throughout

| Token | Hex | Tailwind class |
|---|---|---|
| Background / light surfaces | `#FFFDF6` | `bg-cream` |
| Soft accent / highlights | `#E2D4E0` | `bg-lilac` |
| Secondary / muted | `#949AB1` | `text-slate` |
| Primary brand | `#7C7E9D` | `bg-dusty` |
| Deep text / contrast | `#4C5372` | `text-navy` |

Fonts: **Fredoka** (display/headings), **Inter** (English body), **Noto
Nastaliq Urdu** (Urdu script, applied via the `.urdu` utility class).

---

## 7. Next steps for a production build

- Replace mock data with real API calls (Flask → Postgres, or swap to Node/Express)
- Real authentication for the digital dental records portal
- Real geolocation for the clinic locator (Google Maps / Mapbox)
- Real AI backend for the chatbot (e.g. Anthropic API with a system prompt scoped to oral-health guidance)
- Push notifications for care reminders and toothbrush replacement
- Accessibility audit pass (screen reader labels, contrast checks on `#949AB1` text combinations)
