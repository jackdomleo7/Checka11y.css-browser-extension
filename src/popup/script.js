window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

function sendAction(type, displayStylesheet, disableWarnings) {
  browser.tabs.query({active: true, currentWindow: true}, tabs => {
      browser.browserAction.setBadgeText({text: displayStylesheet ? 'On' : '', tabId: tabs[0].id});
      browser.tabs.sendMessage(tabs[0].id, {type, displayStylesheet, disableWarnings});
  });
}

window.addEventListener('load', (event) => {
  const displayStylesheetToggle = document.getElementById('displayStylesheet');
  const disableWarningsToggle = document.getElementById('disableWarnings');

  browser.tabs.query({active: true, currentWindow: true}, tabs => {
    browser.tabs.sendMessage(tabs[0].id, {type: 'isStylesheetSet'}, stylesheetHref => {
      displayStylesheetToggle.checked = stylesheetHref != null;
      disableWarningsToggle.checked = stylesheetHref.includes('checka11y-errors.css');
      browser.browserAction.setBadgeText({text: stylesheetHref ? 'On' : '', tabId: tabs[0].id});
    });
  });

  displayStylesheetToggle.onchange = () => sendAction('toggleStylesheet', displayStylesheetToggle.checked, disableWarningsToggle.checked);
  disableWarningsToggle.onchange = () => sendAction('toggleStylesheet', displayStylesheetToggle.checked, disableWarningsToggle.checked);
});