import { Component, OnInit } from '@angular/core';
import{AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  login(){
      this.authservice.login("z@s.com","1234").subscribe(data=>console.log("succes"),err=>{
        console.log('err',err)
      });
  }

}
