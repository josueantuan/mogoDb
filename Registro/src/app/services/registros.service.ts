import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { registro } from "../Models/registro";
import "rxjs/Rx"

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(private httpClient:HttpClient) { }
  domain: string = 'http://localhost:3000';
  getTasks() {
    return this.httpClient.get<registro[]>(`${this.domain}/api/registro`)
      .map(res => res);
  }
  addTask(newRegister: registro){
    return this.httpClient.post<registro>(`${this.domain}/api/registro`, newRegister)
    .map(res => res);
  }
  deleteTask(id){
    return this.httpClient.delete<registro>(`${this.domain}/api/registro/${id}`)
    .map(res => res);
  }
}
