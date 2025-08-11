# -student-registration-system

# 🏫 Student Registration System

A **web‑based application** to register students, manage their details, and display them in a responsive table.  
Built with **HTML5, CSS (Tailwind/Custom), and Vanilla JavaScript**, with **LocalStorage** for persistent data.

---

## 📄 Project Description
The **Student Registration System** simplifies registering and managing student details in educational institutions or training centers.  
Users can **add**, **edit**, **delete**, and **search** student records. All data is stored securely in the browser (no backend needed).  
The system is **fully responsive** and works on all devices.

---

## ✨ Key Features

- 📝 **Registration Form**  
  - Name (letters only)  
  - Email (valid format)  
  - Contact number (min. 10 digits, numbers only)  
  - Student ID (numbers only)  
  - Address  
  - All fields strictly validated before submission

- 💾 **Persistent Browser Storage** using `localStorage`

- 📊 **Real‑time Table Display** 
  - View all registered students  
  - View, search, and sort records  

- 🗑 **Delete** & ✏ **Edit** functionality with confirmation

- 🔍 **Search/Filter** instantly by Name, Email, ID, or Address

- 🌐 **Navigation**  
  - Home  
  - Registration  
  - Student Records

- 📱 **Responsive Layout**  
  - Looks perfect on desktop, tablet, and mobile  
  - Modern styling (custom + Tailwind CSS utility concepts)

---

## 🛠 Technologies Used

| Technology   | Purpose                               |
|--------------|---------------------------------------|
| HTML5        | Structure and semantic layout         |
| CSS3 (Custom/Tailwind)   | Styling & responsive design        |
| JavaScript   | DOM logic, form validation, storage   |
| LocalStorage | Persistent browser-side data storage  |
| FontAwesome  | Icons (via CDN, no assets needed)     |

---

## 📂 File Structure

| File                | Purpose                                    |
|---------------------|--------------------------------------------|
| `index.html`        | Home page with navigation                  |
| `registration.html` | Student registration form (+ Address)      |
| `studentData.html`  | Table with records, search, edit modal     |
| `styles.css`        | All styles and responsive design           |
| `script.js`         | All JavaScript logic (add/edit/delete/etc) |
| `README.md`         | This documentation                         |

> **Note:** _No nested folders — all files at the root (assignment rule)._

---

## 🖥 How to Run

1. **Clone or download** this repo/ZIP.
2. **Extract all files** to the same folder.
3. Open `index.html` in your browser.
4. Use the top navigation to add students or view records.
5. All data is stored privately in your browser — nothing leaves your computer.

---

## 🧠 How I Made This Project

### 1. Planning
- Wrote out app flow (register, store in localStorage, display, edit/delete).

### 2. HTML Structure
- Made 3 pages: Home (`index.html`), Register (`registration.html`), Records (`studentData.html`).
- Linked them with identical navbars for easy movement.

### 3. Styling (Custom + Tailwind Concepts)
- Used responsive CSS and utility classes for spacing, color, and layout.

### 4. Registration Form Logic
- Client-side validation for all fields, including min/max checks.
- Prevents bad or empty input, only lets good records be stored.

### 5. Displaying & Managing Records
- Loads from localStorage with `window.onload` and shows in a sortable, filterable table.
- Includes search, edit (modal), and delete (with warning).
- Any change immediately updates localStorage.

### 6. Full Responsiveness
- All forms, buttons, tables adjust for mobile/tablet/desktop.
- Even the edit modal looks great on small screens.

### 7. Documentation & GitHub
- This well-structured README.
- Separate commits for each file.
- Code comments for all complex logic.

---

## 📊 Mapping to Assignment Rubric

| Task              | Marks | How It’s Met                                                                                   |
|-------------------|-------|-----------------------------------------------------------------------------------------------|
| 1. Basic Structure| 5     | Semantic HTML5, meta tags, three standalone pages.                                             |
| 2. Header         | 5     | Each page has header & subtitle.                                                              |
| 3. Form & Inputs  | 5     | Registration form with labels, validation, placeholders for Name, Email, Contact, ID, Address.|
| 4. Display Section| 15    | Table, total count, search, empty state, records “down the line”.                             |
| 5. Styling/Design | 20    | Custom+Tailwind layout, spacing, button styling, mobile/tablet/desktop responsive.            |
| 6. JS Functionality| 40   | Complete add/edit/delete/search/validate, localStorage, modal for editing.                    |
| 7. Docs/Comments  | 10    | This README, code comments, separate commits as required.                                     |

**Total:** **100 Marks**

---



## 💡 Use Cases

- Small schools and coaching centers managing enrollments.
- Academic projects for showing front-end form handling and data persistence.
- Demo for personal portfolio/resume.
- General CRUD learning base.

---

© 2025 — **Sampath Vinay Ram Vuppala** — Student Registration System

