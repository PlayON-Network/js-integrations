import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyWithSkeletonComponent } from './fantasy-with-skeleton.component';

describe('FantasyWithSkeletonComponent', () => {
  let component: FantasyWithSkeletonComponent;
  let fixture: ComponentFixture<FantasyWithSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasyWithSkeletonComponent]
    });
    fixture = TestBed.createComponent(FantasyWithSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
