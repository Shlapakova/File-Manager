import readline from 'readline';
import { getUsername } from './cli/args.js';
import { changeDirectory } from './fs/cd.js';
import { ls } from './fs/ls.js';
import { compress } from './compress/compress.js';
import { decompress } from './compress/decompress.js';
import { up } from './fs/up.js';
import { usernameInfo } from './os/username.js';
import { cat } from './fs/cat.js';
import { add } from './fs/add.js';
import { rn } from './fs/rn.js';
import { rm } from './fs/rm.js';
import { cp } from './fs/cp.js';
import { eol } from './os/eol.js';
import { cpusInfo } from './os/cpus.js';
import { homedirInfo } from './os/homedir.js';
import { architectureInfo } from './os/architecture.js';

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
      case 'up':
        await up(args, process.cwd());
        break;
      case 'cd':
        await changeDirectory(args[0]);
        break;
      case 'ls':
        await ls(args, process.cwd());
        break;
      case 'cat':
        await cat(args, process.cwd());
        break;
      case 'add':
        await add(args, process.cwd());
        break;
      case 'rn':
        await rn(args, process.cwd());
        break;
      case 'rm':
        await rm(args, process.cwd());
        break;
      case 'cp':
        await cp(args, process.cwd());
        break;
      case 'compress':
        await compress(args, process.cwd());
        break;
      case 'decompress':
        await decompress(args, process.cwd());
        break;
      case 'os':
        switch (args[0]) {
          case '--EOL':
            await eol(args, process.cwd());
            break;
          case '--cpus':
            await cpusInfo(args, process.cwd());
            break;
          case '--homedir':
            await homedirInfo(args, process.cwd());
            break;
          case '--username':
            await usernameInfo(args, process.cwd());
            break;
          case '--architecture':
            await architectureInfo(args, process.cwd());
            break;
          default:
            console.log('Invalid input');
        }
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
