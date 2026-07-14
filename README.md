<div align="center">

<img src="https://raw.githubusercontent.com/Manashjyoti-Bora/devhire-pro-ats/main/assets/banner.svg" width="100%" alt="devhire-pro-ats — hand-coded animated banner" />

[![Stack](https://img.shields.io/badge/React_19-Vite_%C2%B7_JavaScript-4338ca?style=for-the-badge&labelColor=1e1b4b)](https://github.com/Manashjyoti-Bora/devhire-pro-ats)&nbsp;
[![Type](https://img.shields.io/badge/TYPE-UI_Engineering_Study-818cf8?style=for-the-badge&labelColor=1e1b4b)](https://github.com/Manashjyoti-Bora/devhire-pro-ats)

</div>

> [!NOTE]
> **A lab notebook, not a product pitch.** I built this to answer one question: *can I engineer the dense, stateful interfaces that real hiring tools need?* Below is what the experiment covered.

---

## 🔬 EXPERIMENTS CONDUCTED

| # | UI PROBLEM | WHAT I BUILT |
|:---:|:---|:---|
| 01 | Filtering large datasets without lag | Real-time multi-attribute filters (role, stack, salary, location) |
| 02 | Information density vs. readability | Card grid with progressive disclosure — details on demand |
| 03 | Theming at component level | Glassmorphic light/dark themes, CSS variables end to end |
| 04 | Pipeline state visualization | Application tracker: applied → screening → interview → offer |
| 05 | Zero-backend state | Deterministic seeded data + client state that behaves like an API |

## 📐 PIPELINE MODEL

```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#4338ca','primaryTextColor':'#fff','lineColor':'#818cf8'}}}%%
flowchart LR
    A["📄 Applied"] --> B["🔍 Screening"]
    B --> C["🗣️ Interview"]
    C --> D["📋 Assessment"]
    D --> E["🏆 Offer"]
    B -.->|reject| X["📭 Archived"]
    C -.->|reject| X
```

## 🔧 RUN IT LOCALLY

```bash
git clone https://github.com/Manashjyoti-Bora/devhire-pro-ats.git
cd devhire-pro-ats && npm install && npm run dev
```

## 🧾 LAB CONCLUSIONS

- Complex filter UIs are a **state design** problem before they are a UI problem
- React 19 + Vite gives instant feedback loops — ideal for UI iteration on a phone
- Next iteration: persist pipeline state to a real backend (pattern proven in [NexusMart](https://github.com/Manashjyoti-Bora/nexusmart))

<div align="center">

*Part of my learning-in-public series — every repo answers a question.*

<sub>Banner and animations on this page are hand-coded SVG — no generator services.</sub>

</div>
