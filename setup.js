const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to the AI Chat Playground setup!');
console.log('This script will help you set up your .env.local file.');

const questions = [
  {
    name: 'NEXT_PUBLIC_SUPABASE_URL',
    message: 'Enter your Supabase project URL:'
  },
  {
    name: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    message: 'Enter your Supabase anon key:'
  },
  {
    name: 'OPENAI_API_KEY',
    message: 'Enter your OpenAI API key (optional, press Enter to skip):'
  },
  {
    name: 'CLAUDE_API_KEY',
    message: 'Enter your Claude API key (optional, press Enter to skip):'
  }
];

const envContent = [];

function askQuestion(index) {
  if (index >= questions.length) {
    writeEnvFile();
    return;
  }

  const question = questions[index];
  rl.question(`${question.message} `, (answer) => {
    if (answer.trim() !== '') {
      envContent.push(`${question.name}=${answer.trim()}`);
    }
    askQuestion(index + 1);
  });
}

function writeEnvFile() {
  const content = envContent.join('\n');
  fs.writeFile('.env.local', content, (err) => {
    if (err) {
      console.error('Error writing .env.local file:', err);
    } else {
      console.log('.env.local file has been created successfully!');
    }
    rl.close();
  });
}

askQuestion(0);

rl.on('close', () => {
  console.log('Setup complete. You can now run "npm run dev" to start the development server.');
  process.exit(0);
});