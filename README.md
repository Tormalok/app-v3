# **CocoaCare Frontend**

This is the React-based frontend for the CocoaCare Intelligent Crop Health Assistant. It provides an interface for interacting with the backend API, allowing users to diagnose cocoa crop diseases, manage their accounts, and access recommendations for crop health improvement.

---

## **Features**

- **User Authentication**: Signup and login functionality to access the system.
- **Disease Diagnosis**: Submit crop details to diagnose diseases and receive actionable recommendations.
- **Disease Information**: View a list of diseases supported by the system.
- **Interactive UI**: Clean and user-friendly design for seamless interaction.

---

## **Getting Started**

### **Prerequisites**

- Node.js and npm installed on your machine.
- Access to the CocoaCare API hosted at:
  ```
  https://cocoa-expert-system.onrender.com
  ```

### **Installation**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/cocoacare-frontend.git
   cd cocoacare-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be accessible at `http://localhost:5173`.

---

## **Key Pages**

1. **Authentication Pages**:

   - **Signup**: Create an account.
   - **Login**: Access your account and receive a token for API access.

2. **Disease Diagnosis Page**:

   - Input crop details (e.g., suspected disease, soil moisture, temperature, etc.) to diagnose and view recommendations.

3. **Diseases List Page**:
   - Displays the diseases supported by the system.

---

## **Usage**

1. **Signup/Login**:  
   Create or log in to your account to obtain a token for secure access.

2. **Diagnose Disease**:  
   Navigate to the Diagnosis page, fill out the required fields, and submit the form to receive actionable recommendations.

3. **View Supported Diseases**:  
   Access the Diseases List page to check the diseases supported by the API.

---

## **Tools Used**

- **React**: Frontend library for building the user interface.
- **Axios**: For making API requests.
