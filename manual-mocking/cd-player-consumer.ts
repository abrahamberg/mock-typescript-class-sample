//This is the SUT (system under the test we don't mock this)
import CdPlayer from './cd-player';

export default class SoundPlayerConsumer {
    private cdPlayer
    constructor(cdPlayer: CdPlayer) {
        this.cdPlayer = cdPlayer;
    }

    playFirstTrack() {
        this.cdPlayer.playTrack(1)
    }
}

