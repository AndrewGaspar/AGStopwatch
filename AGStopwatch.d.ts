declare class AGStopwatch {
    private _startTime;
    public startTime : number;
    private _stopTime;
    public stopTime : number;
    public elapsed : number;
    public start(): number;
    public stop(): number;
    public restart(): number;
    public reset(): number;
    private _running;
    public running : boolean;
}
export = AGStopwatch;
