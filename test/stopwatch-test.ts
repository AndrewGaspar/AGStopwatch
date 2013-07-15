/// <reference path="definitions/mocha.d.ts" />
/// <reference path="definitions/node.d.ts" />

import AGStopwatch = require("../agstopwatch");
import assert = require("assert");

describe("Stopwatch tests", function () {
	it("should run for 1 second", () => {
        var sw = new AGStopwatch();
        var start = sw.start();
        while (Date.now() < start + 1000);
        sw.stop();
        assert(sw.elapsed >= 1000);
    });

    it("should return 0 ms elapsed after instantation", function () {
        var sw = new AGStopwatch();
        assert(sw.elapsed === 0);
    });
    
    it("should return 0 ms elapsed after being reset", function () {
        var sw = new AGStopwatch();
        var start = sw.start();
        while (Date.now() < start + 1000);
        sw.stop();
        sw.reset();
        assert(sw.elapsed === 0);
    });

    it("should return running = true while running and running = false while not running", function () {
        var sw = new AGStopwatch();
        assert(!sw.running);
        sw.start();
        assert(sw.running);
        sw.stop();
        assert(!sw.running);
        sw.start();
        assert(sw.running);
        sw.restart();
        assert(sw.running);
        sw.reset();
        assert(!sw.running);
    });

});
