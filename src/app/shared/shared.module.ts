import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent, HeaderComponent, FooterComponent, LoaderComponent],
  exports: [NotFoundComponent, HeaderComponent, FooterComponent, LoaderComponent],

})
export class SharedModule { }
