import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {
  articulos: any[] = [];

  constructor(private articulosService: ArticulosService) {}

  ngOnInit(): void {
    this.articulosService.getArticulos().subscribe((data) => {
      this.articulos = data;
    });
  }
}
