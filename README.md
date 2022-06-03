# simply-weathery

Desktop only visualization of current weather and forecast.
For mobile users there is a -*quite random*- alert and the app is unusable.

The design changes based only on UTC time beacuse I wasn't able to find neither an up-to-date library nor a free API to convert timezones. Making the calculations myself is defenetly out of this project scope.

The icons were derigned *ad hoc* for simply-weathery.

Made with Current Weather free API by [OpenWeather](https://openweathermap.org/).


Please Note: I've used both properties from the [W3C spec](https://www.w3.org/TR/css-scrollbars-1/) and the [webkit selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar). However, it will not work for every user.
Example: Mozilla Firefox (FF) doesn't support custom scrollbars at the moment (check bugfix request [here](https://bugzilla.mozilla.org/show_bug.cgi?id=77790)); W3C spec properties worked on FF 100.0.2, but not on FF 100.0.2.
Considering this is a small demo I decided to not use any libraries to fix the interface in FF.
