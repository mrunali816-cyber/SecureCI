import { Plugin } from '../types/plugin';

export class ScannerPlugin implements Plugin {
  async run(): Promise<void> {
    console.log('Running Scanner Plugin...');
    // Implement scanning logic here
  }
}
