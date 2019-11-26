# appium-webdriverio
> **Note:** It's a copy of webdriverio boilerplate framework

## Runner

> iOS

    npm run ios.app
    
> Android

    npm run android.app

## Report

> Allure
```
allure generate allure-results && allure open
```

## List devices

> iOS

    instruments -s devices
    xcrun simctl list

> Android

    adb devices