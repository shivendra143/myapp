import { Component, OnInit, ViewChild} from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


declare var moment: any;

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.scss']
})
export class EmpinfoComponent implements OnInit {

  Employees: any[];
  totalItem: number;
  no_data: boolean;
  employeeRef: any = null;
  modalRef: any = null;
  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private _router: Router
   ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getEmployee().subscribe(res => {
      console.log(res)
      this.totalItem = res.employer.length;
          if(this.totalItem == 0){
             this.no_data=true;
           }else{
             this.no_data=false;
           }
           this.Employees = res.employer;
    
   });
  }
  open(content) {
	 
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.employeeRef = null;
    }, (reason) => {
      this.employeeRef = null;
    });
  }
 
  delete_u(modal, userid) {
    this.employeeRef = userid;
    this.open(modal);
  }

}
