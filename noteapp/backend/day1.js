/**
 * 
 * What is Express.js?
Express.js is a fast, minimal, and flexible web framework for Node.js. It helps developers build server-side applications and APIs with ease.

It gives you the ability to build a platform that can run in a server and create an endpoint for access

It is hosted in a different container so it cant be accessed easily. it is secured

Why Use Express.js?
✅ Handles HTTP requests easily (GET, POST, PUT, DELETE)
✅ Supports middleware (functions that modify requests/responses)
✅ Lightweight and fast
✅ Works with databases like MongoDB, MySQL, etc.
✅ Used for building REST APIs and full-stack applications
 *
 *
 *
 * 
 * ### **Ways People Can Gain Unauthorized Access to Your Backend & How to Prevent It**  

1️⃣ **Through Insecure Backend Web API**  
   - Attackers exploit misconfigured or exposed APIs to gain access.  
   - **Common Issues:**
     - **Lack of authentication** (anyone can access endpoints).  
     - **No rate limiting** (allows brute-force attacks).  
     - **Improper CORS configuration** (exposes API to unauthorized domains).  
     - **Exposed sensitive data** (returning too much info in responses).  

   ✅ **Prevention:**  
   - Use **API authentication** (JWT, OAuth).  
   - Apply **rate limiting** (e.g., `express-rate-limit` in Express.js).  
   - Restrict CORS (`cors` package in Express).  
   - Hide sensitive data (don't return unnecessary info).  

   **Example: Rate Limiting in Express.js**
   ```js
   import rateLimit from "express-rate-limit";

   const limiter = rateLimit({
       windowMs: 15 * 60 * 1000, // 15 minutes
       max: 100, // Limit each IP to 100 requests per window
       message: "Too many requests, please try again later"
   });

   app.use(limiter);
   ```

---

2️⃣ **SQL Injection**  
   - Attackers insert malicious SQL queries to manipulate or access your database.  
   - **Example Attack:**  
     ```sql
     SELECT * FROM users WHERE email = 'admin' OR '1'='1';
     ```
     - This bypasses authentication and retrieves **all users**.  

   ✅ **Prevention:**  
   - **Use parameterized queries** or **ORMs (e.g., Mongoose, Sequelize)**.  
   - **Never concatenate user input into SQL queries**.  
   - **Sanitize inputs** using libraries like `validator.js`.  

   **Example: Using Parameterized Queries in MySQL (Node.js)**
   ```js
   const query = "SELECT * FROM users WHERE email = ?";
   db.query(query, [userEmail], (err, result) => { ... });
   ```

---

3️⃣ **Through Authentication Weaknesses**  
   - Weak or misconfigured authentication can allow attackers to **bypass login**.  
   - **Common Issues:**  
     - Weak passwords.  
     - Lack of Multi-Factor Authentication (MFA).  
     - Storing passwords in plaintext.  
     - No account lockout on multiple failed attempts.  

   ✅ **Prevention:**  
   - **Use strong password hashing** (`bcrypt`).  
   - **Enable MFA** (e.g., OTP via email/SMS).  
   - **Implement account lockout** after multiple failed logins.  
   - **Use JWT for secure token-based authentication**.  

   **Example: Secure Password Hashing with Bcrypt**
   ```js
   import bcrypt from "bcrypt";

   const hashPassword = async (password) => {
       const saltRounds = 10;
       return await bcrypt.hash(password, saltRounds);
   };
   ```

---

4️⃣ **Cross-Site Scripting (XSS)**  
   - Attackers inject malicious scripts into your website to steal cookies or hijack user sessions.  
   - **Example Attack:**  
     ```html
     <script>alert('Hacked!');</script>
     ```

   ✅ **Prevention:**  
   - **Escape user input** using libraries like `DOMPurify`.  
   - **Use Content Security Policy (CSP)** headers.  
   - **Sanitize input** in forms and database entries.  

   **Example: Setting CSP Headers in Express.js**
   ```js
   app.use((req, res, next) => {
       res.setHeader("Content-Security-Policy", "default-src 'self'");
       next();
   });
   ```

---

5️⃣ **Man-in-the-Middle (MITM) Attacks**  
   - Attackers intercept data between the client and server.  
   - **Common Scenarios:**  
     - Using **HTTP instead of HTTPS**.  
     - Exposing **sensitive data in URLs** (e.g., passwords in query strings).  

   ✅ **Prevention:**  
   - **Enforce HTTPS** using SSL/TLS certificates.  
   - **Use secure HTTP headers** (`helmet` package in Express).  
   - **Avoid exposing sensitive data in URLs**.  

   **Example: Enforcing HTTPS in Express.js**
   ```js
   import helmet from "helmet";
   app.use(helmet());
   ```

---

6️⃣ **Broken Access Control**  
   - Attackers access resources they shouldn’t by exploiting **misconfigured permissions**.  
   - **Example Attack:**  
     - A regular user accesses an admin-only endpoint:  
       ```
       GET /admin/dashboard
       ```
     - If access control is **not properly implemented**, they get admin data.  

   ✅ **Prevention:**  
   - **Use role-based access control (RBAC)**.  
   - **Validate user permissions** before granting access.  
   - **Use middleware to check roles** in Express.js.  

   **Example: Role-Based Access Control in Express.js**
   ```js
   const requireAdmin = (req, res, next) => {
       if (req.user.role !== "admin") {
           return res.status(403).send("Access denied");
       }
       next();
   };

   app.get("/admin/dashboard", requireAdmin, (req, res) => {
       res.send("Welcome, Admin!");
   });
   ```

---
 * 
 * Note that it is possible to build your apis in your frontend but very risky.
 * its stiill the same js
 * 
 * but the thing is that it is in a different environment
 * 
 * LEARNINGS:
 * >> Requests and Responses - (Endpoint/API Management)
 * API is Application Programming Interface, the interface between FE and BE, BE and BE
 * 
 * ++++++++++++++++++++++++++
 * Requests and Responses - (Endpoint/API Management)
What is an API?
An API (Application Programming Interface) is a bridge that allows different applications to communicate with each other. It defines the rules for how frontend (FE) and backend (BE) systems—or even backend-to-backend services—exchange data.

🔹 FE (Frontend) ↔ BE (Backend): A web app requests data from the backend (e.g., fetching user details).
🔹 BE (Backend) ↔ BE (Backend): A backend service calls another backend service (e.g., a payment gateway calling a bank API).

Understanding Requests & Responses
A typical API request-response cycle follows these steps:

1️⃣ Client (FE) sends a request to a specific backend endpoint (URL).
2️⃣ Backend (BE) processes the request (e.g., fetches data from a database).
3️⃣ Backend sends a response back to the client.
4️⃣ Client processes the response and updates the UI.
 * 
 * 
 * >> Middlewares (Authentication and Authorization)
 * ++++++++++++++++++++++
 * Middlewares in Express.js (Authentication & Authorization)
What is Middleware?
Middleware is a function that runs before or after an API request reaches the intended endpoint. It is used for:
✅ Authentication – Verifying who is making the request.
✅ Authorization – Checking what they are allowed to do.
✅ Logging & Debugging – Tracking API calls and errors.
✅ Data Validation & Security – Preventing malicious inputs and attacks.

Authentication vs Authorization
Concept	Purpose	Example
Authentication	Confirms who the user is	Logging in with a username & password
Authorization	Confirms what the user can do	Allowing only admins to delete users
 * 
 * 
 * >> Database
 * 
 * 
 */