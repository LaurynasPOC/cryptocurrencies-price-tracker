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
- **Source Code:** All source code can be found on Github [Link to your repository].

## Getting Started

### Prerequisites

1. Node.js installed

### Installation and Setup

1. **Clone the repository**

```bash
git clone [git://github.com/]
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

6. **Run Front-end**

- Navigate to client directory
- Use same commands as in 4 and 5 guidelines

7. Open a browser and `http://localhost:3000`
