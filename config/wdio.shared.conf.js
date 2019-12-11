const fs = require('fs-extra');
const dir = './screenshots';

exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 30000,
    },
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec', 'allure'],

    // ====================
    // Appium Configuration
    // ====================
    // Default port for Appium
    port: 4723,
    maxInstances: 1,

    // ====================
    // Some hooks
    // ====================
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
        fs.ensureDirSync(dir);
        fs.emptyDirSync(dir)
    },

    afterTest: function(test)  {
        if (test.error !== undefined) {
            driver.takeScreenshot();
            browser.saveScreenshot(`${dir}/${new Date().valueOf()}.png`);
        }
    }
};
