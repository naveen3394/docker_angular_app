import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  product={"id":"","title":"","price":""};

  constructor(private route :ActivatedRoute,private router :Router,private service:DataService) { }

  ngOnInit() {
  }
Insert()
{
  var observableresult=this.service.Insert(this.product);
observableresult.subscribe((result)=>{
 console.log(result);
  this.router.navigate(['/home']);
})
}
}
