House Management Application

This is a full-stack web application built using Node.js, Sequelize ORM, and React.js. It allows users to manage house records, perform CRUD operations, and calculates the risk percentage based on the loan amount and current value.

Table of Contents

    Features
    Technologies Used
    Getting Started
    API Endpoints
    Frontend Development
    Risk Calculation Algorithm
    Integration

Features

    Create a new house record
    Fetch house details by ID
    Update house details
    Calculate risk percentage for loan based on loan amount and current value
    Display house details including loan amount and risk percentage
    User-friendly and responsive user interface

Technologies Used

    Node.js
    Express.js
    Sequelize ORM
    React.js
    HTML/CSS

Getting Started

To run the application locally, follow these steps:

    Clone the repository.
    Install the required dependencies by running npm install in both the root directory and the client directory.
    Set up the database connection by providing the necessary configurations in the .env file.
    Run the backend server using the command npm start in the root directory.
    Run the frontend development server using the command npm start in the client directory.
    Access the application by visiting http://localhost:3000 in your browser.
    
    Backend Dependencies (Node.js)

    express: npm install express
    sequelize: npm install sequelize
    mysql2: npm install mysql2
    cors: npm install cors

Frontend Dependencies (React.js)

    react: npm install react
    react-dom: npm install react-dom
    react-router-dom: npm install react-router-dom
    axios: npm install axios

API Endpoints

    POST /api/houses - Create a new house record
    GET /api/houses/:id - Fetch a house record by ID
    PUT /api/houses/:id - Update a house record by ID

Frontend Development

The frontend of the application is built using React.js. It provides a user interface to interact with the backend API endpoints.

    Create a new house record by filling in the address and current value fields in the form and submitting it. The data will be sent to the POST /api/houses endpoint.
    After successful submission, the newly created house's ID will be displayed to the user. The user can navigate to the house detail view page to see the house's details.
    The house detail view page fetches the house's details by sending a request to the GET /api/houses/:id endpoint.
    Update the house's details by modifying the fields in the form and submitting it. The data will be sent to the PUT /api/houses/:id endpoint.

Risk Calculation Algorithm

The application implements a simplistic risk calculation model based on the loan amount and current value. The risk attribute is calculated as the ratio of the loan amount to the current value. If the loan amount is more than 50% of the current value, an additional 10% risk is added. The risk is always between 0 and 1.

The risk calculation is performed automatically when creating a new house record (POST /api/houses) and whenever the current value or loan amount is updated for an existing house record (PUT /api/houses/:id).
Integration

The house detail view in the React.js application displays the loan amount and risk percentage returned from the GET /api/houses/:id API endpoint. This provides the user with the updated information about the house record.
