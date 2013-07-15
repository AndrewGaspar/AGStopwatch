class AGStopwatch {
	private _startTime: number;
	public get startTime() {
		return this._startTime;
	}

	private _stopTime: number;
	public get stopTime() {
		return this._stopTime;
	}

	public get elapsed() {
		return ((this._running ? Date.now() : this._stopTime) - this._startTime) || 0;
	}

	public start() {
        if (this._running) throw new Error("The stopwatch is already running!"); 
        this._startTime = Date.now();
        this._running = true;
        return this._startTime;
	}

	public stop() {
		if (!this._running) throw new Error("You must start the timer first!");
        this._stopTime = Date.now();
        this._running = false;
		return this._stopTime;
	}

	public restart() {
        var elapsed = this.stop();
        this.start();
        return elapsed;
    }

    public reset() {
        var elapsed = this.elapsed;
        this._startTime = undefined;
        this._stopTime = undefined;
        this._running = false;
        return elapsed;
    }
    
    private _running: boolean;
    public get running() {
        return this._running;
    }
}

export = AGStopwatch;
