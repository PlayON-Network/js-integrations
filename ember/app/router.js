import EmberRouter from '@ember/routing/router';
import config from 'games-portal/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('blackjack');
  this.route('poker');
  this.route('casino');
  this.route('fantasy');
  this.route('fantasy-with-skeleton');
  this.route('404', { path: '/*path' });
});
