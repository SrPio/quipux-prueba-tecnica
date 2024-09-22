import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
