import CdPlayer from "./cd-player";
import AlwaysSameCD from "./always-same-cd";

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
const mockedCdPlayer = jest.mocked(CdPlayer, true);
beforeEach(() => {
    mockedCdPlayer.mockClear();
});


it('demonstrates manual mocking ', () => {
    const sut = new AlwaysSameCD()
    sut.playFirstTrack();

    // test input parameter 
    expect(mockedCdPlayer).toBeCalledWith("Dark side of the moon");
    expect(mockedCdPlayer).toBeCalledTimes(1);
    // test the internal function calls (typescript only)
    const mockedPlayer = mockedCdPlayer.mock.instances[0]; //instance 
    const mockedPlayTrack = mockedPlayer.playTrack as jest.Mock;
    expect(mockedPlayTrack.mock.calls[0][0]).toBe(1);
    expect(mockedCdPlayer.prototype.playTrack).toBeCalledTimes(1);

    //C test other exported functions and variables  
    // expect(CdPlayer.getLogs()).toBe('mocked log')
    // expect(CdPlayer.serialNumber).toBe('mocked serial')

});