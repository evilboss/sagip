App.info({
    name: 'Sagip',
    description: 'one click rescue',
    author: 'Cloudstaff',
    website: 'http://localhost:3000'
});

App.icons({
    // iOS
    'iphone': 'resources/icons/ios/icon-60.png',
    'iphone_2x': 'resources/icons/ios/icon-60@2x.png',
    'iphone_3x': 'resources/icons/ios/icon-60@3x.png',
    'ipad': 'resources/icons/ios/icon-72.png',
    'ipad_2x': 'resources/icons/ios/icon-72@2x.png',
});

App.launchScreens({
    'iphone': 'splash/Default~iphone.png',
    'iphone_2x': 'splash/Default@2x~iphone.png',

});



// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
