# PowerTrackSL – Full Redesign & Advancement Specification
> This document is a complete, unambiguous instruction set for an AI agent to redesign and advance the PowerTrackSL website. Every section details exactly what to build, how it should look, how it should behave, and what data to use. No assumptions should be made — if something is not stated here, do not add it.

---

## 1. PROJECT CONTEXT

**Project Name:** PowerTrackSL  
**Purpose:** A web-based electricity outage monitoring and reporting platform for Sierra Leone, specifically targeting Freetown.  
**Developed for:** Web Design 1 module, Limkokwing University  
**Target Users:** Residents of Freetown, Sierra Leone  
**Data Strategy:** All data is hardcoded/mock (no backend, no API). Use realistic Sierra Leone-specific data.

---

## 2. EXISTING FILE STRUCTURE

The current project has the following files. **Do not delete any of them. Modify and advance each one.**

```
PowerTrackSL/
│
├── index.html
├── about.html
├── outage-report.html
├── updates.html
├── contact.html
├── style.css
├── script.js
├── images/
└── README.md
```

---

## 3. GLOBAL DESIGN SYSTEM

Apply these rules across **all pages** without exception.

### 3.1 Color Palette

| Variable Name        | Hex Value  | Usage                                      |
|----------------------|------------|--------------------------------------------|
| `--color-primary`    | `#1A3C5E`  | Main brand color, navbar, headers          |
| `--color-secondary`  | `#2E86C1`  | Buttons, links, active states              |
| `--color-accent`     | `#F39C12`  | Warnings, amber status                     |
| `--color-danger`     | `#C0392B`  | Outage/no power status indicators          |
| `--color-success`    | `#27AE60`  | Power on / stable status indicators        |
| `--color-bg`         | `#F4F6F8`  | Page background                            |
| `--color-surface`    | `#FFFFFF`  | Cards, panels, modals                      |
| `--color-text`       | `#1C2833`  | Primary body text                          |
| `--color-text-muted` | `#7F8C8D`  | Captions, secondary text                   |
| `--color-border`     | `#D5D8DC`  | Card borders, dividers                     |

Define all the above as CSS custom properties in `:root {}` at the top of `style.css`.

### 3.2 Typography

- **Font Family:** Use `'Inter'` from Google Fonts (`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`). Load it in the `<head>` of every HTML file.
- **Base font size:** `16px`
- **Headings:**
  - `h1`: `2rem`, weight `700`, color `--color-primary`
  - `h2`: `1.5rem`, weight `600`, color `--color-primary`
  - `h3`: `1.2rem`, weight `600`, color `--color-text`
- **Body text:** `1rem`, weight `400`, color `--color-text`, line-height `1.6`
- **Captions/labels:** `0.875rem`, color `--color-text-muted`

### 3.3 Dark Mode

- Implement dark mode using a CSS class `.dark-mode` applied to `<body>`.
- When `.dark-mode` is active, override the following variables:

| Variable             | Dark Mode Value |
|----------------------|-----------------|
| `--color-bg`         | `#0D1117`       |
| `--color-surface`    | `#161B22`       |
| `--color-text`       | `#E6EDF3`       |
| `--color-text-muted` | `#8B949E`       |
| `--color-border`     | `#30363D`       |
| `--color-primary`    | `#58A6FF`       |

- The dark mode toggle is a button in the navbar (top-right corner).
- Use a moon icon (🌙) when in light mode (clicking switches to dark). Use a sun icon (☀️) when in dark mode (clicking switches to light).
- Save the user's preference to `localStorage` with the key `"powertracksl-theme"`. On page load, read this key and apply the class before the page renders to prevent flash.

### 3.4 Navigation Bar

Apply the same navbar to **every page**. The navbar must:

- Be **sticky** (stays at top when scrolling). Use `position: sticky; top: 0; z-index: 1000;`
- Background color: `--color-primary`
- Height: `64px`
- Contain, from left to right:
  1. **Logo/Brand** — A lightning bolt emoji ⚡ followed by the text `PowerTrack SL` in white, font size `1.2rem`, weight `700`. This is a link to `index.html`.
  2. **Nav links** (center or right-aligned) — Links to all 5 pages:
     - Home → `index.html`
     - Outage Map → `updates.html`
     - Report Outage → `outage-report.html`
     - Schedule → a new section on `updates.html` (use anchor `updates.html#schedule`)
     - Contact → `contact.html`
  3. **Dark mode toggle button** — far right, circular button, `40px` × `40px`, background `rgba(255,255,255,0.15)`, border `none`.
