import { Component, OnInit } from '@angular/core';
import { User } from './Interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

    users:User[];


  // private user: User = {
  //   name: 'just created',
  //   username: 'wz',
  //   email: 'Sincere@april.biz',
  //   address: {
  //     street: 'Kulas Light',
  //     suite: 'Apt. 556',
  //     city: 'Gwenborough',
  //     zipcode: '92998-3874',
  //     geo: {
  //       lat: '-37.3159',
  //       lng: '81.1496',
  //     },
  //   },
  //   phone: '1-770-736-8031 x56442',
  //   website: 'hildegard.org',
  //   company: {
  //     name: 'Romaguera-Crona',
  //     catchPhrase: 'Multi-layered client-server neural-net',
  //     bs: 'harness real-time e-markets',
  //   },
  // };

  // //user tobe updated
  // private userTobeUpdated: User = {
  //   id: 2,
  //   name: 'patch',
  //   username: 'MR wz',
  //   email: 'Sincere@april.biz',
  //   address: {
  //     street: 'Kulas Light',
  //     suite: 'Apt. 556',
  //     city: 'Gwenborough',
  //     zipcode: '92998-3874',
  //     geo: {
  //       lat: '-37.3159',
  //       lng: '81.1496',
  //     },
  //   },
  //   phone: '1-770-736-8031 x56442',
  //   website: 'hildegard.org',
  //   company: {
  //     name: 'Romaguera-Crona',
  //     catchPhrase: 'Multi-layered client-server neural-net',
  //     bs: 'harness real-time e-markets',
  //   },
  // };

  private userTobeUpdatedd: any = {
    id: 7,
    name: 'update what about others values',
    username: 'MR wz',
    email: '2023@april.biz',
  };

  idDelete: any;
  constructor(private userservice: UserService) {
    this.users=[]
  }

  ngOnInit() {
    // this.getOneUser();
    // this.CreateUser();
    this.ongetUsers();
    // this.updateUser();
    // this.ongetUsers();
    // this.updatePatch();
  }

  // ongetUsers(): void {
  //   this.userservice.getUser().subscribe(
  //     (response) => console.table(response),
  //     (error: any) => console.log(error),
  //     () => console.table('done ')
  //   );
  // }

  ongetUsers(): void {
    this.userservice.getUser().subscribe(
      (response) =>{ console.table(response);
        this.users=response;
      },
      (error: any) => console.log(error),
      () => console.table('done ')
    );
  }



  getOneUser(): void {
    this.userservice.getUserById().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done ')
    );
  }

  // CreateUser(): any {
  //   this.userservice.createUser(this.user).subscribe(
  //     (response) => console.log(response),
  //     (error: any) => console.log(error),
  //     () => console.log('done create ')
  //   );
  // }

  updateUser(): any {
    this.userservice
      .updateUser(this.userTobeUpdatedd)
      .subscribe((res) => console.log(res));
  }

  // subscribe to observer and update user with Patch method
  updatePatch(): any {
    this.userservice
      .updateUserPatch(this.userTobeUpdatedd)
      .subscribe((res) => console.log(res));
  }

  // delete method
  deleteUser(id:number): void {
    this.userservice
      .deleteUser(this.idDelete)
      .subscribe((res) => console.log(res));
  }
}
