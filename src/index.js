import readline from 'readline';
import { getUsername } from './cli/args.js';
import { changeDirectory } from './fs/cd.js';
import { ls } from './fs/ls.js';
import { compress } from './compress/compress.js';
import { decompress } from './compress/decompress.js';

const username = getUsername();
console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${process.cwd()}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const handleCommand = async (line) => {
  const [cmd, ...args] = line.trim().split(' ');
  try {
    switch (cmd) {
      case 'cd':
        changeDirectory(args[0]);
        break;
      case 'ls':
        await ls(args, process.cwd());
        break;
      case 'compress':
        await compress(args, process.cwd());
        break;
      case 'decompress':
        await decompress(args, process.cwd());
        break;
      case '.exit':
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        rl.close();
        break;
      default:
        console.log('Invalid input');
    }
  } catch {
    console.log('Operation failed');
  }
  console.log(`You are currently in ${process.cwd()}`);
  rl.prompt();
};

rl.on('line', handleCommand);
rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});

rl.prompt();
