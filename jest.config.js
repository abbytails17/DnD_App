module.exports = {
    rootDir: './',  // Adjust based on where you run Jest from
    testEnvironment: 'jsdom',  // Ensure jsdom is used as the test environment
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/character-creation/js/$1"
    }
};
