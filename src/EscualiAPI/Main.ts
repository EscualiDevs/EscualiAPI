import { world } from '@minecraft/server';
export default class Escualid {
    static log(...logs: any[]) {
        console.log(...logs)
    }
    static broadCastMessage(message: string) {
        try {
            world.sendMessage(message)
        } catch (error) {
            this.log(error, error.stack)
        }
    }
}