TaskFlow – Task Management Web Application

TaskFlow is a full-stack task management web application that helps users create, organize, and track their tasks efficiently.  
It is built with a modern tech stack and focuses on clean UI, proper authentication, and real-world UX patterns.

-> Features

    -> Authentication
        - User Signup & Login using **JWT Authentication**
        - Protected routes (Dashboard, Create/Edit Task)
        - Smart redirection after login (returns user to the page they intended to visit)

    -> Task Management (CRUD)
        - Create tasks with:
        - Title
        - Description
        - Status (Pending / In-Progress / Completed)
        - Priority (Low / Medium / High)
        - Edit tasks with **pre-filled existing data**
        - Delete tasks with confirmation popup
        - Tasks are **user-specific** (each user sees only their own tasks)

    -> Dashboard
        - View all tasks in a clean card-based layout
        - Priority shown using color-coded badges
        - Task status displayed clearly
        - Last updated timestamp for each task
        - Task counter (total tasks)
        - Sort tasks by:
        - Latest
        - Priority
        - Status
        - Empty state with CTA to create first task

    -> UI & UX
        - Modern dark-theme UI
        - Responsive layout
        - Attractive landing page with “How it Works” section
        - Sticky navbar with logo and navigation
        - Professional footer with branding and tech stack

    -> TechStack
        -> frontend
            - React (Vite)
            - React Router
            - CSS (custom styling)
            - Fetch API

        -> Backend
            - Node.js
            - Express.js
            - MongoDB
            - Mongoose
            - JWT (JSON Web Tokens)

-> Deployment
    -> Backend(Render):
    https://taskflow-2n4q.onrender.com

    -> Frontend(Vercel):
    https://task-flow-1x4unczl4-rakshitas-projects-a161f520.vercel.app/

