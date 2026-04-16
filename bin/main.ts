import { main } from "../core/engine/main";

main().catch((error) => {
  console.error(`Error in main execution: ${error}`);
  process.exit(1);
});