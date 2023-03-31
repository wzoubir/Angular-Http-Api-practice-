import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //get users
  getUser(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
