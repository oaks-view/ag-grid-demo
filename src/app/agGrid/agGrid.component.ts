import { Component } from '@angular/core';
import { DataService } from '../services/dataService';
import { ApplicationUser } from './../models/applicationUser';
import { Tribe } from './../models/tribe';
import {  Sex } from './../models/sex';

@Component({
  selector: 'app-root',
  templateUrl: './agGrid.component.html',
  styleUrls: ['./agGrid.component.css']
})
export class AgGridComponent {
  enableSorting: true;
  enableFiltering: true;

  columnHeaders = [
    {headerName: 'User Name', field: 'name'},
    {headerName: 'Age', field: 'age', filter: 'number'},
    {headerName: 'Tribe', field: 'tribe'},
    {headerName: 'Sex', field: 'sex'}
];

  appUsers: ApplicationUser[];

  constructor(private _dataService: DataService) {
    this.appUsers = this._dataService.getApplicationUsers();
  }
}
