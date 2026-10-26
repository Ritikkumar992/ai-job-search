# Instahyre Search - URL & Endpoint Reference

Instahyre (instahyre.com) is India's leading tech hiring platform connecting top software engineers with tech startups, scale-ups, and product MNCs in India.

## Endpoints

### 1. Job Search API (Public, JSON)
- **Method:** `GET`
- **URL:** `https://www.instahyre.com/api/v1/job_search`
- **Parameters:**
  - `skills`: Keyword/skill query (e.g. `Flutter`, `Dart`, `Mobile`, `Kotlin`).
  - `locations`: Location filter (e.g. `Bangalore`, `Mumbai`, `Delhi`, `Remote`).
  - `offset`: Pagination offset (`(page - 1) * 20`).
- **Response Format:** JSON
  - `objects`: Array of job objects
    - `id`: Job ID (number)
    - `title` / `candidate_title`: Role title
    - `employer.company_name`: Company name
    - `locations`: String of location(s)
    - `keywords`: Array of skill keywords
    - `public_url`: Direct public job URL

### 2. Job Detail Page
- **URL Pattern:** `https://www.instahyre.com/job-<id>-<slug>/` or provided via `public_url`.
- **Access & Robots:** `robots.txt` explicitly allows public API job search.
