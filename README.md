# Front-end-assesment-OwnAI
Just a ejs,express frontend look-a-like of React Form 


# React_Assessment – Purchase Order Form

Just a React.js Frontend App – **Purchase Order Form**

---

## 🧾 Purchase Order Form
A simple **React + Bootstrap** frontend app for creating and managing Purchase Orders with Talent Details.  
The form is **dynamic, validated, and styled** to match enterprise UI standards.

---

## 🚀 Features
- 📝 Purchase Order Form with client details and validations  
- 📅 Date pickers for PO timeline (**end date can’t be before start date**)  
- 💰 Budget field with currency selector & number limit  
- 👩‍💻 Talent Details Section with job mappings and checkboxes  
- ➕ Add one or multiple job sections (when PO type = **Group**)  
- 👥 Validation rules:  
  - Individual PO → must have **exactly 1 talent**  
  - Group PO → must have **at least 2 talents**  
- 🔄 Reset button clears the whole form  
- 💾 Save button validates and logs all entered data to the console  
- 🎨 Fully responsive UI built with **Bootstrap grid + custom CSS**

---

## 🛠️ Tech Stack
- ⚛️ React.js (with **Vite**)  
- 🎨 Bootstrap 5 + React Bootstrap  
- 💅 Custom CSS in `App.css`  
- 🧩 Component-based structure with reusable form parts  

---

## 📂 Project Structure
purchase-order-form/
│── public/
│── src/
│ ├── components/
│ │ ├── PurchaseOrderForm.jsx
│ │ ├── PurchaseOrderDetails.jsx
│ │ ├── TalentDetails.jsx
│ │ └── TalentSection.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── App.css
│── package.json
└── README.md


---

## ⚙️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/vimaljethva/Front-end-assesment-OwnAI.git
cd purchase-order-form

2. Install dependencies
npm install

3. Start the app (Vite)
npm run dev


👉 Open the app in your browser:
http://localhost:5173/

📌 Form Features in Detail
🔹 Purchase Order Details

Client Name (dropdown, required)

Purchase Order Type (Individual / Group)

PO Number (required, alphanumeric)

Received On (date picker, required)

Received From (Name + Email, both required)

PO Start Date / End Date (end date ≥ start date)

Budget (number input, max 5 digits) + Currency selector

🔹 Talent Details

Job Title (dropdown with mock job data)

Job ID auto-fills when job is chosen

Each job contains multiple Talents

Talent checkboxes → open extra fields (Contract Duration, Bill Rate, Currency)

Add multiple jobs (only if PO type = Group)

📸 Screenshots

👉 Replace with actual screenshots when available

Purchase Order Form
(Form Screenshot goes here)

✅ Validation Rules

All fields marked * are mandatory

Individual PO → only 1 talent allowed

Group PO → 2+ talents required

End date must be greater or equal to Start date

Budget ≤ 99999

🔮 Future Improvements

🗄️ API + database integration

📝 Read-only summary view after Save

🗑️ Remove client/job sections dynamically
