import { Component, OnInit } from '@angular/core';
import { Detail } from '../model/Detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  
flag=1;
flag1;
user:Detail=new Detail();
constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchForm(form)
  {
    console.log(form.value.flatNo);
    localStorage.setItem("code","1234");
    if(this.flag==1)
    {
      this.flag=2;
    }
  }

  fetch(form)
  {
    if(form.value.code==localStorage.getItem("code"))
    {
    this.flag1=1;
    console.log("hii");
    this.user=JSON.parse(localStorage.getItem("detail"));
    console.log(this.user.famName)
    this.flag=3;
    }
    else
    this.flag1=2;

  }
  removeMembers(i: number) {
    alert("Are you sure, you want to remove member?")
    this.user.members.splice(i, 1);
    localStorage.removeItem("detail");
  localStorage.setItem("detail",JSON.stringify(this.user));
  console.log(this.user);

    
  }
  addMembers() {
    this.user.members.push({
      id: this.user.members.length + 1,
      name: '',
      gender: '',
      age: '',
      relation: ''
    });

 
}
edit()
{ alert("edit?")
console.log(this.user.eMail);
  localStorage.removeItem("detail");
  localStorage.setItem("detail",JSON.stringify(this.user));
  console.log(this.user);
  
  

}
delete()
{
  alert("Are you sure , want to delete?");
 localStorage.removeItem("detail");
 this.router.navigate(['']);
}
}
