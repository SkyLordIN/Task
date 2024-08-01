
# Appium + WebDriver.IO Demo Framework - Android 

This project has been created to demonstrate how a QA Engineer can perform Mobile Testing using Appium + WebDriver.IO
More commands and insights about the integration at [WebDriverIO Appium docs](https://webdriver.io/docs/api/appium/)

- - - 
## General System Requirements

#### Node JS

We need node js to download Appium beta version & drivers easily.
* Download[ Node Js](https://linktodocumentation) depending on your operating system.
#### Java JDK & JAVA_HOME variable

* [Open JDK](https://openjdk.org)
* [JAVA_HOME setup for Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
 

I Tested the following steps on Windows 11:

* Installed Adopted Open JDK: You can download and install OpenJDK from the official website: https://adoptopenjdk.net/
* To return where was the SDK installed: You can check the installation directory, usually C:\Program Files\AdoptOpenJDK\jdk-16
```bash
 where java 
```
* If you want to check the java version:
```bash
java -version
```
* Open the Environment Variables to insert the JAVA_HOME variable:
Setting up Environment Variables for OpenJDK

Step 1: Access System Properties
Right-click on This PC or Computer and select Properties.

Step 2: Access Advanced System Settings
Click on Advanced system settings on the left side.

Step 3: Access Environment Variables
Click on Environment Variables.

Step 4: Add a New System Variable
Under System Variables, scroll down and find the New button. Click on the New button to add a new variable.

Step 5: Configure the JAVA_HOME Variable
In the Variable name field, enter JAVA_HOME. In the Variable value field, enter the path where you installed the OpenJDK (e.g. C:\Program Files\AdoptOpenJDK\jdk-16).

Step 6: Save Changes
Click OK to close all the windows. 

* You can check if it was set correctly running the command:
```bash
echo $JAVA_HOME
```
* It should return something like: 
```bash
C:\Program Files\AdoptOpenJDK\jdk-16
```

## Android Setup
#### Android Studio & ANDROID_HOME variable

* [Android Studio]https://developer.android.com/studio)
* [ANDROID_HOME setup for Windows](https://www.testingdocs.com/setting-android_home-environment-variable-on-windows/)
 

* Enter the environment variables :
```bash
    export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
```
#### Setting up Environment Variables for Android SDK

##### Step 1: Access System Properties

1. Right-click on `This PC` or `Computer` and select `Properties`.
2. Click on `Advanced system settings` on the left side.
3. Click on `Environment Variables`.

##### Step 2: Set ANDROID_HOME Environment Variable

4. Under `System Variables`, scroll down and find the `New` button. Click on the `New` button to add a new variable.
5. In the `Variable name` field, enter `ANDROID_HOME`.
6. In the `Variable value` field, enter the path where you installed the Android SDK (e.g., `C:\Users[USER]\AppData\Local\Android\Sdk`).
7. Click `OK` to close the window.

##### Step 3: Update PATH Environment Variable

8. In the `Environment Variables` window, scroll down and find the `Path` variable, then click `Edit`.
9. Click `New` and add the paths to the `tools` and `platform-tools` folders (e.g., `C:\Users[USER]\AppData\Local\Android\Sdk\tools` and `C:\Users[USER]\AppData\Local\Android\Sdk\platform-tools`).
10. Click `OK` to close all the windows.
* You can check if it was set correctly running the command:
```bash
    echo %ANDROID_HOME%
```
* It should return something like: 
```bash
        C:\Users\[USER]\AppData\Local\Android\Sdk
```
* With this configured you can access the command [Android Debug Bridge](https://developer.android.com/studio/command-line/adb)
```bash
    adb
```
- - -




#### Download Appium Inspector
In order to find the correct locators to map elements, you will need to have this tool installed in your computer.

* [Appium Inspector Releases](https://github.com/appium/appium/blob/1.x/docs/en/writing-running-appium/web/chromedriver.md)

For this project you can use the following configuration:

| Server Key | Server Value |
| ------------- | ------------- |
| Remote Host | 0.0.0.0 |
| Remote Port | 4724 |
| Remote Path | / |

Android Desired Capabilities(Example)
| Desired Capability Key  | Desired Capability Value |
| ------------- | ------------- |
| platformName  | Android |
| platformVersion  | [OS VERSION / IMAGE]  |
| deviceName | [EMULATED_DEVICE_NAME] | 
| app | /[PROJECT_PATH]/[APP_NAME].apk |
| appium:automationName | UIAutomator2 |


#### Install Apium 
Appium is an open source test automation framework for use with native, hybrid and mobile web apps. 
It drives iOS, Android, and Windows apps using the WebDriver protocol.

* Install [Appium](https://appium.io) from the official documentation 
* Install [Appium 2](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli) by Node JS(Beta):
```bash
    npm install -g appium@next
```
Check the appium version using
```bash
    appium -v
```

#### Appium Doctor
To check if your OS meets the appium requirements, install this node package.
* [Appium Doctor Package](https://github.com/appium/appium-doctor)
Install it using the command 
```bash 
npm install appium-doctor -g
```
And then use the library:
```bash 
appium-doctor
```

#### Appium drivers
If you want Appium to work correctly, you need to download and have the android/ios driver in your system.
Run the commands:
```bash 
appium driver install uiautomator2
```
Check the installed drivers using
```bash 
appium driver list
```

#### Sample applications
Sample Application that you can use:

[SauceDemo Hybrid App - React Native)](https://github.com/saucelabs/my-demo-app-rn) - (Framework is configured to use this one)

[Sauce Labs Native Sample Application](https://github.com/saucelabs/sample-app-mobile)



## Setup WebDriverIO

1- Run the command to create the package.json & continue with the installation process
```bash
    npm init wdio .
```
2- Using the WDIO Configuration Helper select the options you want to select. In my case I decided to use:  
* On my local machine
* Mocha
* No compiler
* Spect Location: Default
* Do you want WebDriverIO to generate some test files?: No
* Reporter: Spec
* No Plugin 
* Service: Appium
* Base URL: Default
* NPM Install: Yes

3- Add your tests at 
```bash
'./[yourProject]/specs/**/*.js'
```

4- Configure the app route at wdio.conf.js
* Declare where it is going to be located
```bash
const projectPath = require('path')
const androidAppPath = projectPath.join(process.cwd(), "app/android/Android-MyDemoAppRN.1.3.0.build-244.apk")
```

* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        platformName: 'Android', 
        "appium:device-name": 'Mi_A1',
        "appium:platformVersion": "9.0",
        "appium:automationName": "UIAutomator2",
        "appium:app": androidAppPath,
        // "com.saucelabs.mydemoapp.rn": "com.saucelabs.mydemoapp.rn.MainActivity")
    }]
```

* Install Appium in your project
```bash
    npm install --save-dev appium@next
```

* Check if the drivers are still available, if not install them again:
```bash 
appium driver list
```
```bash 
appium driver install uiautomator2
```

* Run your scripts using
```bash
npx wdio
```

## Setup WebDriverIO
if you want to run this project:

1- Install all the system requirements

2- Clone the project

3- Run: npm i

4- Download the android app and place it under app/android 

5- npm run wdio


### Extra Information

* [UI Selectors (Android)](https://developer.android.com/reference/androidx/test/uiautomator/UiSelector)


