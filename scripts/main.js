// src/EscualiAPI/Main.ts
import { world } from "@minecraft/server";
var Escualid = class {
  static log(...logs) {
    console.warn(...logs);
  }
  static broadCastMessage(message) {
    try {
      world.sendMessage(message);
    } catch (error) {
      this.log(error, error.stack);
    }
  }
};

// src/index.ts
Escualid.broadCastMessage("Putisimos negros");
