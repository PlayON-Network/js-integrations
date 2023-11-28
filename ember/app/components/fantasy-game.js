import Component from '@glimmer/component';
import { initializeEngine } from '@playon-network/engine';
//import { initializeFantasyApp } from '@playon-network/fantasy';

export default class FantasyGameComponent extends Component {
  elementDidInsert(element) {
    console.log("ASDADASd", initializeEngine);
  }
}
