# Angular & Tailwind CSS Component Showcase

This project is a demonstration of building a modern, reusable component library from scratch using Angular and Tailwind CSS. It serves as a portfolio piece to showcase best practices in frontend development, focusing on clean code, modularity, and a professional UI/UX, as requested by a potential client.

**Live Demo:** [https://angular-tailwind-showcase-kudgvkll0-niyazs-projects-18a41509.vercel.app/](https://angular-tailwind-showcase-kudgvkll0-niyazs-projects-18a41509.vercel.app/)

## Core Concepts Demonstrated

This showcase is built to align with the requirements of a modern ERP system's frontend, emphasizing:

-   **No UI Libraries:** All components are built from the ground up using only Angular and Tailwind CSS for maximum control and a lightweight result.
-   **Modularity & Reusability:** Components are designed to be highly reusable and configurable.
-   **State Management with Signals:** Utilizes Angular's modern state management solution for clean and efficient data flow.
-   **Clean & Modern UI:** A minimalist, professional design with a focus on user experience.
-   **Dark Mode:** A fully functional, persistent dark mode toggle.
-   **Handling Complex Data:** The table component demonstrates how to work with nested data structures.

## Features & Components

The showcase includes the following components:

-   **Layout:** A professional layout with a sidebar and main content area.
-   **Buttons:** A highly configurable button component with primary, secondary, outline, and disabled states.
-   **Inputs:** Styled input components with focus states.
-   **Cards:** A versatile card component for content grouping.
-   **Table:** A generic, reusable table component that can display any data structure, including nested data. It is configured via a `columns` array.
-   **Table Toolbar:** A toolbar component to house actions related to the table, such as search and filters.
-   **Theme Service:** A service to manage the application's theme (light/dark mode) using Signals and browser localStorage.

## Tech Stack

-   **Angular (v20+)**: A powerful framework for building dynamic web applications.
-   **Tailwind CSS (v4)**: A utility-first CSS framework for rapid UI development.
-   **TypeScript**: For type safety and improved developer experience.
-   **Signals**: For modern, fine-grained state management in Angular.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [Bun](https://bun.sh/) (or npm/yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Niyaz-H/angular-tailwind-showcase.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd angular-tailwind-showcase
    ```
3.  Install dependencies:
    ```bash
    bun install
    ```

### Development Server

Run `bun start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `bun run build` to build the project. The build artifacts will be stored in the `dist/` directory.
