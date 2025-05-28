import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { AreaComponent } from './area/area.component';
import { DiameterComponent } from './diameter/diameter.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    DiameterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
