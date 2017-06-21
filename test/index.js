import fm from '../src';
import test from 'ava';
import fixtures from './fixtures.json';

Object.keys(fixtures).forEach((key) => {
	test(key, (t) => {
		const testCases = fixtures[key];
		t.plan(testCases.length);
		testCases.forEach((testCase) => {
			t.deepEqual(fm(testCase.input), JSON.stringify(testCase.output))
		});
	});
});