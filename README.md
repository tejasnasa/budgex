# 💰 Budgex — Smart Personal Finance Tracker

<div align="center">

**A full-stack personal finance management app with AI-powered spending insights, built with Next.js 15, Prisma, and PostgreSQL.**

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Architecture](#-architecture) · [Database Schema](#-database-schema)

</div>

---

## ✨ Features

### 📊 Dashboard & Analytics
- **Real-time budget tracking** — Live budget balance updated on every transaction
- **Weekly expense bar chart** — Visualize spending trends over the past 7 days using Recharts
- **Monthly distribution graph** — Breakdown of spending patterns across the current month
- **Category-wise pie chart** — Instantly see where your money goes with an interactive pie chart
- **Quick-create forms** — Add expenses and income directly from the dashboard without navigating away

### 💸 Expense & Income Management
- **Full CRUD operations** — Create, edit, and delete expenses with real-time budget recalculation
- **User-created categories** — Define, edit, and manage custom spending categories (Food, Transport, Entertainment, etc.)
- **Income tracking** — Log multiple income sources with notes and date stamps
- **Paginated expense history** — Browse through 500+ transactions with server-side pagination and filtering
- **Date-stamped records** — Every transaction is timestamped and sorted chronologically

### 🎯 Savings Goals & Funds
- **Goal creation with targets** — Set named goals (e.g., "New Laptop", "Emergency Fund") with target amounts and optional deadlines
- **Visual progress tracking** — Track saved amount vs. target with progress bars, custom icons, and accent colors
- **Goal contributions** — Log individual contributions to goals with notes, building a full savings history
- **Goal lifecycle management** — Mark goals as Active, Completed, or Paused to organize your priorities
- **Cascading deletes** — Removing a goal automatically cleans up all associated contribution records

### 🔔 AI-Powered Smart Notifications
- **GPT-driven daily nudges** — One personalized notification per day, powered by OpenAI, delivered via a scheduled cron job
- **Behavioral pattern analysis** — Goes beyond obvious alerts; identifies real spending patterns like "you tend to overspend on weekends — today's Saturday, watch out"
- **Non-repetitive intelligence** — Notification engine ensures no two nudges are the same, keeping insights fresh and actionable
- **Contextual awareness** — Analyzes historical data across categories, days of the week, and seasonal trends to generate truly useful alerts

### 🔒 Authentication & Security
- **Secure signup & login** — bcrypt password hashing with salted rounds
- **JWT session management** — Stateless session tokens using `jose`, stored in HTTP-only cookies
- **Route protection via middleware** — Next.js middleware guards all authenticated routes
- **Zod schema validation** — End-to-end type-safe input validation on both client and server

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **Auth** | bcryptjs + jose (JWT) |
| **Validation** | Zod + React Hook Form |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Styling** | CSS Modules |
| **AI** | OpenAI GPT (Notifications) |
| **Scheduling** | Cron Jobs (Daily notifications) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- OpenAI API key (for smart notifications)

### Installation

```bash
# Clone the repository
git clone https://github.com/tejasnasa/budgex.git
cd budgex

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in DATABASE_URL, JWT_SECRET, OPENAI_API_KEY
```

### Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/budgex"
SECRET_KEY="your-jwt-secret-key"
OPENAI_API_KEY="your-openai-api-key"
```

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### Development

```bash
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000) with Turbopack for blazing-fast HMR.

---

## 🏗 Architecture

```
budgex/
├── prisma/
│   ├── schema.prisma          # Database schema (Users, Expenses, Income, Goals, Categories)
│   └── migrations/            # Migration history
├── src/
│   ├── actions/               # Server Actions (auth, CRUD operations)
│   ├── app/
│   │   ├── dashboard/         # Main dashboard with charts & forms
│   │   ├── expenses/          # Expense listing & management
│   │   ├── history/           # Full transaction history with pagination
│   │   ├── savings/           # Savings goals & fund tracking
│   │   ├── login/             # Authentication pages
│   │   └── signup/
│   ├── components/
│   │   ├── dashboard/         # Chart components (WeekGraph, MonthGraph, MonthPie)
│   │   ├── header.tsx         # Navigation header
│   │   ├── pagination.tsx     # Reusable pagination component
│   │   └── ...                # Shared UI components
│   ├── utils/
│   │   ├── sessions.ts        # JWT session management (create, decrypt, delete)
│   │   ├── definitions.ts     # Zod validation schemas
│   │   ├── prisma.ts          # Prisma client singleton
│   │   ├── dataFormatter.ts   # Chart data transformation utilities
│   │   └── types.ts           # TypeScript type definitions
│   └── middleware.ts          # Route protection middleware
```

---

## 🗄 Database Schema

```mermaid
erDiagram
    USER ||--o{ EXPENSE : has
    USER ||--o{ INCOME : has
    USER ||--o{ GOAL : has
    CATEGORY ||--o{ EXPENSE : categorizes
    GOAL ||--o{ GOAL_CONTRIBUTION : receives

    USER {
        string id PK
        string username UK
        string email UK
        string password
        float budget
    }

    EXPENSE {
        string id PK
        string userid FK
        string name
        float amount
        datetime date
        string categoryid FK
        datetime created_at
    }

    INCOME {
        string id PK
        string userid FK
        string source
        float amount
        datetime date
        string notes
        datetime created_at
    }

    CATEGORY {
        string id PK
        string name UK
        datetime created_at
    }

    GOAL {
        string id PK
        string userid FK
        string name
        float target
        float saved
        datetime deadline
        string icon
        string color
        enum status
        datetime created_at
        datetime updated_at
    }

    GOAL_CONTRIBUTION {
        string id PK
        string goalid FK
        float amount
        string note
        datetime created_at
    }
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Tejas](https://github.com/tejasnasa)**

</div>
