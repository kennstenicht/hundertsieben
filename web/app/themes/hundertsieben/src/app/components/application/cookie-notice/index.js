import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationCookieNoticeComponent extends Component {
  // Services
  @service cookies;


  // Defaults
  blockName = "c-application-cookie-notice"


  // Hooks
  constructor(owner, args) {
    super(owner, args);

    if (!this.cookies.exists('hide_cookie_notice')) {
      args.onToggleCookieNotice();
    }
  }


  // Getter and setter
  get allowAnalyseCookies() {
    return this.getCookieWithFallback('allow_analyse_cookies', false);
  }

  set allowAnalyseCookies(value) {
    this.cookies.write('allow_analyse_cookies', value);
  }

  get allowExternalMediaCookies() {
    return this.getCookieWithFallback('allow_external_media_cookies', false);
  }

  set allowExternalMediaCookies(value) {
    this.cookies.write('allow_external_media_cookies', value);
  }


  // Actions
  @action
  allowSelectedCookies() {
    this.saveSettings();
  }

  @action
  allowAllCookies() {
    this.allowAnalyseCookies = true;

    this.saveSettings();
  }


  // Functions
  getCookieWithFallback(cookie, fallback) {
    if (!this.cookies.exists(cookie)) {
      this.cookies.write(cookie, fallback);
    }

    return this.cookies.read(cookie) == 'true';
  }

  @action
  saveSettings() {
    this.cookies.write('hide_cookie_notice', true);
    this.args.onToggleCookieNotice();
  }
}
