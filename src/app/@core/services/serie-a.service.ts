import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SerieA } from 'src/app/@shared/interfaces/serie-a';

@Injectable({
  providedIn: 'root'
})
export class SerieAService {

  constructor(private http: HttpClient) { }

  getAllTeams() {
    return this.http.get<SerieA[]>("http://localhost:3000/teams")
  }
}
