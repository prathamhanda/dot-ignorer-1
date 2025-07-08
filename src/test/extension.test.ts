import * as assert from "node:assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import options from "../lib/options";

suite("Extension Test Suite", () => {
	vscode.window.showInformationMessage("Start all tests.");

	test("Sample test", () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});

	test("MongoDB should be positioned correctly", () => {
		const mongoIndex = options.indexOf("MongoDB");
		const mavenIndex = options.indexOf("Maven");
		const nextIndex = options.indexOf("Next");

		assert.notStrictEqual(mongoIndex, -1, "MongoDB should exist in options array");
		assert.notStrictEqual(mavenIndex, -1, "Maven should exist in options array");
		assert.notStrictEqual(nextIndex, -1, "Next should exist in options array");

		assert.ok(mongoIndex > mavenIndex, "MongoDB should come after Maven");
		assert.ok(mongoIndex < nextIndex, "MongoDB should come before Next");
	});
});
