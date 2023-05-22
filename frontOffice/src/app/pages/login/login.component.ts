import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  tokenPayLoad:any;
  isUser:boolean = false;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private authService: UserService,

  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
    });

    // if(localStorage.getItem('token') != null) {
    //   this.authService.checkToken().subscribe({
    //     next: response => {
    //       this.router.navigate(['/dashboard']);
    //     },
    //     error: (err: any) => {
    //       console.log(err);
    //     }
    //   })
    // }
  }

  onSubmit(){

    let data = {
      email: this.emailControl.value,
      password: this.passwordControl.value
    };

    this.authService.login(data).subscribe({
      next: (response) => {
        let token = response.token;
        localStorage.setItem('token', token);

        try{
          this.tokenPayLoad = jwt_decode(token);
          // console.log(tokenPayLoad);
          if(this.tokenPayLoad.role == 'admin'){

            this.router.navigate(['/dashboard']);
          }else if(this.tokenPayLoad.role == 'user'){

            this.router.navigate(['/profile']);
          }

         }catch(err){
          localStorage.clear();
          this.router.navigate(['/']);
        }
      },
      error: error => {
        console.log(error);
        this.toastr.error('Incorrect Email or Password', 'error');
      }
    })

  }

  get emailControl(){
    return this.form.get('email');
  }

  get passwordControl(){
    return this.form.get('password');
  }
}
