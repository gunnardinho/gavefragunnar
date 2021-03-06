import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElinorComponent } from './elinor/elinor.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { KennethComponent } from './kenneth/kenneth.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    ElinorComponent,
    SiblingsComponent,
    KennethComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
