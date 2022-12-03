import { portScanner } from './test/utils/shell/index.cjs';

const result = await portScanner({ showName: true });

console.log(result);
