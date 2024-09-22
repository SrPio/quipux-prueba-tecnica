import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuOpen = false;
  activeMenu: string | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSubmenu(menu: string) {
    this.menuOpen = true; // Abrir el menú al seleccionar un elemento
    if (this.activeMenu === menu) {
      this.activeMenu = null; // Cerrar si ya está abierto
    } else {
      this.activeMenu = menu; // Abrir el submenú correspondiente
    }
  }
}