- **Mobile menu:** On screens narrower than `768px`, hide the nav links and show a hamburger icon (`☰`). Clicking it toggles a dropdown vertical menu below the navbar. The dropdown background is `--color-primary`. This is handled in `script.js`.
- **Active page indicator:** The link for the current page must have a bottom border of `2px solid white` and font weight `600`.

### 3.5 Footer

Apply the same footer to **every page**:

- Background: `--color-primary`
- Text color: white
- Padding: `40px 20px`
- Three columns (on desktop), stacked on mobile:
  1. **Column 1 – Brand:** ⚡ `PowerTrack SL` + a short tagline: `"Keeping Freetown informed, one outage at a time."`
  2. **Column 2 – Quick Links:** Links to all 5 pages (same as navbar)
  3. **Column 3 – Emergency Contacts:**
     - EDSA Fault Line: `+232 76 641 641`
     - EDSA Customer Care: `+232 22 229 400`
     - NPA Helpdesk: `+232 76 700 700`
- Bottom bar: `© 2025 PowerTrack SL. Developed by Group 10 – BSEM1204, Limkokwing University.` centered, font size `0.8rem`, color `rgba(255,255,255,0.6)`, with a top border of `1px solid rgba(255,255,255,0.2)`.

### 3.6 Cards

All cards across the site must use:
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Border radius: `12px`
- Padding: `24px`
- Box shadow: `0 2px 8px rgba(0,0,0,0.06)`
- On hover: box shadow increases to `0 4px 16px rgba(0,0,0,0.12)`, transition `0.2s ease`

### 3.7 Buttons

**Primary Button:**
- Background: `--color-secondary`
- Text: white, weight `600`, size `0.95rem`
- Padding: `10px 24px`
- Border radius: `8px`
- Border: none
- Hover: background darkens by 10% (`#2574A9`)
- Transition: `0.2s ease`

**Danger Button:**
- Same as primary but background: `--color-danger`
- Hover: `#A93226`

**Outline Button:**
- Background: transparent
- Border: `2px solid --color-secondary`
- Text color: `--color-secondary`
- Same padding and radius as primary
- Hover: background `--color-secondary`, text white

### 3.8 Status Badges

Use these inline badge styles for power status throughout the site:

| Status     | Background       | Text Color | Label Text   |
|------------|------------------|------------|--------------|
| Power On   | `#D5F5E3`        | `#1E8449`  | `● Power On` |
| Outage     | `#FADBD8`        | `#922B21`  | `● Outage`   |
| Scheduled  | `#FDEBD0`        | `#784212`  | `● Scheduled`|
| Unstable   | `#FEF9E7`        | `#7D6608`  | `● Unstable` |

Badge styles: `padding: 4px 10px`, `border-radius: 20px`, `font-size: 0.8rem`, `font-weight: 600`.

### 3.9 Responsiveness

Every page must be fully responsive. Use these breakpoints:

| Breakpoint | Width        | Behavior                                         |
|------------|--------------|--------------------------------------------------|
| Desktop    | `> 1024px`   | Full multi-column layouts                        |
| Tablet     | `768px–1024px`| Reduced columns (2-col grids become 1 or 2-col) |
| Mobile     | `< 768px`    | Single column, stacked, hamburger menu           |

Use CSS Flexbox and CSS Grid. Do **not** use any CSS framework (no Bootstrap, no Tailwind).

### 3.10 Animations & Transitions

- All hover effects: `transition: all 0.2s ease`
- Cards fade in on page load using a CSS animation:
  ```css
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  ```
  Apply `animation: fadeInUp 0.4s ease forwards` to all `.card` elements. Stagger them using `animation-delay` increments of `0.05s` per card (set via inline `style` attribute in HTML).
- Status badge dots (`●`) pulse when status is `Outage`:
  ```css
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
  ```
  Apply `animation: pulse 1.5s infinite` to the dot character inside outage badges only.

---

## 4. PAGE-BY-PAGE SPECIFICATIONS

---

### 4.1 `index.html` – Homepage

#### 4.1.1 Hero Section

