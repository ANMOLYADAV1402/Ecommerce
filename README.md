# ECommerce

Welcome to the README file for the E-commerce project, a comprehensive full-stack application crafted to streamline the online shopping experience. Leveraging a diverse array of technologies and frameworks, this project aims to provide a robust and scalable e-commerce website. Key features include product listings, efficient shopping cart management, secure user authentication, seamless order processing, integrated payment solutions, email notifications, encrypted password handling, and the implementation of web token authentication.

## Structure of Project

The project adopts a methodical and modularized approach to ensure ease of maintenance and extensibility. Here is an overview of the primary directories and files:

- **`Frontend`**: Within this directory lies the React frontend code for the e-commerce website. It encompasses components, pages, styles, and files associated with the user interface.

- **`Server`**: The server directory hosts the Node.js and Express backend code. It covers routes, services, models, and middleware responsible for managing API requests and implementing the core business logic.

- **`Database`**: This directory houses the Mongoose schemas and models used to define the data structure and interact with the MongoDB database.

- **`src`**: This directory holds static assets such as images, stylesheets, and client-side JavaScript files.

- **`README.md`**: The primary README file providing essential information about the project.

## Process of Installation

To locally set up the project, follow the following steps:

1. Clone the repository: `git clone https://github.com/ANMOLYADAV1402/Ecommerce.git`
2. Navigate to the project directory: `cd Ecommerce-React-Project`
3. Install dependencies for the client and server:
   - For the client, run `cd Frontend/e-commerce-app && npm install`
   - For the server, run `cd Backend/Server && npm install`
4. Create a `.env` file in the server directory and input the required environment variables as specified in `.env.example`.
5. Set up a MongoDB database and update the connection details in the `.env` file.
6. Install necessary dependencies, navigate to the Server directory, and run `npm i express jwt ejs nodemailer bcrypt path mongoose stripe dotenv cors body-parser nodemon`
7. Run the server and client separately:
   - For the client, navigate to the e-commerce-app directory (`cd Frontend/e-commerce-app`) and execute `npm start`.
   - For the database, navigate to the Backend directory (`cd Backend`) and run `mongod --dbpath "./Database"`.
   - For the server, navigate to the Server directory (`cd Backend/Server`) and run `nodemon index.js`.
   - To set up the Stripe server, navigate to the Server directory (`cd Backend/Server`) and run `stripe login`.
   - For payment processing, navigate to the Server directory (`cd Backend/Server`) and execute `stripe listen --forward-to localhost:portNumber/webhook/webhook`.
   - Connect the webhook by navigating to the Server directory (`cd Backend/Server`) and running `stripe trigger payment_intent.succeeded`.

  
## Usage

After successfully setting up and running the project, you can access the E-commerce website by navigating to `http://localhost:3000` in your web browser. Upon reaching the homepage, you'll find a display of product listings. Feel free to explore various categories, add items to your cart, and proceed to the checkout process. Utilize user authentication to manage orders and access personalized features throughout your shopping experience.

## Technologies and Frameworks Used

The project incorporates the following technologies and frameworks:

- **HTML**: The standard markup language for creating web pages.
- **CSS**: A stylesheet language for styling HTML documents.
- **JavaScript**: A programming language for adding interactivity and functionality to web pages.
- **Bootstrap**: A popular CSS framework for building responsive and mobile-first websites.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express**: A flexible and minimal web application framework for Node.js.
- **EJS**: A templating engine for generating dynamic HTML pages.
- **Mongoose**: An object data modeling (ODM) library for MongoDB and Node.js.
- **MongoDB**: A popular NoSQL database for storing application data.
- **Stripe**: A payment processing platform for securely handling online transactions.
- **Nodemailer**: A module for sending email notifications from Node.js applications.
- **bcrypt**: A library for password hashing and encryption.
- **JWT**: JSON Web Tokens for secure authentication and authorization.

## Overview of the project

**Sign Up**
<img width="1207" alt="pic1" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/40bdb84c-63bc-4188-8b4a-ba735ca9f084">

**Login**
<img width="1292" alt="pic2" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/8b81dcf4-193f-4264-9a10-ee96008a7dc0">

**Forgot Password**
<img width="1284" alt="pic3" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/567e4866-a06b-4d35-8e50-3f8297800826">

**Main Page**
<img width="1423" alt="pic4" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/06f4c285-620d-4279-b0fd-93477d933fb5">

**Department**
<img width="1389" alt="pic5" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/7464abf8-13ea-4745-b7c9-5163c1fb4f33">

**Products**
<img width="1402" alt="pic6" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/6752e329-3771-47fa-b4b1-064c9bc26a38">

<img width="1397" alt="pic7" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/22d6f0b3-abcf-4abe-88a3-b645ae5e14f3">

<img width="1407" alt="pic8" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/00be5c2c-46e9-4de4-8cee-d987b5056e7c">

<img width="1412" alt="pic9" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/897fc9a0-8c6e-4e1d-8749-6020ef36d457">

**Update Profile**
<img width="1407" alt="pic10" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/a1e45b94-714b-4fce-83d9-40d349e2eb54">

**Order Preview**
<img width="1375" alt="pic11" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/64c2345f-6db0-484f-a6ae-0eb6341a5008">

**My Cart**
<img width="1405" alt="pic12" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/a5e8c050-b92f-41b0-bebc-ac78154c057e">

**My Orders**
<img width="1392" alt="pic13" src="https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/a097a633-05f2-4912-bb81-61fe7a3fdec8">

**Payment**

![image](https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/87a12f6b-16b1-42d6-a680-8eb5c7de9f96)

**Successful Payment**
![image](https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/dedf10ce-3088-4cdf-a062-46d83daf636f)

**Order Summary**

![image](https://github.com/ANMOLYADAV1402/Ecommerce/assets/81957738/f8142aed-507e-4fd2-91fa-88fbd981fa36)

## Precaution
If mongoose is shutting down, run `pkill mongod`

## Contributing

I welcome contributions to the project! If you come across any bugs, have suggestions for enhancements, or wish to introduce new features, feel free to open an issue or submit a pull request.

When contributing, please maintain consistency with the existing code style, adhere to best practices, and ensure comprehensive testing of your modifications. Your attention to these guidelines will help maintain the project's integrity and facilitate the review process.
