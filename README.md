# E-Commerce Frontend

This is the frontend of an e-commerce project built using React and Vite. The project uses Tailwind CSS for styling and PostCSS for processing styles. It is structured to be scalable and maintainable, with components organized into individual folders.

## Table of Contents

- [E-Commerce Frontend](#e-commerce-frontend)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Available Scripts](#available-scripts)

## Project Structure

```bash
.
├── eslint.config.js         # ESLint configuration for linting JavaScript/React code
├── index.html               # Main HTML entry point
├── package.json             # Dependencies and project metadata
├── package-lock.json        # Locked versions of the dependencies
├── postcss.config.js        # Configuration for PostCSS
├── public/                  # Public assets folder
│   ├── index.html           # Public index HTML
│   └── vite.svg             # Vite logo
├── README.md                # Project documentation
├── src/                     # Source code
│   ├── App.css              # App-specific CSS
│   ├── App.jsx              # Main React component
│   ├── assets/              # Static assets
│   │   └── react.svg        # React logo
│   ├── components/          # Reusable components
│   ├── index.css            # Global CSS
│   └── main.jsx             # Entry point for React
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration for development/build process
```

## Tech Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Linting:** ESLint

## Installation

To get started, clone the repository and install the dependencies:

```bash
# Navigate to the project directory
cd e-commerce-frontend

# Install dependencies
npm install
```

## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server. You can access the application at `http://localhost:3000` by default.

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the development server with hot reloading.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Lints the codebase for style and syntax issues.
- **`npm run preview`**: Previews the production build locally.
