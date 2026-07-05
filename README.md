<div align="center">

# 💼 DevHire Pro — Job Portal & ATS

### Enterprise-grade Applicant Tracking System with real-time multi-attribute filtering

[![Portfolio](https://img.shields.io/badge/🌐_See_My_Work-manashjyoti--bora.vercel.app-6366f1?style=for-the-badge)](https://manashjyoti-bora.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-Modern-1572B6?style=flat-square&logo=css3)

</div>

---

## 🎯 The Problem

Job boards are slow to filter, cluttered, and give candidates **zero visibility** into where their applications stand. Recruiters and candidates both waste hours scrolling irrelevant listings.

## 💡 The Solution

DevHire Pro filters instantly as you type — **keyword, skill and location simultaneously** — and tracks every application through a visual pipeline. No page reloads, no lag.

## ✨ Features

- 🔍 **Real-time triple filtering** — keyword + skill + location combine live as you type
- ⚡ **Memoized rendering** — zero lag even while all three filters recompute
- 📊 **Application pipeline tracker** — visual stages for every application
- 🌓 **Glassmorphic theming** — light/dark switch via CSS variables
- 📱 **Fully responsive** — dashboard adapts from 360px to desktop

## 🧠 Engineering Notes

- Filtering implemented as a **pure function** — predictable, testable, no side effects
- `useMemo` guards the filter pipeline so typing stays at 60fps
- Theme system uses CSS custom properties — zero JavaScript restyling cost

## 🚀 Run Locally

```bash
git clone https://github.com/Manashjyoti-Bora/devhire-pro-ats.git
cd devhire-pro-ats
npm install
npm run dev
```

---

<div align="center">

**Built by [Manashjyoti Bora](https://manashjyoti-bora.vercel.app)** · [GitHub](https://github.com/Manashjyoti-Bora) · [LinkedIn](https://www.linkedin.com/in/manashjyoti-bora-323b97405)

⭐ **Star this repo if it helped you!**

</div>
