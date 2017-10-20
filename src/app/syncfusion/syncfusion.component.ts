import { Component } from '@angular/core';
import { ApplicationUser } from '../models/applicationUser';
import { DataService } from '../services/dataService';

@Component({
    selector: 'app-syncfusion',
    templateUrl: './syncfusion.component.html',
    styleUrls: ['./syncfusion.component.css']
})
export class SyncfusionComponent {
    applicationUsers: ApplicationUser[];

    selectedDate: string = '10/20/2017';

    constructor(private _dataService: DataService) {
        this.applicationUsers = this._dataService.getApplicationUsers();
    }
}