import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './share/shared.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { FeaturedModule } from './featured/featured.module';
import { AppErrorComponent } from './app-error.component';


@NgModule({
  declarations: [
    AppComponent,
    AppErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    SearchModule,
    FeaturedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
