House Management Application

This is a full-stack web application built using Node.js, Sequelize ORM, and React.js. It allows users to manage house records, perform CRUD operations, and calculates the risk percentage based on the loan amount and current value.

Features

- Create a new house record
- Fetch house details by ID
- Update house details
- Calculate risk percentage for loan based on loan amount and current value
- Display house details including loan amount and risk percentage
- User-friendly and responsive user interface


Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- React.js
- HTML/CSS

Getting Started

To run the application locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies by running `npm install` in both the server directory (`cd NodeJsServerApp`) and the client directory (`cd ReactApp`).
3. Set up the database connection by providing the necessary configurations in the .env file.????
4. Run the backend server using the command npm start in the `NodeJsServerApp` directory.
5. Run the frontend development server using the command npm start in the `ReactApp` directory.

API Endpoints

- POST /api/houses - Create a new house record
- GET /api/houses/:id - Fetch a house record by ID
- PUT /api/houses/:id/edit- Update a house record by ID

Risk Calculation Algorithm

The application implements a simplistic risk calculation model based on the loan amount and current value. The risk attribute is calculated as the ratio of the loan amount to the current value. If the loan amount is more than 50% of the current value, an additional 10% risk is added. The risk is always between 0 and 1.

The risk calculation is performed automatically when creating a new house record (POST /api/houses) and whenever the current value or loan amount is updated for an existing house record (PUT /api/houses/:id).
Integration

The house detail view in the React.js application displays the loan amount and risk percentage returned from the GET /api/houses/:id API endpoint. This provides the user with the updated information about the house record.
