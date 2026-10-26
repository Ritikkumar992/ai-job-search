# Search Queries for Job Scraper - Ritik Kumar

## Overview
Targeted job discovery queries optimized for Ritik Kumar's 2+ years of production Flutter, Clean Architecture, BLoC/Provider, and full-stack mobile engineering experience.

---

## 1. Installed Portal CLIs (Direct & Instant Discovery)

The following CLI tools search public job feeds directly via Bun:

- **`linkedin-search`**:
  ```bash
  # Search LinkedIn across India or specific cities
  bun run .agents/skills/linkedin-search/cli/src/cli.ts search -q "Flutter Developer" -l "India" --format table
  bun run .agents/skills/linkedin-search/cli/src/cli.ts search -q "Flutter Developer" -l "Bengaluru, Karnataka, India" --format table
  bun run .agents/skills/linkedin-search/cli/src/cli.ts search -q "Flutter Developer" -l "Remote" --remote remote --format table
  ```

- **`instahyre-search`** (India's premier tech startup & product company platform):
  ```bash
  # Search top Indian tech startups & unicorns on Instahyre
  bun run .agents/skills/instahyre-search/cli/src/cli.ts search -q "Flutter" --format table
  bun run .agents/skills/instahyre-search/cli/src/cli.ts search -q "Flutter" -l "Bangalore" --format table
  bun run .agents/skills/instahyre-search/cli/src/cli.ts search -q "Flutter" -l "Remote" --format table
  ```

---

## 2. WebSearch Queries (Naukri, Indeed India, Wellfound, Foundit)

Use these Google `site:` queries to discover active job listings across Indian portals that protect against automated scrapers:

### Priority 1: Core Flutter & Mobile Engineering (Direct Match)
Targeting roles that require production Flutter, Dart, and architecture design:

```
site:naukri.com "Flutter Developer" ("Clean Architecture" OR "BLoC" OR "Provider") India
site:naukri.com "Flutter Developer" (Kolkata OR Bangalore OR Remote OR Hyderabad)
site:in.indeed.com "Flutter Developer" (Remote OR "Work from Home") India
site:in.indeed.com "Flutter Developer" (Bangalore OR Kolkata OR Pune OR Gurgaon)
site:wellfound.com/jobs "Flutter" ("India" OR "Remote")
site:foundit.in "Flutter Developer" (India OR Remote)
```

### Priority 2: Mid-to-Senior & High-Ownership Roles
Matching Ritik's track record of leading 2 production apps end-to-end and managing Play Store/App Store lifecycles:

```
site:naukri.com "Senior Flutter Developer" OR "Lead Flutter Developer" India
site:naukri.com "Mobile Engineer" (Flutter AND Kotlin) India
site:in.indeed.com "Senior Mobile Engineer" Flutter India
site:instahyre.com "Flutter" ("Senior" OR "Lead" OR "Architect")
site:linkedin.com/jobs "Senior Flutter Developer" India
```

### Priority 3: Cross-Platform & Full-Stack Mobile (Flutter + .NET / SQL Server / APIs)
Roles valuing candidates who can handle both client-side Flutter and backend REST API integration:

```
site:naukri.com "Flutter" (".NET" OR "SQL Server" OR "Backend") India
site:in.indeed.com "Flutter Developer" ("REST API" OR "Retrofit") India
site:naukri.com "Flutter" ("Razorpay" OR "Payment Gateway" OR "Logistics" OR "Fintech")
```

### Priority 4: City-Specific Targeted Searches

#### Remote (India & Global)
```
site:naukri.com "Flutter Developer" "Remote" India
site:in.indeed.com "Flutter" "Remote" India
site:linkedin.com/jobs "Flutter Developer" "Remote" India
```

#### Kolkata (Home Base)
```
site:naukri.com "Flutter Developer" Kolkata
site:in.indeed.com "Flutter Developer" Kolkata
site:linkedin.com/jobs "Flutter Developer" Kolkata
```

#### Bengaluru / Bangalore (India's Tech Capital)
```
site:naukri.com "Flutter Developer" Bangalore OR Bengaluru
site:instahyre.com "Flutter" Bangalore
site:in.indeed.com "Flutter" Bangalore
```

#### Hyderabad / Pune / Delhi NCR / Mumbai
```
site:naukri.com "Flutter Developer" (Hyderabad OR Pune OR Gurgaon OR Noida OR Mumbai)
site:in.indeed.com "Flutter Developer" (Hyderabad OR Pune OR Mumbai)
```

---

## 3. Location & Commute Filters
- **Preferred:** Remote, Kolkata (Home city), Hybrid or On-site in Bangalore, Hyderabad, Pune, Mumbai, Gurgaon / Noida / Delhi NCR.
- **Relocation:** Open to relocation for solid engineering teams and competitive compensation.

---

## 4. Screening Filters
- **Experience Requirement:** 1 to 4 years (ideal bracket for Ritik's 2+ years of production experience).
- **Core Technology Match:** Flutter, Dart, Android/Kotlin, Clean Architecture, BLoC/Cubit, Provider, Riverpod, RESTful APIs, Git, Play Store tracks.
- **Language Requirements:** English (professional working proficiency) and Hindi (native).
