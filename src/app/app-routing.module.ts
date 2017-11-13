import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', redirectTo: '/'},
];

@NgModule({
    imports: [RouterModule.forRoot(
          routes,
          { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
