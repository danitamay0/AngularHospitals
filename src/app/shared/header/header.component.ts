import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('changeMobileMenu') changeMobileMenu = new EventEmitter<boolean>();
  public expandLogo = false;
  public showMobileMenu:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  showMobileM(){
    this.showMobileMenu = !this.showMobileMenu
    this.changeMobileMenu.emit(this.showMobileMenu)
  }
}
