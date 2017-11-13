import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedGameModesComponent } from './featured-game-modes.component';

describe('FeaturedGameModesComponent', () => {
  let component: FeaturedGameModesComponent;
  let fixture: ComponentFixture<FeaturedGameModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedGameModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedGameModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
