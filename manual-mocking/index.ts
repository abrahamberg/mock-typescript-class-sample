import CdPlayer, { getLogs, serialNumber } from "./cd-player";
import CdPlayerConsumer from "./cd-player-consumer";

//
const cdPlayer = new CdPlayer("The Dark Side of the Moon")
const consumer = new CdPlayerConsumer(cdPlayer);
consumer.playFirstTrack();

console.log("player info", serialNumber, getLogs())


