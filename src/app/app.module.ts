import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElinorComponent } from './elinor/elinor.component';

import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { SiblingsComponent } from './siblings/siblings.component';

@NgModule({
  declarations: [
    AppComponent,
    ElinorComponent,
    SiblingsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