- Full-width banner, background color `--color-primary`, minimum height `400px`.
- Background pattern: subtle SVG diagonal lines using CSS (`background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)`).
- Centered content:
  - Headline: `"Real-Time Power Outage Monitoring for Freetown"` — white, `h1` size.
  - Subheadline: `"Stay informed about electricity outages across all areas of Freetown. Report issues, check schedules, and track power status."` — white, `1.1rem`, opacity `0.85`.
  - Two buttons side by side:
    1. Primary button: `"View Outage Map"` → links to `updates.html`
    2. Outline button (white border, white text): `"Report an Outage"` → links to `outage-report.html`
  - Gap between buttons: `12px`

#### 4.1.2 Live Status Bar

Directly below the hero, a horizontal bar (background `--color-surface`, border-bottom `1px solid --color-border`, padding `12px 24px`):

- Display the text: `"Last updated: June 10, 2025 – 08:45 AM"` on the left (muted text).
- On the right: `"14 of 20 areas have power"` with the number `14` in `--color-success` bold.

#### 4.1.3 Area Status Grid

- Section heading: `"Current Power Status by Area"`
- Subtitle: `"Showing live status for all monitored areas in Freetown"`
- A CSS Grid of cards: `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))`, gap `16px`.
- Each card displays one area. Use **exactly** the following 20 areas and statuses:

| Area Name         | Status    | Duration / Note              |
|-------------------|-----------|------------------------------|
| Congo Town        | Power On  | Stable since 06:00 AM        |
| Wilberforce       | Power On  | Stable since 05:30 AM        |
| Hill Station      | Power On  | Stable since 06:00 AM        |
| Aberdeen          | Outage    | Out since 07:15 AM (1h 30m)  |
| Lumley            | Outage    | Out since 05:00 AM (3h 45m)  |
| Goderich          | Scheduled | Scheduled outage 08:00–14:00 |
| Regent            | Power On  | Stable since 06:30 AM        |
| Grafton           | Unstable  | Frequent interruptions        |
| Kissy             | Outage    | Out since 09:00 AM (45m)     |
| East End          | Power On  | Stable since 05:00 AM        |
| Wellington        | Scheduled | Scheduled outage 10:00–16:00 |
| Calaba Town       | Outage    | Out since 06:45 AM (2h)      |
| Waterloo          | Power On  | Stable since 07:00 AM        |
| Tombo             | Outage    | Out since 04:00 AM (5h)      |
| Hastings          | Power On  | Stable since 06:15 AM        |
| Allen Town        | Unstable  | Intermittent supply           |
| Murray Town       | Power On  | Stable since 05:45 AM        |
| Brookfields       | Power On  | Stable since 06:00 AM        |
| New England       | Outage    | Out since 08:30 AM (1h 15m)  |
| Tower Hill        | Power On  | Stable since 05:00 AM        |

- Each card must contain:
  1. Area name (`h3` style)
  2. Status badge (from section 3.8)
  3. Duration/note text (muted, `0.85rem`)
  4. A thin colored left border on the card: green for Power On, red for Outage, amber for Scheduled/Unstable. Use `border-left: 4px solid` with the appropriate color.

#### 4.1.4 Statistics Summary Strip

Below the grid, a row of 4 stat cards (use flexbox, wrap on mobile):

| Stat                  | Value | Color             |
|-----------------------|-------|-------------------|
| Areas with Power      | 14    | `--color-success` |
| Active Outages        | 6     | `--color-danger`  |
| Scheduled Outages     | 2     | `--color-accent`  |
| Avg Outage Duration   | 2.4h  | `--color-secondary`|

Each stat card:
- Large number in the corresponding color, `2.5rem`, weight `700`
- Label below in muted text
- Centered content, min-width `140px`

#### 4.1.5 Quick Links Section

Three cards in a row (3-column grid on desktop, 1-column on mobile):

1. **Report an Outage** — icon 📝, description `"Submit a power outage report for your area"`, primary button `"Report Now"` → `outage-report.html`
2. **View Schedule** — icon 📅, description `"Check EDSA's load-shedding schedule for your area"`, outline button `"View Schedule"` → `updates.html#schedule`
3. **Emergency Contacts** — icon 📞, description `"Get EDSA and NPA emergency contact numbers"`, outline button `"View Contacts"` → `contact.html`

---

### 4.2 `updates.html` – Outage Map & Schedule

This page has two main sections reachable via anchor links: the map (`#map`) and the schedule (`#schedule`).

#### 4.2.1 Page Header

- Full-width header strip, background `--color-primary`, padding `40px 24px`, text centered.
- Title: `"Outage Map & Schedule"`, white, `h1`.
- Subtitle: `"Interactive map and load-shedding schedule for all Freetown areas"`, white, opacity `0.85`.
- Two anchor buttons below: `"View Map"` (primary) → `#map`, `"View Schedule"` (outline white) → `#schedule`.

