import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product={"id":"","title":"","price":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService)
     { }

  ngOnInit() 
  {
this.route.paramMap.subscribe((result)=>{
  var id=result.get("id");
  console.log("id is "+ id);
var observableresult=  this.service.SelectByNo(id);
observableresult.subscribe((data)=>{
   console.log('data '+data);
  this.product=data[0];
    })
  })
}

Update()
{
var observableresult=this.service.Update(this.product);
observableresult.subscribe((result)=>{
  this.router.navigate(['/home']);
})
}
}
