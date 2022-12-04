import { portScanner } from './test/utils/shell/index.cjs';

portScanner().then(console.table).catch(console.error);
