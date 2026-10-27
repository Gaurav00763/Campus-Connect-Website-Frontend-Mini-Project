# WasteWise AI

WasteWise retains the React/Vite sustainability workspace and adds a local Flask backend. The backend uses direct, parameterized PyMySQL queries. It does not use SQLAlchemy or third-party application APIs. Database connection details are read from environment variables.

## Set up MySQL with Workbench

First create the database and a local application user in MySQL Workbench:

    CREATE DATABASE wastewise_ai CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    CREATE USER 'wastewise'@'localhost' IDENTIFIED BY 'choose-a-local-password';
    GRANT ALL PRIVILEGES ON wastewise_ai.* TO 'wastewise'@'localhost';
    FLUSH PRIVILEGES;

Open backend/schema.sql in MySQL Workbench and execute the whole script. It creates all eight tables: users, food_items, waste_records, donations, donation_requests, waste_predictions, notifications and activity_logs.

Alternatively, from PowerShell in the project root:

    mysql -u root -p < backend/schema.sql

Copy backend/.env.example to backend/.env and enter your MySQL host, port, username, password and database name. Set SECRET_KEY to a long random value. PORT selects the Flask listening port (5000 by default). Keep .env private. For HTTPS production, set COOKIE_SECURE=true; for a frontend on a different site also set COOKIE_SAMESITE=None and list its exact origin in FRONTEND_ORIGINS.

## Run locally on Windows

From the project root:

    python -m venv backend\.venv
    backend\.venv\Scripts\Activate.ps1
    pip install -r backend\requirements.txt
    Set-Location backend
    python run.py

In a second terminal, from the project root:

    npm install
    npm run dev

Open the Vite URL, usually http://127.0.0.1:5173. The local backend defaults to http://127.0.0.1:5000/api; set VITE_API_URL if Flask runs elsewhere.

Create the first administrator from the backend directory. The command prompts for credentials and does not store a production password in source:

    python scripts\create_admin.py

## Local functionality

- Registration always creates a normal account. Werkzeug hashes passwords. HTTP-only server-side sessions and CSRF tokens protect cookie-authenticated requests.
- Every account endpoint checks ownership. Admin authorization is enforced in Flask.
- Inventory CRUD, search, category filtering, waste recording and expiry alerts use MySQL records.
- Waste predictions use a clearly labeled local category, expiry and history heuristic, and save prediction history.
- Analytics summary, category totals, 7/30/90-day trends, prediction comparisons and CSV export are user scoped.
- Donations support listings, quantity-limited requests, donor approval, completion, cancellation and inventory deduction at completion.
- Admin tools include platform statistics, user activation, donation moderation and activity logs.

## Checks

At the project root, run:

    npm run build
    npm run lint

From the backend directory, run:

    python -m unittest discover -s tests -v

With MySQL connected and the schema loaded, verify account registration/login/logout/session restoration, ownership isolation, inventory updates, waste entries, predictions, analytics export, donation approval/completion and user/admin restrictions.
