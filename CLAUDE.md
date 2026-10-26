# Job Application Assistant for Ritik Kumar

## Role
This repo is a job application workspace. Antigravity / Assistant acts as a career advisor and application assistant for Ritik Kumar, helping with:
1. **Job fit evaluation** - Assess job postings against your profile (skills, experience, behavioral traits)
2. **CV tailoring** - Adapt existing CV templates (LaTeX/moderncv) to target specific roles
3. **Cover letter writing** - Draft targeted cover letters using existing templates (LaTeX)
4. **Interview preparation** - Prepare answers, questions, and talking points for interviews
5. **Career strategy** - Advise on positioning and personal branding

## Candidate Profile

### Identity
- **Name:** Ritik Kumar
- **Location:** Kolkata, India (Open to Remote, Hybrid, and Relocation)
- **Languages:**
  | Language | Level |
  |----------|-------|
  | English | Professional working proficiency |
  | Hindi | Native |
- **CV language:** English
- **Status:** Employed (Mobile Developer at Skyking Courier)
- **LinkedIn headline:** "Flutter Developer | Android & iOS | Clean Architecture | BLoC, Provider, Riverpod | .NET & SQL Server"
- **Email:** ritik.myworkmail@gmail.com
- **Phone:** +91-9693882391
- **GitHub:** https://github.com/Ritikkumar992
- **LinkedIn:** https://linkedin.com/in/ritikkumar992

### Education
- **B-Tech in Computer Science and Engineering** (2020-2024) - Budge Budge Institute of Technology (MAKAUT)
  - GPA: 8.7 / 10
  - Topics: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Software Engineering
- **Class XII (CBSE)** (2019-2020) - Jawahar Navodaya Vidyalaya
  - GPA: 8.5 / 10
- **Class X (CBSE)** (2017-2018) - DAV Public School
  - GPA: 9.5 / 10

### Professional Experience
- **Mobile Developer** (05/2024 - Present) - **Skyking Courier** (Kolkata, India)
  - Lead two production Flutter apps end-to-end — architecture, QA, releases, and live incident response.
  - Shipped 20+ releases in 12 months with same-day hotfix pipeline, maintained 99%+ app stability across both apps.
  - Applied Clean Architecture and MVVM with modular design, used GetIt for DI and Repository Pattern for clean data layer separation.
  - Optimized app performance targeting ANR reduction and memory caching, built live exception dashboard for real-time crash triage and production health monitoring.
  - Managed full Android & iOS release lifecycle — APK/AAB builds, Play Store tracks, App Store provisioning, certificates, TestFlight and CI/CD automation.
  - Architected e-Way Bill integration (GST portal sync, CNote linking), Inventory System across 1,800+ branches, real-time parcel tracking, OTP flow and Razorpay payment gateway.
- **Mobile Developer Intern** (01/2024 - 04/2024) - **Promact Info Tech** (Vadodara, India)
  - Developed and tested mobile applications using Flutter, Java & Kotlin.
  - Worked alongside senior engineers to debug, profile, and optimize application performance, directly improving user experience metrics.
- **Front-End Web Developer Intern** (08/2022 - 11/2022) - **ActibeWeb** (Remote)
  - Developed responsive websites using HTML, CSS, JavaScript, and Bootstrap for multiple clients.
  - Independently developed and shipped responsive websites ensuring cross-browser compatibility and on-time delivery.

### Technical Skills
- **Primary:** Flutter, Dart, Kotlin, Clean Architecture, BLoC/Cubit, Provider, RiverPod, State Management, MVVM, SOLID Principles
- **Secondary:** Java, Coroutines & Flow, .NET Framework, SQL Server, RESTful APIs, Retrofit, HTTP, Hive
- **Domain:** Mobile Application Engineering, Logistics & Courier POS Systems, Real-time Parcel Tracking, Payment Gateway Integration (Razorpay), e-Way Bill & GST automation
- **Software & Tools:** Google Play Console, Apple TestFlight, Git/GitHub, CI/CD pipelines, Gradle, Android Studio, VS Code, Supabase, Firebase, OpenWeather API

### Awards & Achievements
- **AIR 3266** in TCS CodeVita Season 10.
- **99.23%ile** in TCS NQT 2023.
- **800+** Data Structures & Algorithms problems solved on LeetCode.
- **500+** Competitive Programming problems solved on Codeforces.

### Behavioral Profile
- **Analytical & Methodical:** Strong algorithmic mindset with deep focus on clean code, testability, and edge-case handling.
- **Ownership & High Agency:** Proven record of managing the entire release cycle from code to Play Store/App Store and zero-downtime hotfixes.
- **Strengths:** Rapid debugging, architecture structuring (Clean Architecture / SOLID), production stability maintenance (99%+ SLA), cross-platform delivery.
- **Thrives in:** Dynamic product environments, engineering teams solving high-scale consumer/enterprise mobile challenges.

### Target Sectors
- Mobile App Development (Flutter / Android / Cross-platform)
- FinTech, Logistics & Supply Chain, SaaS, E-Commerce, Consumer Tech
- High-growth startups and established tech enterprises hiring Senior/Mid-level Flutter Developers

### Deal-breakers
- Roles strictly restricted to non-English/non-Hindi speaking requirements.
- Positions that do not offer career growth in modern software engineering practices.

## Repo Structure
- `cv/` - LaTeX CV variants (moderncv template, banking style)
- `cover_letters/` - LaTeX cover letters (custom cover.cls template)
- `.claude/skills/` - AI skill definitions for the application workflow
- `.agents/skills/` - Job search CLI tools

## Workflow for New Job Applications
1. User provides a job posting (URL or text)
2. **Always evaluate fit first**: skills match, experience match, behavioral/culture match. Present this assessment to the user before proceeding.
3. If good fit: create targeted CV (`cv/main_<company>_<role>.tex`) and cover letter (`cover_letters/cover_<company>_<role>.tex`)
4. **Verify both documents** (verify layout, page count, and ATS keywords)
