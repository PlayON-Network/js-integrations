import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { initializeEngine } from '@playon-network/engine';
import { initializeFantasyApp } from '@playon-network/fantasy';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.scss'],
  host: {'class': 'main__content__game'},
})
export class FantasyComponent implements AfterViewInit {
  statusLabel = 'Loading...';

  constructor(private element: ElementRef) {
  }

  async ngAfterViewInit() {
    const engine = await initializeEngine({
      nid: 'playon-demo',
      authToken: 'auth-token-here',
      isTesting: isDevMode(),
    });

    initializeFantasyApp(engine, this.element.nativeElement);
  }

  @HostListener('loading')
  onLoading() {
    this.statusLabel = 'Loading...';
  }
  
  @HostListener('loaded')
  onLoaded() {
    this.statusLabel = 'Loaded...';
  }
  
  @HostListener('initializing')
  onInitializing() {
    this.statusLabel = 'Initializing...';
  }
  
  @HostListener('initialized')
  onInitialized() {
    this.statusLabel = 'Initialized...';
  }
  
  @HostListener('starting')
  onStarting() {
    this.statusLabel = 'Starting...';
  }
  
  @HostListener('started')
  onStarted() {
    this.statusLabel = 'Started...';
  }
}
