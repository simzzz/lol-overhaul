import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCommandsComponent } from './chat-commands.component';

describe('ChatCommandsComponent', () => {
  let component: ChatCommandsComponent;
  let fixture: ComponentFixture<ChatCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
