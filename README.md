# Habaka

Habaka is a modern, high-performance web application serving as the landing page and digital presence for a company specializing in Custom Software, Web Hosting, and Maintenance services. The application is designed to be visually engaging, utilizing sleek animations and a responsive, clean UI.

## Technology Stack

- **Core Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript (Strict typing enabled)
- **Styling**: Tailwind CSS (v4)
- **Animations**: Motion (`motion/react`)

## Setup Guide

To get this project running locally on your machine, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. We recommend Node.js v24 or later.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd habaka
   ```

2. **Install dependencies**:
   Run the following command in the project root to install all required npm packages:
   ```bash
   npm install
   ```

### Running Locally

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will output the static assets to the `dist` directory, which can then be served by any static hosting provider.
