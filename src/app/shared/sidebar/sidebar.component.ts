import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: RouteInfo[]=[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
  ) {}

  // End open close
  ngOnInit() {
    console.log('asdasdasdasd');
    
    this.sidebarnavItems = ROUTES;
  }
}
