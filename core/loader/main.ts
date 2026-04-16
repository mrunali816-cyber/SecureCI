import { Plugin } from '../../types/plugin';

const plugins: Plugin[] = [];

export function registerPlugin(plugin: Plugin): void {
  plugins.push(plugin);
}

export async function runPlugins(): Promise<void> {
  for (const plugin of plugins) {
    await plugin.run();
  }
}

export function getPlugins(): Plugin[] {
  return plugins;
}
