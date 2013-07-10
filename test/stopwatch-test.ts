/// <reference path="definitions/mocha.d.ts" />
/// <reference path="definitions/node.d.ts" />

import Stopwatch = require("../agstopwatch");
import assert = require("assert");

describe("Stopwatch tests", function () {
	it("should run for 1 second", () => {
		var sw = new Stopwatch();
		sw.start();
		while (sw.elapsed < 1000);
		assert(sw.elapsed >= 1000);
	});
});