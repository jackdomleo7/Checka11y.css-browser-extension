window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

window.addEventListener('load', () => {
  const displayStylesheetToggle = document.getElementById('displayStylesheet');
  const disableWarningsToggle = document.getElementById('disableWarnings');

  const setDisableWarningsDisabledState = () => {
    disableWarningsToggle.disabled = !displayStylesheetToggle.checked;
  };

  const toggleStylesheet = () => {
    browser.tabs.query({active: true, currentWindow: true}, tabs => {
        browser.action.setBadgeText({text: displayStylesheetToggle.checked ? 'On' : '', tabId: tabs[0].id});
        browser.tabs.sendMessage(tabs[0].id, {type: 'toggleStylesheet', displayStylesheet: displayStylesheetToggle.checked, disableWarnings: disableWarningsToggle.checked});
    });
  }
  

  browser.tabs.query({active: true, currentWindow: true}, tabs => {
    browser.tabs.sendMessage(tabs[0].id, {type: 'isStylesheetSet'}, stylesheetHref => {
      displayStylesheetToggle.checked = stylesheetHref != null;
      displayStylesheetToggle.dispatchEvent(new Event('input'));
      disableWarningsToggle.checked = stylesheetHref.includes('checka11y-errors.css');
      browser.action.setBadgeText({text: stylesheetHref ? 'On' : '', tabId: tabs[0].id});
    });
  });

  setDisableWarningsDisabledState();

  displayStylesheetToggle.addEventListener('input', () => {
    setDisableWarningsDisabledState();
  });

  displayStylesheetToggle.onchange = () => toggleStylesheet();
  disableWarningsToggle.onchange = () => toggleStylesheet();
});
