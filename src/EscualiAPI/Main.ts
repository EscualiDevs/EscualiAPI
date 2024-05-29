import { RawMessage, world } from "@minecraft/server";
export default class Escualid {
  /**
   * Sends a log (warning) to the creator content log
   * @param logs
   */
  static log(...logs: any[]) {
    console.warn(...logs);
  }
  /**
   * Broadcasts a message to all the players
   * @param message Message to broadcast to the players
   */
  static broadCastMessage(message: string | RawMessage) {
    try {
      world.sendMessage(message);
    } catch (error) {
      this.log(error, error.stack);
    }
  }
  static getPlayer(playerName: string) {
    try {
      return world.getAllPlayers().find((p) => p.name == playerName);
    } catch (error) {
      this.log(error, error.stack);
    }
  }
  static getPlayerByID(identifier: string) {
    try {
      return world.getAllPlayers().find((p) => p.id == identifier);
    } catch (error) {
      this.log(error, error.stack);
    }
  }
}
