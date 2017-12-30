import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import {PartialMatchFilterComponent} from "../route-one/partial-match-filter.component";
import { DataProviderService  } from '../service/route.service';
import { Http } from "@angular/http";
//import { list } from '../../../main/adata/list';

@Component({
    moduleId: module.id, 
  selector: 'my-app',
  templateUrl: 'route-two.component.html',
  providers:[DataProviderService]
})
export class RouteTwoComponent {
  public gridOptions: GridOptions;
  constructor(private dataProviderService:DataProviderService)  {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = this.createRowData();
    this.gridOptions.columnDefs = this.createColumnData();
    this.gridOptions.enableFilter = true;
  }

  
    // onClicked(event: any): void {
    //     this.gridOptions.api.getFilterInstance("name").
    //     getFrameworkComponentInstance().componentMethod("Hello World!");
    // }
    

    //private createRowData().map()

  private  createRowData() {
  //   let data = new Array<any>();
  //   this.dataProviderService.getall().subscribe(e=> data=e) ;
  //   return data; }
  
    //this.createRowData().getall();

       return [
            {"row": "Row 1", "name": "Michael Phelps"},
            {"row": "Row 2", "name": "Natalie Coughlin"},
            {"row": "Row 3", "name": "Aleksey Nemov"}];}

  private createColumnData()  {
    return [
      {headerName: "Row", field: "row", width: 400},
       {headerName: "Filter Component",
                field: "name", 
                 filterFramework: PartialMatchFilterComponent,
              width: 400}
             
      ];
   }
}
