import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: false,
})
export class NavComponent {

  menuOpen: boolean = false;
  clickOutsideEnabled: boolean = false;

  menuItems = [
    {label: 'QR Code Generator', route: '/qrcode'},
  ];

  constructor(
    private router: Router
  ) {
    this.clickOutsideEnabled = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      setTimeout(() => {
        this.clickOutsideEnabled = true;
      }, 50);
    } else {
      this.clickOutsideEnabled = false;
    }
  }

  public closeMenu() {
    if (this.menuOpen && this.clickOutsideEnabled) {
      this.menuOpen = false;
      this.clickOutsideEnabled = false;
    }
  }

  navigate(route: string) {
    this.router.navigate([route]);
    this.menuOpen = false;
    this.clickOutsideEnabled = false;
  }

}
