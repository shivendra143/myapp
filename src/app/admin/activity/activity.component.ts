import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { PagerService } from '../../services/pager.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activities: any[];
    // pager object
  pager: any = {};
    // paged items
  pagedItems: any[];
  Math: any;

  constructor( private service: AdminService,private pagerService: PagerService) { this.Math = Math; }

  ngOnInit() {
    this.getAdminActivity();
  }
  getAdminActivity() {
    this.service.getAdminActivity().subscribe(res => {
      this.activities = res.data;
      this.setPage(1);
    });
  }
  nextPrevious(a) {
  
    this.service.getActivitynext(a).subscribe(res => {
      this.activities = res.data;
     
    });
  }
  nextPrevious1(a) {
  
    this.service.getActivitypre(a).subscribe(res => {
      this.activities = res.data.users;
     
    });
  }
 
  nextPage(){
      this.service.getAdminActivity().subscribe(data => 
      this.activities = data);
      this.setPage(1);
    }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.activities.length, page);

    // get current page of items
    this.pagedItems = this.activities.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
