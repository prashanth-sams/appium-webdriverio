const path = require('path');
const config = require('./wdio.shared.conf').config;

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        automationName: 'UiAutomator2',
        deviceName: 'emulator-5554',
        platformName: 'Android',
        platformVersion: '9.0',
        orientation: 'PORTRAIT',
        app: path.join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
    },
];

exports.config = config;
