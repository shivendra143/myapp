import { Component, OnInit } from '@angular/core';
import { DriversService } from '../../services/drivers.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-driversinfo',
  templateUrl: './driversinfo.component.html',
  styleUrls: ['./driversinfo.component.scss']
})
export class DriversinfoComponent implements OnInit {

  closeResult: string;
  name: string;
  modalRef: any;
  Drivers: any;
  driverRef: any = null;
 


  constructor(
    private service: DriversService,
    private toastr: ToastrService,
   ) { }

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this.service.getDrivers().subscribe(res => {
      this.Drivers = res.data;
   });
  }

  deleteDriver(id){
    let query = '/'+id;
    this.service.deleteDriver(query).subscribe(
      data => {
          console.log(data)
          this.toastr.success('Driver deleted Successfully');
          this.getDrivers();
      },
      error => {
         console.log('error')
      });
  }

}
