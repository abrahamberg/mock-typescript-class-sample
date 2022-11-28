//This is the SUT (system under the test we don't mock this)

import CdPlayer from "./cd-player";


export default class AlwaysSameCD {
    private cdPlayer: CdPlayer;
    constructor() {
        this.cdPlayer = new CdPlayer("Dark side of the moon");
    }

    playFirstTrack() {
        this.cdPlayer.playTrack(1)
    }
}

