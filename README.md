# BookStore Web Application

## Project Description

BookStore is a responsive book-shopping website built using React. It allows users to browse books, view book details, add new books, and manage their shopping cart.

### Main Features
- Display books using reusable Cards.
- View book images, titles, authors, descriptions, and prices.
- Add new books using a form.
- View book details.
- Add books to the shopping cart.
- Remove books from the cart.
- Calculate the total price.
- Navigate between pages.

## Technologies Used
- React
- JavaScript
- React Router DOM
- Bootstrap
- CSS
- Vite

## Project Pages
- Home
- About
- Services
- Contact
- Add Book
- Cart
- Book Details

## Setup Instructions

1. Install Node.js.
2. Download or clone the project.
3. Open the project folder in Visual Studio Code.
4. Open the terminal.
5. Install the dependencies:

```bash
npm install
```

6. Start the development server:

```bash
npm run dev
```

7. Open the local URL displayed in the terminal.

## Screenshots of the UI

### Home Page
![Home Page](screenshots/home.png)

### Book Details
![Book Details](screenshots/details.png)

### Add Book
![Add Book](screenshots/addbook.png)

### Shopping Cart
![Shopping Cart](screenshots/cart.png)

## Project Structure

```text
src/
├── Components/
│   ├── Card.jsx
│   └── NavBar.jsx
├── Data/
│   └── Books.js
├── Pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── AddBook.jsx
│   ├── Cart.jsx
│   └── BookDetails.jsx
├── App.jsx
└── main.jsx
```