import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonersRiftComponent } from './summoners-rift.component';

describe('SummonersRiftComponent', () => {
  let component: SummonersRiftComponent;
  let fixture: ComponentFixture<SummonersRiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonersRiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonersRiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
