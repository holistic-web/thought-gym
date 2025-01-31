# Thought Gym – UI 🧠🎨

## Overview

This is the **frontend UI** for Thought Gym, built with **Next.js + Material UI**.
It provides the interface for users to **log thoughts, track progress, and interact with the app**.

## 🚀 Current Status

✅ **Next.js project setup complete**

✅ **Material UI integrated**

✅ **Basic journaling UI functional (text input + thought list)**

✅ **Componentized architecture with clean styles**

🔜 **Next Priorities:**

1. **Firebase Auth** → Implement Google login & user authentication.
2. **Deployment** → Automate Firebase Hosting setup.
3. **Backend Integration** → Connect thoughts to a database.

## 🏗️ UI Architecture

- **Framework:** Next.js (with App Router)
- **Components:** Material UI
- **Authentication:** Firebase Auth (to be implemented)
- **State Management:** Local `useState` (will transition to DB)
- **Styling:** CSS Modules (per-component styles)

## 📌 UI Development Tasks

### **1️⃣ Authentication UI**

- Add Firebase Auth logic to **sign-up, login, and logout buttons**.
- Show/hide the **thought input** based on login state.

### **2️⃣ Thought Storage UI**

- Connect the journaling component to a **persistent backend (Firestore or another DB)**.
- Display **past thoughts** from the database on load.

### **3️⃣ UI Polish & Enhancements**

- Improve the **styling and layout** for a cleaner look.
- Consider adding **animations, themes, and accessibility improvements**.

## 🛠️ Running the UI Locally

```sh
cd ui
npm install
npm run dev
```

---

This UI readme will evolve as we refine the interface.
PRs & contributions welcome! 🚀
