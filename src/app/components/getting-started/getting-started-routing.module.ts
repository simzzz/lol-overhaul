import { SummonersCodeComponent } from './summoners-code/summoners-code.component';
import { ChatCommandsComponent } from './chat-commands/chat-commands.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { WhatIsLolComponent } from './what-is-lol/what-is-lol.component';
import { GuideComponent } from './guide/guide.component';

const routes: Routes = [
    {path: '', component: GettingStartedComponent},
    {path: 'what-is-lol', component: WhatIsLolComponent},
    {path: 'guide', component: GuideComponent},
    {path: 'chat-commands', component: ChatCommandsComponent},
    {path: 'summoners-code', component: SummonersCodeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class GettingStartedRoutingModule { }
