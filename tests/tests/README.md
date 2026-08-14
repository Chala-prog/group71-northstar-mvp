Markdown
# 🛍️ Northstar Customer Support Dashboard (MVP)

> **Group 71 Project** | Self-Serve Customer Dashboard

A lightweight, responsive self-service web dashboard designed for Northstar Retail customers to track order status and manage returns/refunds instantly without opening manual support tickets.

---

## 🚀 Features

* **📦 Order Status Lookup**: Instant real-time tracking for shipments, carriers, and delivery estimates.
* **🔄 Returns & Refunds Verification**: Clear visibility into return request status, refund amounts, and return eligibility.
* **🛡️ Input Sanitization**: Automatic handling of lowercase inputs and unexpected spaces.

---

## 🛠️ Project Structure

```text
group71-northstar-mvp/
├── index.html            # Main User Interface layout
├── styles.css            # Custom CSS styling
├── ui.js                # Frontend DOM manipulation & form handlers
├── backend.js            # Mock Data Lookup API service
├── data/
│   └── orders.json       # Pure JSON dataset defining mock order schema
├── tests/
│   └── qa-runner.js      # Automated QA assertion test suite
├── test-runner.html      # Browser test runner page
└── README.md             # Project documentation

