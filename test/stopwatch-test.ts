/// <reference path="definitions/mocha.d.ts" />
/// <reference path="definitions/node.d.ts" />

import AGStopwatch = require("../agstopwatch");
import assert = require("assert");

describe("Stopwatch tests", function () {
	it("should run for 1 second", () => {
		var sw = new AGStopwatch();
		sw.start();
		while (sw.elapsed < 1000);
		sw.stop();
		assert(sw.elapsed >= 1000);
	});
});