#### 4.2.2 Interactive Outage Map (`id="map"`)

**Important:** Do not use any external map library (no Leaflet, no Google Maps). Build a **custom SVG-based map** of Freetown areas.

- The SVG must be `100%` width, max-width `900px`, centered.
- Draw each of the 20 areas as a labeled, clickable SVG shape (use `<rect>` or `<polygon>` elements placed in approximate geographic positions relative to each other — West End areas on the left side of the SVG, East End areas on the right, central areas in the middle, coastal areas along the bottom).
- Each shape must be:
  - Filled with the status color: `#27AE60` for Power On, `#C0392B` for Outage, `#F39C12` for Scheduled/Unstable.
  - Opacity `0.75` normally, `1.0` on hover.
  - On hover: show a tooltip (a `<div>` absolutely positioned) displaying the area name, status badge, and duration note.
  - Labeled with the area name in white text inside the shape (`<text>` element, `font-size: 11px`, centered).
- Below the SVG, display a map legend with three items: `● Power On`, `● Outage`, `● Scheduled/Unstable` — using the corresponding colors.
- The tooltip is implemented in `script.js` using `mouseover` and `mouseout` events on each SVG shape.

**Approximate SVG layout (700px × 500px viewBox):**

Place the areas in this rough grid (x, y, width, height in SVG units). The agent must use these exact coordinates:

| Area            | x   | y   | w   | h   |
|-----------------|-----|-----|-----|-----|
| Hill Station    | 20  | 20  | 120 | 60  |
| Wilberforce     | 160 | 20  | 120 | 60  |
| Congo Town      | 300 | 20  | 120 | 60  |
| Tower Hill      | 440 | 20  | 120 | 60  |
| Brookfields     | 580 | 20  | 100 | 60  |
| Murray Town     | 20  | 100 | 120 | 60  |
| Aberdeen        | 160 | 100 | 120 | 60  |
| Lumley          | 300 | 100 | 120 | 60  |
| New England     | 440 | 100 | 120 | 60  |
| East End        | 580 | 100 | 100 | 60  |
| Grafton         | 20  | 180 | 120 | 60  |
| Regent          | 160 | 180 | 120 | 60  |
| Goderich        | 300 | 180 | 120 | 60  |
| Kissy           | 440 | 180 | 120 | 60  |
| Wellington      | 580 | 180 | 100 | 60  |
| Allen Town      | 20  | 260 | 120 | 60  |
| Calaba Town     | 160 | 260 | 120 | 60  |
| Waterloo        | 300 | 260 | 120 | 60  |
| Hastings        | 440 | 260 | 120 | 60  |
| Tombo           | 580 | 260 | 100 | 60  |

#### 4.2.3 EDSA Load-Shedding Schedule (`id="schedule"`)

- Section heading: `"EDSA Load-Shedding Schedule"`, `h2`.
- Subtitle: `"Weekly scheduled outages — updated every Monday. Times are approximate."`
- A styled HTML table with the following structure. Add `class="schedule-table"` to the `<table>`.

**Table columns:** Area | Mon | Tue | Wed | Thu | Fri | Sat | Sun

**Table data (use exactly this):**

| Area        | Mon         | Tue         | Wed         | Thu         | Fri         | Sat         | Sun   |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------|
| Aberdeen    | 08:00–14:00 | —           | 08:00–14:00 | —           | 08:00–14:00 | —           | —     |
| Lumley      | —           | 06:00–12:00 | —           | 06:00–12:00 | —           | 08:00–14:00 | —     |
| Goderich    | 08:00–14:00 | 08:00–14:00 | —           | —           | 08:00–14:00 | —           | —     |
| Wellington  | —           | —           | 10:00–16:00 | 10:00–16:00 | —           | —           | —     |
| Kissy       | —           | 08:00–14:00 | —           | 08:00–14:00 | —           | —           | 08:00–14:00 |
| Calaba Town | 06:00–12:00 | —           | 06:00–12:00 | —           | 06:00–12:00 | —           | —     |
| Tombo       | 08:00–16:00 | —           | —           | 08:00–16:00 | —           | 08:00–16:00 | —     |
| Allen Town  | —           | 10:00–14:00 | 10:00–14:00 | —           | —           | 10:00–14:00 | —     |
| New England | 08:00–12:00 | —           | —           | 08:00–12:00 | 08:00–12:00 | —           | —     |
| Grafton     | —           | —           | 06:00–14:00 | —           | —           | 06:00–14:00 | —     |

