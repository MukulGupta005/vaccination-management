import { vaccine } from '../../shared/vaccine';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vaccines-list',
  templateUrl: './vaccines-list.component.html',
  styleUrls: ['./vaccines-list.component.css']
})

export class vaccinesListComponent implements OnInit {
  vaccineData: any = [];
  dataSource: MatTableDataSource<vaccine>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'vaccine_name', 'vaccine_email', 'section', 'action'];

  constructor(private vaccineApi: ApiService) {
    this.vaccineApi.Getvaccines().subscribe(data => {
      this.vaccineData = data;
      this.dataSource = new MatTableDataSource<vaccine>(this.vaccineData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deletevaccine(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.vaccineApi.Deletevaccine(e._id).subscribe()
    }
  }

}