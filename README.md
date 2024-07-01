# AI Chat Playground

This project is a simple user interface where users can chat with both Claude and OpenAI's ChatGPT in a side-by-side comparison. It's built using TypeScript, Next.js, and Supabase.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account
- OpenAI API key (for future implementation)
- Claude API key (for future implementation)

## Getting Started (Local Setup)

If you already have the project files on your local machine, follow these steps to get started:

1. Open your terminal or command prompt.

2. Navigate to the project directory:
   ```
   cd path/to/chat-playground
   ```

3. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

4. Set up your Supabase project:
   - Create a new project on [Supabase](https://supabase.com/)
   - In your Supabase project, go to the SQL Editor
   - Copy the contents of `supabase/migrations/20230501000000_create_conversations_table.sql`
   - Paste and run this SQL in the Supabase SQL Editor to create the necessary table

5. Set up environment variables:
   - Run the setup script:
     ```
     node setup.js
     ```
   - Follow the prompts to enter your Supabase URL and anon key
   - This will create a `.env.local` file with your credentials

6. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Moving from Local Environment to Deployment

If you've tested your application locally and are ready to deploy it for others to use, follow these steps:

1. Create a GitHub account if you don't have one: https://github.com/join

2. Install Git on your computer if it's not already installed: https://git-scm.com/downloads

3. Open your terminal or command prompt and navigate to your project folder:
   ```
   cd path/to/chat-playground
   ```

4. Initialize a new Git repository:
   ```
   git init
   ```

5. Add all your project files to the repository:
   ```
   git add .
   ```

6. Commit your changes:
   ```
   git commit -m "Initial commit"
   ```

7. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Give your repository a name (e.g., "chat-playground")
   - Leave it as a public repository
   - Don't initialize with a README, .gitignore, or license
   - Click "Create repository"

8. Link your local repository to GitHub (replace `yourusername` with your GitHub username):
   ```
   git remote add origin https://github.com/yourusername/chat-playground.git
   ```

9. Push your code to GitHub:
   ```
   git push -u origin main
   ```

10. Create a Vercel account: https://vercel.com/signup

11. In Vercel, click "New Project" and select your GitHub repository

12. In the "Configure Project" step:
    - Set the Framework Preset to "Next.js"
    - In the Environment Variables section, add:
      - NEXT_PUBLIC_SUPABASE_URL (your Supabase project URL)
      - NEXT_PUBLIC_SUPABASE_ANON_KEY (your Supabase anon key)

13. Click "Deploy"

After Vercel finishes deploying, it will provide you with a URL where your application is live. You can share this URL with others to let them use your AI Chat Playground.

## Features

- User authentication with Supabase
- Side-by-side chat interface for Claude and OpenAI
- Conversation history stored in Supabase

## Getting Help

If you need assistance after closing your current chat session, here are some tips for getting help in a new conversation with an AI assistant:

1. Mention that you're working on the AI Chat Playground project that uses Next.js, TypeScript, and Supabase.

2. Refer to the USER_GUIDE.md and this README.md file in your project directory. These contain most of the information about setting up and running your project.

3. If you're having a specific issue, describe it in detail. Include any error messages you're seeing.

4. If you need help with a particular part of the setup or deployment process, mention which step in the README.md you're on.

5. If you've made any changes to the project since the initial setup, briefly describe those changes.

6. If you need to share code, you can paste relevant parts of your code into the new conversation.

Remember, while a new conversation won't have the full context of your original setup, an AI assistant should still be able to help you with general questions about Next.js, TypeScript, Supabase, or any coding issues you encounter.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.