import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/Persona.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://argentinaprogramabd.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
    }
  }
  