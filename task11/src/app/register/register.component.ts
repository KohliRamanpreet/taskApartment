import { Component, OnInit } from '@angular/core';
import { Detail } from '../model/Detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public members: any[] = [{
    name: '',
    gender: '',
    age: '',
    relation: ''
  }]
  user:Detail=new Detail();
   constructor(private router:Router) { }
 
   ngOnInit(): void {
   }
   onSubmit()
   {
   console.log("welcome");
   console.log(this.user);
   localStorage.removeItem("detail");
      localStorage.setItem("detail",JSON.stringify(this.user));
      alert("Detail entered!")
      this.router.navigate(['']);
   }
   removeMembers(i: number) {
    this.members.splice(i, 1);
  }
  addMembers() {
      this.members.push({
        id: this.members.length + 1,
        name: '',
        gender: '',
        age: '',
        relation: ''
      });
  
    this.user.members=this.members;
  }

}
