# Asteroids List

This project is a web application that displays a list of asteroids. It is built with React and Vite, and it uses NASA's API to fetch asteroid data. The application allows users to search for asteroids by date range, mark them as favorites, and view detailed information about each asteroid.

## Live DEMO
The app is deployed and ready to be used [here](https://react-frontend-production-ea4b.up.railway.app/)

## Features

- View a list of asteroids with their details, including name, size, and hazardous status.
- Search for asteroids by specifying a date range.
- Mark asteroids as favorites and view a list of favorite asteroids.
- Click on an asteroid to view its detailed information.
- Sort the asteroid list by name.
- Responsive design for optimal viewing on different devices.

## Technologies Used

- React
- Vite
- TypeScript
- styled-components
- React Query
- Cypress (for E2E testing)
- MSW (Mock Service Worker) for API mocking during tests
- Railway for deployment with CI/CD

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd asteroids-list
```

3. Install the dependencies:

```bash
npm install
```
4. Start the development server:

```bash
npm run dev
````
The application will be running at http://localhost:3000.

Running Tests
The project includes end-to-end (E2E) tests written with Cypress. To run the tests, use the following command:

``` bash
npm run cypress
``` 
Cypress will open the test runner, allowing you to run and view the test results.

## Deployment
The project is set up for deployment with Railway, utilizing its CI/CD capabilities. Whenever changes are pushed to the main branch, Railway will automatically build and deploy the application.

To set up the deployment, follow the instructions provided by Railway, including configuring the environment variables required for the application to run in the deployment environment.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

Please follow the project's code of conduct and guidelines when contributing.

## License
This project is licensed under the MIT License.

Let me know if you have any further questions!
