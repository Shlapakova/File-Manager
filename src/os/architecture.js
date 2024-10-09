import { arch } from 'os';

export const architectureInfo = () => {
    console.log(arch());
};
