import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMember } from '../_models/imember'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MembersService{
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient){}

  getMembers() {
    return this.http.get<IMember[]>(this.baseUrl + "users");
  }
  getMember(username: string) {
    return this.http.get<IMember>(this.baseUrl + "users/" + username);
  }

}


