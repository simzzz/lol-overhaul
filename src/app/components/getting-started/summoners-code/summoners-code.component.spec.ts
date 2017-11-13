import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonersCodeComponent } from './summoners-code.component';

describe('SummonersCodeComponent', () => {
  let component: SummonersCodeComponent;
  let fixture: ComponentFixture<SummonersCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonersCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonersCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
