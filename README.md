# City Pulse

Demo App for City Events based exploration apps

Demo is build using the following environment:

- Nodejs ver 20+
- MacBook M1 2020, Sonoma 14.5
- Xcode 16.0
- CocoaPods: 1.15.2

## Assumptions

- User has their now storage container, thie means User may store their data based on password, theres no password check but if they used different password, it might result with different storage data
- TextInput with secureTextEntry in simulator shows unremoveable view with "Strong Password" because iPhone autofill, see: https://github.com/facebook/react-native/issues/21911
- Not tested for android development

## Instructions

1. run `npm run install`, post-script should also install cocoaPods
2. run `npm run ios` or alternatively open Xcode and open CityPulse/ios/CityPulse.xcworkspace and Run the app from Xcode
