import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { cotizar } from '../models/cotizar';

@Injectable({
  providedIn: 'root'
})
export class CotizarService {
  url_api= 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }
  //buscar
  getContactos(): Observable<any>{
    return this.http.get(`${this.url_api}/obtener-lista-contactos`)
  }
//buscar
  getContacto(id:String): Observable<any>{
    return this.http.get(`${this.url_api}/obtener-contacto/${id}`)
  }
  //crear
  postContacto(cotizarfomulario:cotizar):Observable<any> {
    return this.http.post(`${this.url_api}/crear-contacto`, cotizarfomulario)
  }
//actualizar
  putContacto(id: String, cotizarfomulario:cotizar):Observable<any> {
    return this.http.put<any>(`${this.url_api}/actualizar-contacto/${id}`, cotizarfomulario)
  }
//eliminar
  deleteContacto(id:String):Observable<any>{
  return this.http.delete(`${this.url_api}/borrar-contacto/${id}`)
}
}

