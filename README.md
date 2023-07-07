# Google Translator (TOPCODER Project) 🌍🔤🌍

🌐✨ This project aims to provide a client-server application for translating text using Google Translate API. The client side is developed using Tailwind CSS and React, while the server side is built with Node.js, Express, and the Google Translate API. 🖥️💻

## Features

✨🔤🔀
- **Translation**: The application allows users to enter text and translate it to another language using the Google Translate API.
- **Permute Languages**: Users can easily swap the source and target languages with a single click, making it convenient to switch between translations.
- **Auto Detection**: The application automatically detects the source language when the user enters text without specifying the language. This saves the user from manually selecting the source language. 🔄🌍

## Client Side

The client side of the application is responsible for the user interface and handling user interactions. It is built using Tailwind CSS and React. This allows for easy styling and a responsive design. The client side communicates with the server side to send text for translation and receive the translated text. 🎨🚀

### Technologies Used

- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- React: A JavaScript library for building user interfaces.

### Getting Started

To run the client side of the application, follow these steps:

1. Clone the repository: 
     ```bash
        git clone https://github.com/oussama166/google-translate.git
    ```
2. Navigate to the client directory: 
    ```bash
        cd client
    ```
3. Install dependencies: 
     ```bash
        npm install
    ```
4. Start the development server: 
    ```bash
        npm start
    ```
5. Access the client application in your browser at ```http://localhost:3000```

## Server Side

The server side of the application is responsible for handling API requests and communicating with the Google Translate API. It is built using Node.js and Express. The server side receives text from the client, translates it using the Google Translate API, and sends back the translated text. ⚙️🌐

### Technologies Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A fast, unopinionated, and minimalist web framework for Node.js.
- google-translate-api: A library for using the Google Translate API in Node.js.

### Getting Started

To run the server side of the application, follow these steps:

1. Navigate to the server directory: `cd server`
3. Install dependencies: `npm install`
4. Rename `.env.example` to `.env` and add your Google Translate API credentials.
5. Start the server: `npm start`
6. The server will be running at `http://localhost:5000`

### Environment Variables

The server side requires the following environment variables to be set in the `.env` file:

- `API_KEY`: Your Google Translate API key.

Make sure to replace `[API_KEY]` with your actual Google Translate API key.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request. 🤝🚀

## License

This project is licensed under the [MIT License](LICENSE). 📄🔒
