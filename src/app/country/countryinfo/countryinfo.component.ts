import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['./countryinfo.component.scss']
})
export class CountryinfoComponent implements OnInit {
  Countries: any[];
  constructor(
    private service: CountryService,
    private toastr: ToastrService,
   ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.service.getCountries().subscribe(res => {
      this.Countries = res.countries;
   });
  }

  deleteCountries(id) {
     let query = '/'+id;
      this.service.deleteCountries(query).subscribe(res => {
       
        this.toastr.success('State deleted Successfully');
        this.getCountries();
        });
  }

}
