# AI Chat Playground - User Guide

This guide will help you set up and deploy the AI Chat Playground project, even if you're not a software engineer.

## Prerequisites

1. GitHub account (https://github.com)
2. Vercel account (https://vercel.com)
3. Supabase account (https://supabase.com)
4. Node.js installed on your computer (https://nodejs.org)

## Step 1: Set Up Your Local Environment

1. Open your terminal or command prompt.
2. Clone the repository:
   ```
   git clone https://github.com/yourusername/chat-playground.git
   cd chat-playground
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the setup script:
   ```
   node setup.js
   ```
   Follow the prompts to enter your Supabase URL and anon key.

## Step 2: Set Up Supabase

1. Log in to your Supabase account and create a new project.
2. In your Supabase project, go to the SQL Editor.
3. Copy the contents of `supabase/migrations/20230501000000_create_conversations_table.sql`.
4. Paste the SQL into the SQL Editor and run it to create the necessary table.

## Step 3: Test Locally

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and go to http://localhost:3000
3. Test the application to make sure it's working correctly.

## Step 4: Deploy to Vercel

1. Push your code to a GitHub repository.
2. Log in to your Vercel account.
3. Click "New Project" and select your GitHub repository.
4. In the "Configure Project" step:
   - Set the Framework Preset to "Next.js"
   - In the Environment Variables section, add the following:
     - NEXT_PUBLIC_SUPABASE_URL (your Supabase project URL)
     - NEXT_PUBLIC_SUPABASE_ANON_KEY (your Supabase anon key)
5. Click "Deploy" and wait for the deployment to complete.

## Step 5: Test Your Deployed Application

1. Once Vercel provides you with a deployment URL, open it in your browser.
2. Test the application to ensure it's working correctly in the production environment.

Congratulations! You've successfully set up and deployed your AI Chat Playground. If you encounter any issues or need to make changes, you can update your local code, test it, and then push the changes to GitHub. Vercel will automatically redeploy your application with the updates.

Remember to keep your Supabase URL and anon key confidential. Never share them publicly or commit them to your GitHub repository.