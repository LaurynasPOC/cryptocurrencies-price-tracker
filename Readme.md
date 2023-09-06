# Cryptocurrency Price Tracker Documentation

## Introduction

This documentation provides an overview of the Cryptocurrency Price Tracker. The application fetches and displays cryptocurrency prices over time while logging user actions.

## Features

### Front-end:

- **Responsive Design:** The layout adjusts seamlessly across various screen sizes.
- **Cryptocurrency Search:** Users can search for cryptocurrencies via an input field that acts as a dropdown, providing suggestions as the user types.
- **Input Validation:** The search input restricts users to enter up to 30 characters. If the input is invalid, an error message in red appears above the input field.
- **Date Range Selection:** Users can pick a specific date range to view cryptocurrency prices within that period.
- **Price Graph:** Display a graphical representation of the selected cryptocurrency's prices within the chosen date range.

### Back-end:

- **User Action Logging:** The application logs in the console and save to mongoDb user actions performed in the UI, specifically:
  - When a cryptocurrency is searched.
  - When a cryptocurrency is selected.

### Technical Stack

- **Front-end:** Developed using React.
- **Back-end:** Built using Node.js.
- **Design:** Crafted using styled-components
- **Source Code:** All source code can be found on Github [here](https://github.com/LaurynasPOC/cryptocurrencies-price-tracker.git).

## Getting Started

### Prerequisites

1. Node.js installed

### Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/LaurynasPOC/cryptocurrencies-price-tracker.git
```

2. **Navigate to the project server directory**

```bash
cd path-to-directory/server
```

3. **Setup environment variables**

- Create a `.env` file in the root directory of the project
- Copy your mongodb uri here and select desirable port

```env
MONGODB_URI=<your-mongodb-uri>
PORT=4000
```

4. **Install dependencies**

```bash
npm install
```

5. **Run the Back-end**

```bash
npm start
```

6. **Run the Front-end**

- Navigate to client directory
- Use same commands as in 4 and 5 guidelines

7. Open a browser and visit `http://localhost:3000`

### Conclusion

This application serves as a comprehensive tool for tracking cryptocurrency prices over time. Suggestions, and feedback are welcome via the Github repository.

### Future Enhancements

- Implement more filtering options for the price graph.
- Add timestamps on the x-axis of the graph.
- Add alphabetical and price sorting of cryptocurrencies.

# Setting Up Your Own MongoDB

To use your own MongoDB instance, follow these steps.

## 1. MongoDB Atlas

- **Sing Up/Log In:** Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- **Create a Cluster:** Follow the guided UI to create a new cluster. The free tier is suitable for most small applications.
- **Whitelist Your IP:** Under the `Security` tab, add your server IP address to the whitelist. If you're testing locally, this would be your local machine's public IP.
- **Create a MongoDB User:** Under the `Database Access` tab, create a new MongoDB user. Assign necessary permissions and keep note of the username and password.
- **Get your MongoDB URI:** Once the cluster is set up, click on the `CONNECT` button. Choose "Connect your application" and copy the provided connection string. It'll look something like:

```bash
mongodb+srv://<username>:<password>@clusterX.mongodb.net/<dbname>?retryWrites=true&w=majority
```

- Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB username, password, and desired database name respectively.

## 2. Local MongoDB Setup

If you have MongoDB installed locally:

1. Start the MongoDB server:

```bash
mongod
```

2. Your local MongoDB URI would typically look like:

```bash
mongodb://localhost:27017/<dbname>
```

Replace `<dbname>` with your desired database name.
