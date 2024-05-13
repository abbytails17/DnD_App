module.exports = {
    testEnvironment: 'jsdom',  // Set the test environment to jsdom
    rootDir: './',
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/character-creation/js/$1"
    }
};
