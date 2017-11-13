import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsLolComponent } from './what-is-lol.component';

describe('WhatIsLolComponent', () => {
  let component: WhatIsLolComponent;
  let fixture: ComponentFixture<WhatIsLolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsLolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
