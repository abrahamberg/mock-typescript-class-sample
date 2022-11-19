import * as CdPlayer from "./cd-player";
import CdPlayerConsumer from "./cd-player-consumer";

//Manual mocking 
jest.mock('./cd-player', () => {
    return {
        __esModule: true, //When module has multiple export 
        default: jest.fn().mockImplementation(() => {
            return {
                playTrack: jest.fn(),
            }
        }),
        getLogs: jest.fn().mockImplementation(() => { return 'mocked log'; }),
        serialNumber: "mocked serial"
    }
});


it('d', () => {
    // create a mocked instance 
    const cdPlayer = new CdPlayer.default("argument")
    const sut = new CdPlayerConsumer(cdPlayer)
    sut.playFirstTrack();
    // test if our sut is calling the mocked class
    expect(cdPlayer.playTrack).toBeCalledWith(1);
    expect(cdPlayer.playTrack).toBeCalledTimes(1);

    // demo only 
    expect(CdPlayer.getLogs()).toBe('mocked log')
    expect(CdPlayer.serialNumber).toBe('mocked serial')

});