import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModesComponent } from './game-modes.component';

describe('GameModesComponent', () => {
  let component: GameModesComponent;
  let fixture: ComponentFixture<GameModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
