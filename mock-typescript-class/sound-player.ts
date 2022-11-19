export default class SoundPlayer {
    foo: string;
    constructor() {
        this.foo = 'bar';
    }

    playSoundFile(fileName: string) {
        console.log('Playing sound file ' + fileName);
    }
}