**Table styles (`schedule-table`):**
- `width: 100%`, `border-collapse: collapse`
- Header row: background `--color-primary`, text white, padding `12px 16px`, `font-size: 0.9rem`
- Body rows: alternating background — odd rows `--color-surface`, even rows `--color-bg`
- All cells: `padding: 10px 16px`, `border: 1px solid --color-border`, `font-size: 0.875rem`
- Cells with a time (not `—`): background `#FDEBD0`, color `#784212`, font-weight `500`, border-radius `4px` (apply to a `<span>` inside the `<td>` so the cell border is unaffected)
- First column (area name): font-weight `600`, color `--color-text`
- Table must scroll horizontally on mobile: wrap it in a `<div style="overflow-x: auto;">`

---

### 4.3 `outage-report.html` – Report Outage Form

#### 4.3.1 Page Header

Same style as `updates.html` header:
- Title: `"Report a Power Outage"`
- Subtitle: `"Help your community by reporting outages in your area. Reports are reviewed by our team."`

#### 4.3.2 Report Form

- Centered, max-width `640px`, card style (from section 3.6).
- Form heading inside card: `"Submit Outage Report"`, `h2`.
- All fields are required unless stated otherwise.

**Fields in exact order:**

1. **Your Name** — text input, placeholder `"e.g. Mohamed Koroma"`
2. **Phone Number** — tel input, placeholder `"+232 XX XXX XXX"` — not required
3. **Area** — `<select>` dropdown. Options must include all 20 areas from section 4.1.3 in alphabetical order, plus a disabled default option: `"-- Select your area --"`
4. **Street / Landmark** — text input, placeholder `"e.g. Near Lumley Beach Hotel"`
5. **Outage Start Time** — `datetime-local` input
6. **Type of Problem** — `<select>` dropdown with options:
   - `-- Select problem type --` (disabled default)
   - `Complete power outage`
   - `Partial power (low voltage)`
   - `Frequent interruptions`
   - `Transformer fault`
   - `Fallen power line`
   - `Other`
7. **Description** — `<textarea>`, 4 rows, placeholder `"Describe the issue in more detail (optional)"`, not required
8. **How urgent is this?** — radio buttons:
   - `Low – Inconvenient but manageable`
   - `Medium – Affecting daily activities`
   - `High – Critical (hospital, water pump, etc.)`
   - Default selected: `Medium`

**Submit Button:** Full-width primary button, label `"Submit Report"`.

#### 4.3.3 Form Validation (in `script.js`)

On submit:
- Check all required fields are filled.
- If any required field is empty, add a CSS class `input-error` to that field (border becomes `2px solid --color-danger`) and show an error message `<span>` below it with text `"This field is required."`, color `--color-danger`, font-size `0.8rem`.
- If the phone number field is filled but does not match the pattern `^\+232[0-9]{8,9}$`, show error: `"Enter a valid Sierra Leone number (e.g. +232 76 123456)"`.
- If validation passes, do the following:
  1. Prevent default form submission.
  2. Save the report to `localStorage` under key `"powertracksl-reports"` as a JSON array. Each report object must have: `{ id, name, phone, area, street, startTime, problemType, description, urgency, submittedAt }`. `id` is a timestamp string. `submittedAt` is `new Date().toISOString()`.
  3. Replace the form with a success message card:
     - Green checkmark emoji: ✅
     - Heading: `"Report Submitted Successfully"`
     - Body: `"Thank you, [name]. Your report for [area] has been received. Our team will review it shortly."`
     - A link back to homepage: `"← Back to Home"`

#### 4.3.4 Recent Reports Panel

Below the form card, a section heading: `"Recent Community Reports"`.

Display **exactly 5 hardcoded mock reports** as cards in a list (not a table). Each card shows:
- Area name (bold)
- Problem type
- Time ago (e.g., `"2 hours ago"`)
- Urgency badge: Low (green), Medium (amber), High (red)
- Reporter first name + last initial (e.g., `"Fatima K."`)

**Hardcoded mock reports:**

