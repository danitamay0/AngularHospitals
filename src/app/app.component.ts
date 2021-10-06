import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public innerWidth: number=0;
  public defaultSidebar='';
  public showMobileMenu = false;
  public sidebartype = 'full';  
  ngOnInit() {
      this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
  }

    @HostListener('window:resize', ['$event'])
    onResize(event:string) {
      this.handleSidebar();
    }

    handleSidebar() {

      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1170) {
	this.sidebartype = 'mini-sidebar';
      } else {
	this.sidebartype = this.defaultSidebar;
      }
  }
}
