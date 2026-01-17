# 🚀 Microservice E-Commerce Platform

> **Current Status:** 🚧 *Under Active Development*
>
> A scalable, event-driven e-commerce application built with **Next.js 16**, **Microservices**, and **Kafka**. Designed to demonstrate modern full-stack architecture using a Monorepo strategy.

## 📖 About The Project

This project is a comprehensive e-commerce solution designed to decouple business logic into independent, scalable services. Unlike traditional monolithic apps, this platform uses a **Microservice Architecture** where each service (Products, Orders, Payments) runs independently and communicates asynchronously via **Apache Kafka**.

The goal is to build a production-ready system capable of handling high traffic, real-time updates, and complex data flows using the latest industry-standard tools.

### 🏗 Architecture Overview

The project is structured as a **Monorepo** using **Turborepo** for high-performance build caching.

* **Client**: Next.js 16 (App Router) Storefront.
* **Admin Dashboard**: Next.js 16 panel for managing products, orders, and users.
* **API Gateway**: Unified access point (planned/via proxy).
* **Event Bus**: Apache Kafka for asynchronous communication between services.

---

## 🛠 Tech Stack

### **Frontend**
* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **UI Library:** Shadcn UI / Lucide React
* **State Management:** Zustand
* **Forms:** React Hook Form + Zod

### **Backend Services (Microservices)**
Each service uses the best tool for the specific job:

| Service | Framework | Database | ORM/ODM | Responsibility |
| :--- | :--- | :--- | :--- | :--- |
| **Product Service** | **Express.js** | **PostgreSQL** | **Prisma** | Product catalog, Categories, Inventory. |
| **Order Service** | **Fastify** | **MongoDB** | **Mongoose** | Order processing, History, Cart management. |
| **Payment Service** | **Hono** | - | - | Stripe integration, Checkout sessions. |
| **Auth Service** | **Express.js** | - | **Clerk** | User authentication, Role-based access (Admin/User). |
| **Email Service** | **Node.js** | - | **Nodemailer** | Transactional emails triggered by Kafka events. |

### **Infrastructure & DevOps**
* **Monorepo Tool:** Turborepo
* **Message Broker:** Apache Kafka (Event-Driven Architecture)
* **Containerization:** Docker & Docker Compose
* **Payment Provider:** Stripe
* **Authentication:** Clerk Auth

---

## ✨ Key Features (Planned & In-Progress)

### 🛒 Client Storefront
* [ ] **Server-Side Rendering (SSR)** for SEO-optimized product pages.
* [ ] **Advanced Filtering**: Sort by price, category, and creation date.
* [ ] **Smart Cart**: Persisted cart state with stock validation.
* [ ] **Checkout**: Secure Stripe integration for payments.
* [ ] **User Profile**: Order history and saved addresses.

### 🛡 Admin Dashboard
* [ ] **Analytics Chart**: Visualizing revenue and order trends (Last 6 months).
* [ ] **Product Management**: Create, update, and delete products with image uploads (Cloudinary).
* [ ] **Order Management**: View order status and details.
* [ ] **User Management**: Role assignment and user oversight.

### ⚙️ Backend & Architecture
* **Event-Driven Design**:
    * *Example*: When a `PaymentSuccess` event is fired by the Payment Service, the **Order Service** consumes it to create the order, and the **Email Service** consumes it to send a receipt—all asynchronously without blocking the user.
* **Database Isolation**: Each service owns its own database (Polyglot Persistence).
* **Type Safety**: Shared TypeScript interfaces across frontend and backend packages.

---

## 🚀 Getting Started

To run this project locally, you will need **Node.js**, **pnpm**, and **Docker** (for Kafka/Databases).

1.  **Clone the repository**
    ```bash
    git clone https://github.com/PathumSandeepa/microservice-ecommerce.git
    cd microservice-ecommerce
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Start Infrastructure (Docker)**
    Spin up Kafka, Zookeeper, PostgreSQL, and MongoDB containers.
    ```bash
    docker-compose up -d
    ```

4.  **Set up Environment Variables**
    Rename `.env.example` to `.env` in each service folder and provide your keys (Stripe, Clerk, Database URLs).

5.  **Run the Development Server**
    Use Turborepo to launch all services and frontends simultaneously.
    ```bash
    pnpm dev
    ```

---