| Area        | Problem              | Time Ago      | Urgency | Reporter     |
|-------------|----------------------|---------------|---------|--------------|
| Lumley      | Complete power outage | 2 hours ago  | High    | Aminata S.   |
| Kissy       | Transformer fault     | 3 hours ago  | Medium  | Ibrahim T.   |
| Aberdeen    | Frequent interruptions| 45 mins ago  | Low     | Mariama B.   |
| Calaba Town | Complete power outage | 5 hours ago  | High    | Samuel K.    |
| New England | Partial power         | 1 hour ago   | Medium  | Fatima J.    |

---

### 4.4 `contact.html` – Contact Page

#### 4.4.1 Page Header

Same header style as other pages:
- Title: `"Contact & Emergency Numbers"`
- Subtitle: `"Reach EDSA, NPA, and the PowerTrack SL team for support and emergency reporting."`

#### 4.4.2 Emergency Contacts Cards

A 3-column grid (1-column on mobile) of contact cards. Each card has:
- Organization logo/icon (use emoji as placeholder)
- Organization name (`h3`)
- Phone number(s) as clickable `tel:` links styled as the primary button
- Address (muted text)
- Hours of operation (muted text)

**Exactly 3 cards:**

1. **EDSA (Electricity Distribution and Supply Authority)**
   - Icon: ⚡
   - Fault Line: `+232 76 641 641`
   - Customer Care: `+232 22 229 400`
   - Address: `EDSA HQ, Wilberforce Street, Freetown`
   - Hours: `24/7 Fault Reporting | Mon–Fri 08:00–17:00 Customer Care`

2. **NPA (National Power Authority)**
   - Icon: 🏭
   - Helpdesk: `+232 76 700 700`
   - General: `+232 22 222 500`
   - Address: `NPA HQ, Siaka Stevens Street, Freetown`
   - Hours: `Mon–Fri 08:00–17:00`

3. **PowerTrack SL Team**
   - Icon: 📧
   - Email: `powertracksl@limkokwing.edu.sl` (use `mailto:` link)
   - WhatsApp: `+232 88 000 000`
   - Address: `Limkokwing University, Freetown Campus`
   - Hours: `Mon–Fri 09:00–17:00`

#### 4.4.3 Contact Form

- Centered, max-width `600px`, card style.
- Heading: `"Send Us a Message"`
- Fields:
  1. **Full Name** — text input, required
  2. **Email Address** — email input, required
  3. **Subject** — text input, required
  4. **Message** — textarea, 5 rows, required
- Submit button: full-width primary button, label `"Send Message"`.
- On submit (handled in `script.js`): validate all fields are filled. If valid, prevent default and show inline success message: `"✅ Your message has been sent. We'll get back to you within 24 hours."` in a green-bordered box below the button. Do not reload the page.

---

### 4.5 `about.html` – About Page

#### 4.5.1 Page Header

- Title: `"About PowerTrack SL"`
- Subtitle: `"Our mission, team, and the technology behind the platform."`

#### 4.5.2 Mission Section

Two-column layout (text left, image placeholder right). On mobile: stacked.

- Left column text:
  - Heading: `"Our Mission"`
  - Body: `"PowerTrack SL was created to bridge the information gap between electricity providers and the residents of Freetown. We believe that every citizen deserves to know when their power will be restored, and to have a platform to report issues directly. This project was developed as part of the Web Design 1 module at Limkokwing University of Creative Technology, Freetown Campus."`
- Right column: a placeholder box (`background: --color-bg`, `border: 2px dashed --color-border`, `min-height: 200px`, centered text `"[Project Photo]"` in muted color). This is for an image the team will add later.

#### 4.5.3 Technology Stack Section

Heading: `"Technologies Used"`

Four cards in a row (2×2 grid on mobile), each with:
- Icon (emoji)
- Technology name
- Brief description

| Icon | Name       | Description                                  |
|------|------------|----------------------------------------------|
| 🌐   | HTML5      | Semantic markup and page structure            |
| 🎨   | CSS3       | Responsive styling and animations             |
| ⚙️   | JavaScript | Interactivity, form validation, local storage |
| 🐙   | GitHub     | Version control and deployment                |

#### 4.5.4 Team Section

Heading: `"Meet the Team"`

Two cards side by side (stacked on mobile):

1. **Member 1 – Frontend Design**
   - Placeholder avatar circle (60px, background `--color-secondary`, white initials `"M1"`)
   - Role: `"Frontend Designer"`
   - Responsibilities listed as bullet points: Homepage design, About page, Navigation bar, Hero section, Responsive layout, CSS styling, Footer section

