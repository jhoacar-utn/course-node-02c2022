import { portScanner } from './test/utils/shell/index.cjs';

const result = await portScanner();

console.log(result);
