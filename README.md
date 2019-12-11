# appium-webdriverio
> **Note:** It's a copy of webdriverio boilerplate framework

## Runner
> iOS
```
npm run ios.app
```
> Android
```
npm run android.app
```

## Report
> Allure
- Generic report
```
allure generate allure-results && allure open
```
- Report served through Docker service
```
docker-compose up -d
```
Now, open the URL http://localhost:4040/ and to see the api docs http://localhost:5050/

Fianlly bring down docker service
```
docker-compose down
```

## List devices

> iOS

    instruments -s devices
    xcrun simctl list

> Android

    adb devices