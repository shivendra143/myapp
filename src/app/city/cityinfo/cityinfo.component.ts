import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cityinfo',
  templateUrl: './cityinfo.component.html',
  styleUrls: ['./cityinfo.component.scss']
})
export class CityinfoComponent implements OnInit {
  Cities:any;
  constructor(
    private service: CityService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.service.getCities().subscribe(res => {
      this.Cities = res.cities;
   });
  }

  deleteCities(id) {
    let query = '/'+id;
    this.service.deleteCities(query).subscribe(
      data => {
          this.toastr.success('City deleted Successfully');
         
      },
      error => {
        this.toastr.error('error')
      });
   
  }

}
