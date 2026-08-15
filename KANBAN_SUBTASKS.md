# 📋 Group 71 - Kanban Task Breakdown
# KANBAN Subtasks


## 🟢 Order Status Flow
- [ ] Implement chatbot response for "Where is my order?"
- [ ] Connect backend to `data/orders.json` as the single source of truth
- [ ] Remove hardcoded order data from `backend.js`
- [ ] Write unit tests for order lookup (e.g., Jest tests)
- [ ] Document order tracking flow in README

## 🔵 Returns & Refunds Flow
- [ ] Build chatbot decision tree for "How do I return this?"
- [ ] Add refund status mock API in backend
- [ ] Create `data/returns.json` for test data
- [ ] Write unit tests for refund logic
- [ ] Document returns/refunds flow in README

## 🟣 Stock Availability Flow
- [ ] Implement chatbot response for "Is this back in stock?"
- [ ] Connect backend to `data/inventory.json` for stock data
- [ ] Add stock availability mock API
- [ ] Write unit tests for stock lookup
- [ ] Document stock availability flow in README

## 🟡 CI/CD & Governance Tasks
- [ ] Fix GitHub Actions workflow (`.github/workflows/devops.yml`)
- [ ] Add linting step (`npm run lint`) to CI/CD
- [ ] Ensure branch protection rules are active on `main`
- [ ] Require PR reviews before merging
- [ ] Verify all workflows pass before go‑live
