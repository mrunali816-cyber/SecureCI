import { getPlugins } from '../loader/main';
import { Plugin } from '../../types/plugin';

// Importing a sample plugin to ensure it's included in the build. In a real application, you would dynamically load plugins from a directory or configuration.
import { ScannerPlugin } from '../../plugins/scanner.plugin';
import { registerPlugin } from '../loader/main';

// Register the sample plugin
const scannerPlugin = new ScannerPlugin();
registerPlugin(scannerPlugin);


export async function main(): Promise<void> {



  const plugins: Plugin[] = getPlugins();
  console.log(`Loaded ${plugins.length} plugins.`);
  // You can run the plugins here or do further processing

  for (const plugin of plugins) {
    await plugin.run().catch((error) => {
      console.error(`Error running plugin: ${error}`);
    });
  }
}
