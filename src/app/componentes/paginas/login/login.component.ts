import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName!: string;

  constructor(private router: Router){}

  login(){
    /*console.log("Nome do usuário", this.userName);*/
    sessionStorage.setItem('user', this.userName);

    this.router.navigate(['/']);
  }

}
