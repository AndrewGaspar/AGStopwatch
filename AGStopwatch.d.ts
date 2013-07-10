declare class AGStopwatch {
    private _startTime;
    public startTime : number;
    private _stopTime;
    public stopTime : number;
    public elapsed : number;
    public start(): void;
    public stop(): number;
    public restart(): void;
}
export = AGStopwatch;