2. **Member 2 – Functionality & Deployment**
   - Placeholder avatar circle (same style, initials `"M2"`)
   - Role: `"Developer & Deployment Lead"`
   - Responsibilities: Outage reporting form, Contact form, JavaScript interactions, Form validation, Mobile menu toggle, Deployment, Documentation

#### 4.5.5 Academic Info Box

A full-width info box (background `#EBF5FB`, border-left `4px solid --color-secondary`, padding `20px 24px`):

- `"📚 Academic Context"`
- `"Module: Web Design 1 (BSEM1204)"`
- `"Institution: Limkokwing University of Creative Technology – Freetown Campus"`
- `"Group: Group 10"`
- `"Year: 2025"`

---

## 5. STATISTICS DASHBOARD

Add a dedicated statistics section to `index.html` after the Quick Links section (section 4.1.5). Give it `id="stats"`.

### 5.1 Section Header

- Heading: `"Outage Statistics & Trends"`
- Subtitle: `"Historical data for the past 7 days across all monitored areas"`

### 5.2 Charts

Include Chart.js via CDN in the `<head>` of `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

#### Chart 1 – Daily Outage Count (Bar Chart)

- Canvas element: `id="dailyOutageChart"`, width `100%`, max-width `700px`
- Title (above canvas, styled as `h3`): `"Daily Outage Reports – Last 7 Days"`
- Labels (x-axis): `["Mon Jun 3", "Tue Jun 4", "Wed Jun 5", "Thu Jun 6", "Fri Jun 7", "Sat Jun 8", "Sun Jun 9"]`
- Dataset label: `"Outages Reported"`
- Data: `[12, 9, 15, 11, 18, 7, 6]`
- Bar color: `#C0392B`, border radius `6`
- Chart background: `--color-surface`, padded card

#### Chart 2 – Area Uptime % (Horizontal Bar Chart)

- Canvas: `id="uptimeChart"`, width `100%`, max-width `700px`
- Title: `"Area Uptime % – Past 30 Days"`
- Labels: Top 8 areas by uptime: `["Tower Hill", "East End", "Murray Town", "Brookfields", "Congo Town", "Wilberforce", "Hill Station", "Regent"]`
- Data: `[94, 91, 89, 88, 87, 85, 83, 81]`
- Bar color: `#27AE60`
- x-axis min `0`, max `100`, display `%`

#### Chart 3 – Outage by Type (Doughnut Chart)

- Canvas: `id="outageTypeChart"`, width `100%`, max-width `400px`
- Title: `"Outages by Problem Type"`
- Labels: `["Complete Outage", "Transformer Fault", "Low Voltage", "Fallen Line", "Interruptions"]`
- Data: `[42, 18, 15, 10, 15]`
- Colors: `["#C0392B", "#E74C3C", "#F39C12", "#E67E22", "#7F8C8D"]`

**Chart layout:** Charts 1 and 2 in a two-column grid on desktop (`grid-template-columns: 1fr 1fr`). Chart 3 centered below them, full width limited to `400px`.

**All charts must:**
- Use `responsive: true`, `maintainAspectRatio: false` (set canvas container to `height: 280px`).
- Have clean minimal tooltips.
- Have grid lines color `rgba(0,0,0,0.05)`.
- In dark mode, update Chart.js defaults: tick color `#8B949E`, grid color `rgba(255,255,255,0.05)`. Detect dark mode via `document.body.classList.contains('dark-mode')` before initializing charts.

---

## 6. JAVASCRIPT – `script.js`

Replace the entire contents of `script.js` with the following functionality. All functions must be clearly commented.

### 6.1 Dark Mode Toggle

```
Function: initDarkMode()
- On page load, check localStorage key "powertracksl-theme".
- If value is "dark", add class "dark-mode" to document.body and set toggle button icon to ☀️.
- Otherwise, ensure class is absent and icon is 🌙.
- Add click event to the dark mode toggle button (id="darkModeToggle"):
  - Toggle class "dark-mode" on document.body.
  - Update localStorage.
  - Update button icon.
```

### 6.2 Mobile Menu Toggle

```
Function: initMobileMenu()
- Add click event to hamburger button (id="menuToggle").
- Toggle class "nav-open" on the nav links container (id="navLinks").
- When "nav-open" is present, display the nav links vertically.
- Close the menu when any nav link is clicked.
```

### 6.3 SVG Map Tooltips

