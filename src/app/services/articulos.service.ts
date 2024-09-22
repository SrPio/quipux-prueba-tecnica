import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  private jsonURL = '../../assets/resources/articulos.json';

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
