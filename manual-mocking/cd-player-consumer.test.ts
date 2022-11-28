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



it('demonstrates manual mocking ', () => {
    // create a mocked instance 
    const player = new CdPlayer.default("argument")
    const sut = new CdPlayerConsumer(player)
    sut.playFirstTrack();
    
    //test if our sut is calling the mocked class
    expect(player.playTrack).toBeCalledWith(1);
    expect(player.playTrack).toBeCalledTimes(1);
    
    //test other exported functions and variables  
    expect(CdPlayer.getLogs()).toBe('mocked log')
    expect(CdPlayer.serialNumber).toBe('mocked serial')

});