module.exports = {
	roots: [ '<rootDir>' ],
	transform: {
		'^.+\\.ts?$': 'ts-jest'
	},
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^uuid$': require.resolve('uuid'),
		'\\.(css|scss)$': 'identity-obj-proxy'
	},
	// testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
	// moduleFileExtensions: [ 'ts', 'js', 'json', 'node' ],
	transformIgnorePatterns: [ '/node_modules/(?!(uuid|xxx)/)' ],
	setupFilesAfterEnv: [ '@testing-library/jest-dom/extend-expect' ],
	collectCoverage: true,
	clearMocks: true,
	coverageDirectory: 'coverage'
};
