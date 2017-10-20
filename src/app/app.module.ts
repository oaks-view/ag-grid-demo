import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {AgGridModule} from 'ag-grid-angular/main';
import { EJAngular2Module } from 'ej-angular2';

import { AppComponent } from './layout/app.component';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { AgGridComponent } from './agGrid/agGrid.component';
import { DataService } from './services/dataService';

const appRoutes: Routes = [
  { path: 'sync-fusion', component: SyncfusionComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: '', component: AgGridComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    EJAngular2Module.forRoot(),
    AgGridModule.withComponents(
      [AgGridComponent]
    ),
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
