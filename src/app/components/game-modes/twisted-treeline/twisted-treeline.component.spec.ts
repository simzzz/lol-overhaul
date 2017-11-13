import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwistedTreelineComponent } from './twisted-treeline.component';

describe('TwistedTreelineComponent', () => {
  let component: TwistedTreelineComponent;
  let fixture: ComponentFixture<TwistedTreelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwistedTreelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwistedTreelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
