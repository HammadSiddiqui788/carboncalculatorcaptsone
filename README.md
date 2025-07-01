# Carbon Credit Trading Platform (Frontend-Only)

This is a fully offline, browser-based carbon credit trading simulation platform built with pure HTML, CSS, JavaScript, and LocalStorage.

## 🌍 Key Features

- 🔐 **Login** with role selection (SME/NGO/Admin/Verifier)
- 📊 **Dashboard** for emission insights
- 🧮 **Scope Calculator** for Scope 1, 2, and 3 emissions
- 🏷️ **Marketplace** to list, view, and buy credits
- 💼 **Portfolio** to manage wallet, retire credits, export CSV
- 📑 **Report Summary** with PDF download
- 🛡️ **Admin Panel** to approve, reject, and flag listings
- 📈 **Analytics Dashboard** with real-time charts (Chart.js)
- ⚙️ **Settings** for organization info and theme
- 🌘 **Dark Mode** and 🔔 **Toast Alerts** system-wide

## 📦 Export Features

| Type      | Format | Location             |
|-----------|--------|----------------------|
| Emissions Report | PDF    | `report_modern_dark.html` |
| Wallet Info      | CSV    | `portfolio.html` |
| Transactions     | CSV    | `portfolio.html` |
| Retirements      | CSV    | `portfolio.html` |

## 🧰 Tech Stack

- HTML5 + CSS3 + Vanilla JS
- LocalStorage (no backend needed)
- Chart.js for analytics
- html2pdf.js for PDF exports

## 🚀 How to Run

1. Extract the ZIP file
2. Open `index.html` in your browser
3. Use the sidebar to explore each feature

> All functionality works offline after first load

