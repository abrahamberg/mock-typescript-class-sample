// class with arguments exported as default
// Node: Lets not get into discussion why CD player constructor needs a CD, 
// this is just demonstrate the consent. 
export default class CdPlayer {
    private cd
    constructor(cd: string) {
        this.cd = cd;
    }

    playTrack(track: number) {
        console.log(`Playing track ${track} of ${this.cd}`);
    }
}
//node default exported class
export const getLogs = () => { return 'here is my logs ' }
//node default exported value
export const serialNumber = 'SN123456789' 