export interface Plugin {
  run(): Promise<void>;
}
