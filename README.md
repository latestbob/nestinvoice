# NestJS Invoice Management System

This is a NestJS-based Invoice Management System that provides functionalities to create, read, update, and delete (CRUD) sales invoices. The application also includes features for listing and filtering invoices based on criteria such as date range and payment status. Additionally, it supports file uploads for each invoice, with files stored in Cloudinary.

## Features

### CRUD Operations:
- Create, Read, Update, and Delete invoices.

### Filtering:
- Filter invoices by payment status and date range.

### File Upload:
- Upload and manage related files (e.g., images, documents) for each invoice using Cloudinary.

### User Interface:
- Built with NestJS, TypeScript, and Prisma ORM for efficient database management.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>= 16.x)
- **npm** (Node Package Manager)
- **PostgreSQL** (or any other supported database)
- **Cloudinary Account** (for file uploads)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/latestbob/nestinvoice.git
cd nestinvoice
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file:
```bash
touch .env
```
Open the `.env` file and update the following configurations:

#### Database Configuration
```env
DATABASE_URL="postgresql://username:password@localhost:5432/invoice"
```
Replace `username`, `password`, and `invoice` with your actual PostgreSQL credentials.


### 4. Run Prisma Migrations
```bash
npx prisma migrate dev --name init
```
This command will create the necessary tables in the database.

### 5. Start the Application
```bash
npm run start:dev
```
Visit `http://localhost:3000` in your browser to access the application.

## API Endpoints

### GET - `/api/invoices`
Retrieve all invoices with optional query parameters:
- `status` - Filter by invoice status.
- `startDate` - Filter invoices created after this date.
- `endDate` - Filter invoices created before this date.

### GET - `/api/invoices/:id`
Retrieve an invoice by its ID.

### POST - `/api/invoices`
Create a new invoice with the following payload:
```json
{
  "customerName": "Tope Doe",
  "dueDate": "2025-02-23T00:00:00.000Z",
  "grandTotal": 1500.00,
  "items": "[{\"itemName\": \"MacBook Pro bar\", \"quantity\": 1, \"unitPrice\": 750, \"total\": 750},{\"itemName\": \"MacBook Pro bartwo\", \"quantity\": 1, \"unitPrice\": 750, \"total\": 750}]",
  "status": "canceled",
  "uploadUrl": ""
}
```

### PUT - `/api/invoices/:id`
Update an existing invoice with the following payload:
```json
{
  "customerName": "Faith Doe",
  "grandTotal": 1500.00,
  "dueDate": "2025-02-25T00:00:00.000Z",
  "items": "[{\"itemName\": \"MacBook Pro bar\", \"quantity\": 1, \"unitPrice\": 750, \"total\": 750},{\"itemName\": \"MacBook Pro bartwo\", \"quantity\": 1, \"unitPrice\": 750, \"total\": 750}]",
  "status": "pending",
  "uploadUrl": "https://res.cloudinary.com/edifice-solutions/image/upload/v1740230671/xg5bptqro9ldgqc7lztz.png"
}
```

### DELETE - `/api/invoices/:id`
Delete an invoice by its ID.

## Additional Prisma Commands
After cloning the repository and configuring the `.env` file, run the following commands:
```bash
npx prisma generate
npx prisma db push
```
These commands ensure the database schema is up to date.

---

This NestJS Invoice Management System provides a solid foundation for handling invoices efficiently with filtering, file uploads, and seamless database interactions. 🚀
