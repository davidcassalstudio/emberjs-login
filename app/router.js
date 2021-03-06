import EmberRouter from '@ember/routing/router';
import config from 'emberjs-login/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('users');
});