```
Function: initMapTooltips()
- For each SVG area shape (elements with class "map-area"):
  - On mouseover: show tooltip div (id="mapTooltip") with area data.
  - Position tooltip near cursor using event.pageX and event.pageY.
  - On mouseout: hide tooltip.
- The tooltip div must already exist in the HTML (hidden by default).
  Style: position absolute, background white (dark-mode aware), border, shadow, padding 12px, border-radius 8px, pointer-events none.
```

### 6.4 Outage Report Form

```
Function: initReportForm()
- Select form by id="outageReportForm".
- On submit event:
  1. Clear all previous error states.
  2. Validate required fields.
  3. On error: add class "input-error" to field, insert error <span> after field.
  4. On success: save to localStorage, render success message.

Function: loadMockReports()
- Render the 5 hardcoded mock reports (from section 4.3.4) into the container id="recentReports".
- Each report rendered as a card with the specified fields.
```

### 6.5 Contact Form

```
Function: initContactForm()
- Select form by id="contactForm".
- On submit: validate all fields. On success, show inline success message.
```

### 6.6 Initialize All

```
At the bottom of script.js:
document.addEventListener("DOMContentLoaded", function() {
  initDarkMode();
  initMobileMenu();
  initMapTooltips();   // only runs if SVG map exists on page
  initReportForm();    // only runs if report form exists on page
  loadMockReports();   // only runs if recentReports container exists on page
  initContactForm();   // only runs if contact form exists on page
});
```

Guard each init function: check if the target element exists before adding listeners, to avoid errors on pages where that element is absent.

---

## 7. ACCESSIBILITY REQUIREMENTS

Apply these to every page:

- All images must have descriptive `alt` attributes.
- All form inputs must have associated `<label>` elements using `for` and `id` attributes.
- Buttons must have descriptive `aria-label` attributes where the label is not text (e.g., the dark mode toggle: `aria-label="Toggle dark mode"`).
- Color is never the only means of conveying information — status badges must include text labels (not just colored dots).
- Keyboard navigation: all interactive elements must be reachable and operable via Tab key.
- Focus styles: do not remove `outline` globally. Use `outline: 2px solid --color-secondary; outline-offset: 2px` on `:focus-visible`.
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text (the colors specified in section 3.1 meet this requirement).
- Add `lang="en"` to the `<html>` tag of every page.
- Add `<meta name="description">` to every page with a relevant description.

---

## 8. HTML `<head>` TEMPLATE

Every HTML file must have this `<head>` block (with page-specific title and description):

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="[page-specific description]" />
  <title>[Page Title] – PowerTrack SL</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <!-- Only on index.html: -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</head>
```

Script tag for `script.js` must be placed **at the bottom of `<body>`**, not in `<head>`.

---

## 9. WHAT NOT TO DO

The AI agent must NOT:

- Use any CSS framework (Bootstrap, Tailwind, Bulma, Foundation, etc.)
- Use any JavaScript framework or library (React, Vue, jQuery, etc.) — only vanilla JS
- Use any external map library (Leaflet, Google Maps, Mapbox)
- Add any pages not listed in this document
- Use placeholder filler text like "Lorem ipsum"
- Use external icons libraries (Font Awesome, Material Icons) — use emoji only
- Add backend code, server-side logic, or database connections
- Invent area names, contact numbers, or data not specified in this document
- Change the file names of any existing files
- Remove any existing file

---

## 10. DELIVERY CHECKLIST

The AI agent must confirm all of the following are done before finishing:

- [ ] All 5 HTML files updated with new navbar and footer
- [ ] `style.css` has CSS custom properties, dark mode, all component styles
- [ ] `script.js` has all 6 functions with DOMContentLoaded initialization
- [ ] `index.html` has: hero, live status bar, area status grid (20 areas), stats strip, quick links, statistics dashboard with 3 Chart.js charts
- [ ] `updates.html` has: SVG map with all 20 areas and tooltips, schedule table with all 10 areas and 7-day data
- [ ] `outage-report.html` has: validated form with all 8 fields, success state, 5 mock recent reports
- [ ] `contact.html` has: 3 emergency contact cards, contact form with success state
- [ ] `about.html` has: mission section, tech stack cards, team cards, academic info box
- [ ] Dark mode works on all pages and preference is saved to localStorage
- [ ] Mobile hamburger menu works on all pages
- [ ] All forms validate correctly
- [ ] All status badges use correct colors from design system
- [ ] All cards have fadeInUp animation
- [ ] All SVG map shapes are interactive with tooltips
- [ ] Page is fully keyboard-navigable
- [ ] `lang="en"` and meta description on every page
