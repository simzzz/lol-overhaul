import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModesComponent } from './game-modes/game-modes.component';
import { SummonersRiftComponent } from './summoners-rift/summoners-rift.component';
import { TwistedTreelineComponent } from './twisted-treeline/twisted-treeline.component';
import { HowlingAbyssComponent } from './howling-abyss/howling-abyss.component';
import { FeaturedGameModesComponent } from './featured-game-modes/featured-game-modes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GameModesComponent, SummonersRiftComponent, TwistedTreelineComponent, HowlingAbyssComponent, FeaturedGameModesComponent]
})
export class GameModesModule { }
