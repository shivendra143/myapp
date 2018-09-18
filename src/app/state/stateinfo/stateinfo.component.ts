import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stateinfo',
  templateUrl: './stateinfo.component.html',
  styleUrls: ['./stateinfo.component.scss']
})
export class StateinfoComponent implements OnInit {
  States:any;
  constructor(
    private service: StateService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.service.getStates().subscribe(res => {
      this.States = res.states;
   });
  }
  deleteStates(id) {
    let query = '/'+id;
      this.service.deleteStates(query).subscribe(res => {
       
        this.toastr.success('State deleted Successfully');
        this.getStates();
        });
  }
}
