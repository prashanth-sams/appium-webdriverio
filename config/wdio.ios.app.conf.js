const path = require('path');
const config = require('./wdio.shared.conf').config;

// ============
// Specs
// ============
config.specs = [
    './tests/ios/specs/**/app*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone 8',
        platformName: 'iOS',
        platformVersion: '13.2',
        orientation: 'PORTRAIT',
        // The path to the app
        app: path.join(process.cwd(), './apps/TestApp.app.zip'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
    },
];

exports.config = config;
