class Stopwatch {
	private _startTime: number;
	public get startTime() {
		return this._startTime;
	}

	private _stopTime: number;
	public get stopTime() {
		return this._stopTime;
	}

	public get elapsed() {
		if (this.startTime === undefined) return 0;
		return ((this.stopTime === undefined) ? Date.now() : this.stopTime) - this.startTime;
	}

	public start() {
		if(this._startTime === undefined) this._startTime = Date.now();
	}

	public stop() {
		if (this.startTime === undefined) throw new Error("You must start the timer first!");
		if (this.stopTime === undefined) this._stopTime = Date.now();
		return this.elapsed;
	}

	public restart() {
		this._startTime = undefined;
		this._stopTime = undefined;
	}
}

export = Stopwatch;