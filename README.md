

**README: Angular Budget Management System**

This project is a web application for managing service quotes (budgets) developed with **Angular 21** . It allows users to select services, calculate the total cost in real-time, save the quotes, and share the exact configuration via a unique URL.

### **Key Technologies**

* **Framework:** Angular 21 (Standalone Components)  
* **State Management:** Angular Signals (signal(), computed(), effect())  
* **Forms:** Angular Reactive Forms  
* **Routing & State Sharing:** ActivatedRoute and Router (Synchronization via Query Parameters)  
* **Styling:** Bootstrap 5 (Mobile-First and Responsive Layouts)  
* **Testing:** Vitest (Modern configuration for Angular Standalone Components).

### ---

**Core Features**

1. **Reactive Budget Calculation:** The total price updates instantly when services are selected or options (e.g., number of pages, languages) are modified.  
2. **URL State Synchronization (State Sharing):**  
   * The exact configuration of the selected services is reflected dynamically in the URL query parameters (e.g., ?web=true\&pages=3).  
   * Any user accessing the shared URL automatically loads the corresponding quote configuration.  
3. **Form Validation:** Angular Reactive Forms are used to validate client information prior to saving the quote.  
4. **Listing and Filtering:** Saved quotes are displayed in a list that allows searching by client name and sorting by date, price, or name.  
5. **Responsive Design:** The interface is optimized for a mobile-first experience.

### ---

**Installation and Execution**

Follow these steps to set up and run the project on your local machine.

#### **Prerequisites**

Ensure you have the following installed:

* [Node.js](https://nodejs.org/en/) (LTS version recommended)  
* [Angular CLI](https://cli.angular.io/)

#### **Commands**

1. **Clone the repository:**  
   Bash  
   git clone \[Your Repository URL\]  
   cd \[project name\]

2. **Install dependencies:**  
   Bash  
   npm install

3. **Run the application in development mode:**  
   Bash  
   ng serve \-o

   The application will be available at http://localhost:4200/.

### ---

**Running Unit Tests**

This project uses **Vitest** for unit testing.

1. **Execute all tests:**  
   Bash  
   ng test

