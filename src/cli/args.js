export const getUsername = () => {
  const args = process.argv.slice(2);
  const usernameArg = args.find(arg => arg.startsWith('--username='));
  return usernameArg ? usernameArg.split('=')[1] : 'Guest';
  console.log('Command-line arguments:', process.argv);
};

