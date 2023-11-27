import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { initializeEngine } from '@playon-network/engine';
import { initializeFantasyApp } from '@playon-network/fantasy';
import { initializeFantasySkeleton } from '@playon-network/skeleton-ui';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy-with-skeleton.component.html',
  styleUrls: ['./fantasy-with-skeleton.component.scss'],
  host: {'class': 'main__content__game'},
})
export class FantasyWithSkeletonComponent implements AfterViewInit {
  constructor(private element: ElementRef) {
    initializeFantasySkeleton();
  }

  async ngAfterViewInit() {
    const engine = await initializeEngine({
      nid: 'playon-demo',
      authToken: 'auth-token-here',
      isTesting: isDevMode(),
    });

    initializeFantasyApp(engine, this.element.nativeElement);
  }
}
