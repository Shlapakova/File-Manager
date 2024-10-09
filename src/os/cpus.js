import { cpus } from 'os';

export const cpusInfo = () => {
    const cpuData = cpus();
    console.log(`Number of CPUs: ${cpuData.length}`);
    cpuData.forEach((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model} (${cpu.speed / 1000} GHz)`);
    });
};
