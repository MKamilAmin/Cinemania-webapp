# 🎬 Cinemania - Movie Wish-list SPA

Cinemania is a Single Page Application (SPA) for browsing, searching, and saving movies. Using data from [The Movie Database (TMDb)](https://www.themoviedb.org/), Cinemania lets users explore trending movies, search for specific titles, and save their favorites to a personal library. It supports user sign-up and login, making it easy to maintain a movie wish-list across sessions.

## 📋 Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
-   [Project Structure](#project-structure)
-   [Environment Variables](#environment-variables)
-   [Contributing](#contributing)
-   [Commit](#contributing)
-   [License](#license)

## 🌟 Features

-   **Home Page**: View new and trending movies at a glance.
-   **Movie Search**: Search the TMDb catalogue for any movie.
-   **Library**: Save favorite movies to a personalized library.
-   **User Authentication**: Sign up, login, and manage your watchlist securely.
-   **Offline Support**: For unsigned users, data is stored in local storage.
-   **Responsive Design**: Optimized for both desktop and mobile experiences.

## 🚀 Tech Stack

-   **Frontend**: HTML, CSS, JavaScript (ES6+)
-   **Framework**: [Vite](https://vitejs.dev/)
-   **Backend**: Node.js
-   **Database**: MongoDB / Firebase / LocalStorage (for non-registered users)
-   **API**: [The Movie Database API](https://www.themoviedb.org/documentation/api)

## 🏁 Getting Started

### Visit the live website

You can visit and use the live and fully functional version (Still under construction) of this app [here]() or you can continue reading to fork it and expand on what I have already built and run this project locally.

### Prerequisites

-   Node.js (version 14 or higher)
-   TMDb API key
-   Git (for version control)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/Cinemania.git
    cd Cinemania
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Environment setup**:

    - Create a `.env` file in the root directory.
    - Add your TMDb API key to the `.env` file (see [Environment Variables](#environment-variables)).

4. **Run the application**:
    ```bash
    npm run dev
    ```

## 🗂 Project Structure

Here’s a breakdown of the main folders and files:

```plaintext
├── public                 # Public assets
├── src
│   ├── api                # API classes for TMDb requests
│   ├── assets             # Static assets like images and styles
│   ├── components         # Reusable UI components (MovieCard, Navbar, etc.)
│   ├── pages              # Pages (Home, Catalogue, Library)
│   ├── routes             # Code for SPA routing
│   ├── services           # Authentication and storage
│   ├── utils              # Utility functions
│   ├── App.js             # Main application component
│   └── main.js            # Entry point
├── index.html             # Main page html document
├── .env                   # Environment variables
├── package.json           # Dependency configuration
└── README.md              # Project documentation
```

## 🌐 Environment Variables

To store your TMDb API key securely, create a `.env` file in the project root:

```plaintext
VITE_TMDB_API_KEY=your_api_key_here
```

### Usage

This `.env` variable can be accessed anywhere in the project using `import.meta.env.VITE_TMDB_API_KEY`.

## 🧑‍💻 Contributing

I use the [EMOJI-LOG](https://github.com/ahmadawais/Emoji-Log) standard by Ahmad Awais for commit messages. Each commit message starts with an emoji to indicate the type of change:

-   `📦 NEW:` Add new functionality
-   `👌 IMPROVE:` Code edits without fixing bugs or adding new features
-   `🐛 FIX:` Bug fixes
-   `📖 DOC:` Anything documentation related
-   `🚀 RELEASE:` Release a new version
-   `🤖 TEST:` Testing related commits
-   `‼️ BREAKING:` Change that breaks previous versions

This makes commit history clear and easy to follow. To contribute:

1. Fork the project and clone your fork.
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`).
3. Commit your changes using the mentioned standard (`git commit -m 'Add some amazing feature'`).
4. Push to your branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License.
