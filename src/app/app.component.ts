import { Component } from '@angular/core';
import { ApplicationUser } from './models/applicationUser';
import { Tribe } from './models/tribe';
import {  Sex } from './models/sex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  // grids
  private grid1;
  private grid1ColumnApi;

  private grid2;
  private grid2ColumnApi;

  enableSorting: true;
  enableFiltering: true;

  // Grid configurations
  rowSelection = "multiple";
  rowDeselectiion = true;
  suppressRowClickSelection = true;

  // columns  configurations

  defaultColDef = {
    width: 2000,
    editable: true
  };

  columnHeaders = [
    {
      headerName: 'User Name', field: 'name', editable: true, checkboxSelection: true, width: 200,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
    },
    {headerName: 'Age', field: 'age', type: ['dateColumn'], filter: 'number'},
    {headerName: 'Tribe', field: 'tribe'},
    {headerName: 'Sex', field: 'sex'}
];

  appUsers: ApplicationUser[] = [
    new ApplicationUser('Moses Igbuku', 27, Tribe.isoko, Sex.male),
    new ApplicationUser('Cynthia Nkeaka', 22, Tribe.igbo, Sex.female),
    new ApplicationUser('Emeka Keneth', 29, Tribe.igbo, Sex.male),
    new ApplicationUser('Victor Ogudu', 25, Tribe.urhobo, Sex.male),
    new ApplicationUser('Rose James', 23, Tribe.isoko, Sex.female),
    new ApplicationUser('Maro Jake', 26, Tribe.isoko, Sex.male),
    new ApplicationUser('Philip Saul', 30, Tribe.yoruba, Sex.male),
    new ApplicationUser('Rose James', 23, Tribe.isoko, Sex.female),
    new ApplicationUser('Kenneth Charle', 34, Tribe.hausa, Sex.male),
    new ApplicationUser('Ruth Bennard', 22, Tribe.igbo, Sex.female),
    new ApplicationUser('Cynthia Rock', 18, Tribe.yoruba, Sex.female)
  ];

  // event handlers for grid(gridOptions)
  onCellClicked($event) {
    let ev = $event;
    // console.log(this.appUsers[0]);
  }

  onGridReady($event) {
    this.grid2  = $event.api;
    this.grid2ColumnApi = $event.columnApi;

    this.grid2.sizeColumnsToFit();
  }

  // event handlers for columns
}
