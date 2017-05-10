import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {AppRoutingModule} from './app-routing.module';
import {AppService} from './service/app.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import {AppComponent} from './application/app.component';
import {MainComponent} from './home/main.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryItemComponent} from './category-item/category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoriesComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
