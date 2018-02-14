import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor() { }

  validateUser(usuario:string, password:string): boolean {
    return (usuario === "Admin" && password === "123");
  }

}
