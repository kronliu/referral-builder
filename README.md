# Referral Builder

This is a full-stack application for building referrals. It consists of a React + TypeScript frontend and an Express + TypeScript backend.

## Project Structure

- `frontend/`: The frontend application built with React, TypeScript, and Tailwind CSS.
- `backend/`: The backend server built with Express and TypeScript.

## Prerequisites

- Node.js and npm installed on your system
- Git installed

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/referral-builder.git
cd referral-builder

### 2. Set up the backend
```bash
cd backend
npm install
npm run start

The backend server should start on http://localhost:5000.

### 3. Set up the frontend
cd ../frontend
npm install
npm run start

## API Endpoints
- POST /api/referrals: Create a new referral.
- GET /api/referrals: Retrieve all referrals.

## Instructions for testing
- Open the browser at http://localhost:3000.
- Use the form to add a new referral
- Click Create Referral to submit a new referral to the backend. Once you click submit, the referral list on the right should automatically update.