interface PluginRegistry {
  register(plugin: Plugin): void;
  getPlugins(): Plugin[];
}
