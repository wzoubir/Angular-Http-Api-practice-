import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { User } from '../Interface/user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {}

  //get users
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`).pipe(
      // tap((users) => console.log('tap' + users))
      map((users) =>
        users.map((user) => ({
          ...user,
          username: user.username.toUpperCase(),
          isAdmin:user.id===10?true:false
        }))
      )
    );
  }
  //get one user
  getUserById(): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/users/1`);
  }

  // create user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.urlApi}/users`, user);
  }

  //update user
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.urlApi}/users/${user.id}`, user);
  }
  // update user with patch
  //update user
  updateUserPatch(user: User): Observable<User> {
    return this.http.patch<User>(`${this.urlApi}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.urlApi}/users/${id}`);
  }
}
