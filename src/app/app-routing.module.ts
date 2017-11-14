import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'getting-started', loadChildren: './components/getting-started/getting-started.module#GettingStartedModule'},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(
          routes,
          { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
