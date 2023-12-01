import Component from '@glimmer/component';
import { action } from '@ember/object';
import config from 'games-portal/config/environment';
import { initializeEngine } from '@playon-network/engine';
import { initializeFantasyApp } from '@playon-network/fantasy';
import { initializeFantasySkeleton } from '@playon-network/skeleton-ui';

export default class FantasyGameComponent extends Component {
  constructor() {
    super(...arguments);
    initializeFantasySkeleton();
  }

  @action
  async elementDidInsert(element) {
    if (!this.args.skeleton) {
      this._loadingLabel = document.querySelector('#loading-label');
      element.addEventListener('loading', this._loading.bind(this));
      element.addEventListener('loaded', this._loaded.bind(this));
      element.addEventListener('initializing', this._initializing.bind(this));
      element.addEventListener('initialized', this._initialized.bind(this));
      element.addEventListener('starting', this._starting.bind(this));
      element.addEventListener('started', this._started.bind(this));
    }

    const engine = await initializeEngine({
      nid: 'playon-demo',
      authToken: 'auth-token-here',
      isTesting: config.environment !== 'production',
    });

    initializeFantasyApp(engine, element);
  }

  _loading() {
    this._loadingLabel.innerHTML = 'Loading...';
  }

  _loaded() {
    this._loadingLabel.innerHTML = 'Loaded...';
  }

  _initializing() {
    this._loadingLabel.innerHTML = 'Initializing...';
  }

  _initialized() {
    this._loadingLabel.innerHTML = 'Initialized...';
  }

  _starting() {
    this._loadingLabel.innerHTML = 'Starting...';
  }

  _started() {
    this._loadingLabel.innerHTML = 'Started...';
  }
}
