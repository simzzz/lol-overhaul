import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { WhatIsLolComponent } from './what-is-lol/what-is-lol.component';
import { GuideComponent } from './guide/guide.component';
import { ChatCommandsComponent } from './chat-commands/chat-commands.component';
import { SummonersCodeComponent } from './summoners-code/summoners-code.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    SharedModule
  ],
  declarations: [GettingStartedComponent, WhatIsLolComponent, GuideComponent, ChatCommandsComponent, SummonersCodeComponent]
})
export class GettingStartedModule { }
