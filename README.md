# Organization Management Website
<br>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

<br>

## Overview

This repository contains the source code for an organization management website. The application is built using React for the frontend, .NET for the backend, and MySQL (or MariaDB) for the database.

<br>

## Features

- **User Management**: Manage user accounts and permissions.
- **Organization Structure**: View and modify the organizational hierarchy.
- **Data Persistence**: Data is stored in a MySQL (or MariaDB) database for reliability.

<br>

## Tech Stack

- **Frontend**: React
- **Backend**: .NET
- **Database**: MySQL (or MariaDB)

<br>

## Getting Started

### Prerequisites

- Node.js for React development: [Node.js](https://nodejs.org/)
- .NET SDK for backend development: [.NET SDK](https://dotnet.microsoft.com/download)
- MySQL or MariaDB: [MySQL](https://www.mysql.com/) or [MariaDB](https://mariadb.org/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/phucthuan1st/organization-management.git
cd organization-management
```
2. Install frontend dependencies:
```bash
cd frontend
npm install
```
4. Install backend dependencies:
```bash
cd ../backend
dotnet restore
```
5. Configure the database:
- Create a new database in MySQL or MariaDB.
- Update the connection string in appsettings.json in the backend folder.
6. Run the application:
- Start the frontend:
```bash
cd ../frontend
npm start
```
- Start the backend:
```bash
cd ../backend
dotnet run
```
- Open the application in your browser: http://localhost:3000
<br>

## Contributing
Contributions are welcome! Please follow our contribution guidelines.

<br>

## License
This project is licensed under the Apache License 2.0 License - see the [LICENSE](LICENSE) file for details.

<strong>Please keep the LICENSE in any cases.</strong>
