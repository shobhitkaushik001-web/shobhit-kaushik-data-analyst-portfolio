# Secure Admin Setup

This version never stores your admin password in HTML/JavaScript/GitHub.

## Security model
- Public visitors can only read published projects.
- Only `shobhitkaushik1824@gmail.com` can insert, update or delete projects.
- Supabase Authentication verifies the password.
- PostgreSQL Row Level Security (RLS) enforces write access even if someone manually calls the API.
- There is no sign-up form on the site.
- Never place a Supabase service-role key in the website. The browser `anon` / publishable key is expected to be public and is protected by RLS.

## One-time setup
1. Create a Supabase project.
2. Open Supabase **SQL Editor** and run the full `supabase_setup.sql` file.
3. Open **Authentication > Users** and create exactly your admin user with email `shobhitkaushik1824@gmail.com` and a strong unique password.
4. In Auth settings, disable public user sign-ups / new registrations.
5. Copy your Supabase **Project URL** and **anon / publishable key** from Project Settings > API.
6. Put those two values in `config.js`.
7. Run the site with VS Code Live Server and open `admin.html`.
8. Log in, add one test project, then check `index.html` to confirm it appears publicly.
9. Upload the site to GitHub and deploy to Netlify.

## Password advice
Use a password-manager-generated password of at least 16 random characters. Do not reuse your Gmail password.

## Why the Admin button can remain visible
Security does not depend on hiding `admin.html`. Anyone can discover the URL, but they cannot write to the database without a valid authenticated token for the allowlisted admin email. RLS rejects all other accounts.
