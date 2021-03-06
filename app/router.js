import EmberRouter from '@ember/routing/router';
import config from 'hundertsieben/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('login');
  this.route('privacy');
  this.route('error', { path: '*' });
});
