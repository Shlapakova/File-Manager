export const parseEnv = () => {
  const envVars = Object.entries(process.env).filter(([k, v]) => k.startsWith('RSS_'));
  const output = envVars.map(([k, v]) => `${k}=${v}`).join('; ');
  console.log(output);
};
