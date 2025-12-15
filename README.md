

**README: Angular Budget Management System**

A modern web application for creating, managing, and sharing service quotes built with Angular 21 and the latest framework features including Signals and Standalone Components.

Live Demo : https://sprint6-budgets-angular-deploy.vercel.app/

## ** Project Overview**

This application enables users to create detailed service quotes by selecting from available services (SEO, Advertising, Web Development), calculating costs in real-time, and sharing configurations via unique URLs. Built as part of an IT Academy bootcamp sprint, it demonstrates modern Angular development practices and state management techniques.

### ** Key Features**

* **Real-time Budget Calculation**: Instant price updates based on selected services and options  
* **URL State Synchronization**: Share exact quote configurations via URL query parameters  
* **Form Validation**: Comprehensive client data validation using Reactive Forms  
* **Quote Management**: Save, list, search, and sort quotes by multiple criteria  
* **Responsive Design**: Mobile-first approach with Bootstrap 5  
* **Comprehensive Testing**: 27 unit tests covering components and services

---

## **Tech Stack**

| Technology | Purpose |
| ----- | ----- |
| **Angular 21** | Modern web framework with Standalone Components |
| **TypeScript** | Type-safe development |
| **Angular Signals** | Reactive state management (`signal()`, `computed()`, `effect()`) |
| **Reactive Forms** | Form handling and validation |
| **Angular Router** | Navigation and query parameter management |
| **Bootstrap 5** | Responsive UI components and styling |
| **Vitest** | Fast unit testing framework |
| **SCSS** | Enhanced styling capabilities |

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v18 or higher recommended)  
* [npm](https://www.npmjs.com/) (comes with Node.js)  
* [Angular CLI](https://angular.io/cli) (v21 or higher)

bash

npm install \-g @angular/cli

### **Installation**

1. **Clone the repository**

bash  
  git clone https://github.com/nereame96/sprint6-budgets-angular.git

   cd sprint6-budgets-angular

2. **Install dependencies**

bash

  npm install

3. **Start development server**

bash

  ng serve \-o

The application will open automatically at `http://localhost:4200/`

### **Build for Production**

bash

ng build \--configuration production

Build artifacts will be stored in the `dist/` directory.

---

## **Testing**

Run the complete test suite:

bash  
ng test  
\`\`\`

*\#\#\# Test Coverage*

\- \*\*27 passing tests\*\* across 7 test files  
\- Coverage includes:  
  \- Component logic and rendering  
  \- Service methods and calculations  
  \- Form validation  
  \- Routing and navigation

\---

*\#\# Demo*

\!\[Budget Application Demo\](./public/budget.gif)

\*Create quotes, manage services, and share configurations seamlessly\*

\---

*\#\#  Project Structure*  
\`\`\`  
src/  
├── app/  
│   ├── components/  
│   │   ├── budget/              *\# Main budget creation component*  
│   │   │   ├── budget.ts        *\# Component logic with Signals*  
│   │   │   ├── budget.html      *\# Template with Reactive Forms*  
│   │   │   ├── budget.scss      *\# Component styles*  
│   │   │   └── budget.spec.ts   *\# Unit tests*  
│   │   ├── budgets-list/        *\# Saved quotes list with sorting/filtering*  
│   │   ├── panel/               *\# Pages and languages selector*  
│   │   └── product-item/        *\# Individual service card*  
│   ├── home/                    *\# Welcome page component*  
│   ├── services/  
│   │   └── total-budget.ts      *\# Core business logic and state*  
│   ├── models/  
│   │   ├── budget.ts            *\# Quote data model*  
│   │   └── budget-product.ts    *\# Service data model*  
│   ├── data/  
│   │   └── budget-products.data.ts  *\# Available services*  
│   ├── app.component.ts         *\# Root component*  
│   ├── app.config.ts            *\# Application configuration*  
│   └── app.routes.ts            *\# Routing configuration*  
├── public/                      *\# Static assets*  
└── index.html                   *\# Entry point*  
\`\`\`

\---

*\#\#  Core Functionality*

*\#\#\# 1\. Service Selection & Calculation*  
\- Choose from SEO (€300), Advertising (€400), and Web Development (€500)  
\- For web services, specify number of pages and languages  
\- Real-time total calculation: \`Total \= Base Services \+ (Pages × Languages × €30)\`

*\#\#\# 2\. URL State Sharing*  
When you select services, the URL updates automatically:  
\`\`\`

/budget?seo\=true\&ads=false\&web=true\&pages=3\&languages=2

Anyone with this URL will see the exact same configuration.

### **3\. Quote Management**

* Save quotes with client information (name, email, phone)  
* Search quotes by client name  
* Sort by date, price, or alphabetically  
* Persistent storage using Angular Signals

---

## ** Learning Outcomes**

This project demonstrates proficiency in:

*  Modern Angular architecture with Standalone Components  
*  Reactive programming with Angular Signals  
*  Advanced form handling and validation  
*  Component communication patterns  
*  URL-based state management  
*  Responsive design principles  
*  Unit testing with Vitest  
*  TypeScript best practices

---

## ** Deployment**

The application is deployed on **Vercel** with continuous deployment from the main branch.

**Live URL**: [https://sprint6-budgets-angular-deploy.vercel.app/](https://sprint6-budgets-angular-deploy.vercel.app/)

---

## ** Author**

**Nerea Medina Carrasco**

* GitHub: [@nereame96](https://github.com/nereame96)  
* Project: [sprint6-budgets-angular](https://github.com/nereame96/sprint6-budgets-angular)

