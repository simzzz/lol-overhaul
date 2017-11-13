import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowlingAbyssComponent } from './howling-abyss.component';

describe('HowlingAbyssComponent', () => {
  let component: HowlingAbyssComponent;
  let fixture: ComponentFixture<HowlingAbyssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowlingAbyssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowlingAbyssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
