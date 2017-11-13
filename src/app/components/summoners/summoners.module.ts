import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonersComponent } from './summoners/summoners.component';
import { SpellsComponent } from './spells/spells.component';
import { RunesComponent } from './runes/runes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SummonersComponent, SpellsComponent, RunesComponent]
})
export class SummonersModule { }
