# RNStrap

React Native Starter

## Tested with

- NodeJS v14.19.1
- NPM v6.14.16
- Yarn v1.22.19

## First setup

- Command: yarn install

## Build/run

Android

Run Instructions

- Command: yarn android

Build/run Release Instructions

- Create keystore command: keytool -genkeypair -v -storetype PKCS12 -keystore appname.keystore -alias appnamekey -keyalg RSA -keysize 2048 -validity 10000
- Put your release keystore on android/app/release.keystore

- Command: yarn android:release
- Check your apk file @ android/app/build/outputs/apk/release folder

Bundle Instructions

- Open application: Android Studio 
- Open menu: Build > Select Build Variant > Choose Release
- Open menu: Build > Build Bundle > Build Bundle
- Check your aab file @ android/app/build/outputs/bundle/release folder

## Command logs

Started with;
npx react-native init rnstrap --template react-native-template-typescript

