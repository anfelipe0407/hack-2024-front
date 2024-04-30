import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// * HTTP
import { HttpClientModule } from '@angular/common/http';

// * ROUTING
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    

    // * HTTP
    HttpClientModule,

    // * ROUTING
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
