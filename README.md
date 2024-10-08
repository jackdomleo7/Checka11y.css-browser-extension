<div align="center">

  ![Checka11y.css logo](./assets/checka11y.png)

  [![MIT License](https://img.shields.io/badge/License-MIT-important)](https://github.com/jackdomleo7/Checka11y.css-browser-extension/blob/master/LICENSE) ![GitHub manifest version (path)](https://img.shields.io/github/manifest-json/v/jackdomleo7/Checka11y.css-browser-extension/master)

  [![GitHub stars](https://img.shields.io/github/stars/jackdomleo7/Checka11y.css-browser-extension?style=social)](https://github.com/jackdomleo7/Checka11y.css-browser-extension/stargazers) [![Chrome Web Store](https://img.shields.io/chrome-web-store/users/npkoehgjmnffjdaelommnfjkflenbfaa?label=Chrome%20Web%20Store%20users&logo=google-chrome&style=social)](https://chrome.google.com/webstore/detail/checka11ycss/npkoehgjmnffjdaelommnfjkflenbfaa) [![Mozilla Add-on](https://img.shields.io/amo/users/checka11y-css?label=Firefox%20Add-on%20users&logo=firefox&style=social)](https://addons.mozilla.org/en-GB/firefox/addon/checka11y-css)
  
</div>

---

👉 [Click here to go to the original Checka11y.css project](https://github.com/jackdomleo7/Checka11y.css)

---

# Checka11y.css - browser extension

**A CSS stylesheet to quickly highlight a11y concerns.**

_Lightweight_ &bull; _Modern_ &bull; _Accessibile_ &bull; _Customisable_ &bull; _Simple_

Designed to quickly highlight some common accessibility errors and warnings that can be easily and quickly rectified.

This is the browser extension for [Checka11y.css](https://github.com/jackdomleo7/Checka11y.css). It allows you to toggle on and off the Checka11y.css stylesheet on any webpage so you can debug your webpage's accessibility.

Browsers supported:
- [Chromium](https://chrome.google.com/webstore/detail/checka11ycss/npkoehgjmnffjdaelommnfjkflenbfaa)
- [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/checka11y-css)

<div align="center">
  <img src="./assets/checka11y-extension.gif" alt="GIF example of Checka11y.css browser extension in use by toggling on and off the Checka11y.css stylesheet." />

  <br/>

  Light theme                                                 |  Dark theme
  :----------------------------------------------------------:|:----------------------------------------------------------:
  ![Checka11y.css light theme](./assets/checka11y-light.png)  |  ![Checka11y.css dark theme](./assets/checka11y-dark.png)
</div>

---

## Dev

###### Prerequisites
```
npm i -g web-ext
```

###### Debug the extension in Firefox
```
web-ext run
```

OR

- In Firefox, navigate to `about:debugging`
- Click "This Firefox"
- Click "Load Temporary Add-on" and choose the directory `Checka11y.css-browser-extension`

###### Debug the extension in Chrome
- In Chrome, navigate to `chrome://extensions`
- Enable `Developer mode`
- Click "Load unpacked extension" and choose the folder `Checka11y.css-browser-extension`

###### Package up the browser extension ready for publishing
```
web-ext build
```

---

<div align="center">

  [GitHub](https://github.com/jackdomleo7/Checka11y.css "View the GitHub repo and maybe give us a star") &bull; [npm](https://www.npmjs.com/package/checka11y-css "View Checka11y.css on npmjs.com") &bull; [yarn](https://yarnpkg.com/package/checka11y-css "View Checka11y.css on yarnpkg.com") &bull; [docs](https://checka11y.jackdomleo.dev "Read the official documentation") &bull; [CHANGELOG](https://github.com/jackdomleo7/Checka11y.css/releases "Read all the releases") &bull; [License](https://github.com/jackdomleo7/Checka11y.css#license "MIT License") &bull; [Chrome Web Store](https://chrome.google.com/webstore/detail/checka11ycss/npkoehgjmnffjdaelommnfjkflenbfaa) &bull; [Firefox add-on](https://addons.mozilla.org/en-GB/firefox/addon/checka11y-css)

</div>