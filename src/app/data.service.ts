import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient)
   
{
 }
Select()
{
return this.http.get("http://192.168.0.107:9898/product");
}
SelectByNo(id)
{
return this.http.get("http://192.168.0.107:9898/product/"+id);
}
Insert(prodobj)
{
return this.http.post("http://192.168.0.107:9898/product",prodobj);
}
Update(prodobj)
{
return this.http.put("http://192.168.0.107:9898/product/"+prodobj.id,prodobj);
}
Delete(id)
{
return this.http.delete("http://192.168.0.107:9898/product/"+id);

}

// Select()
// {
// return this.http.get("http://localhost:8888/emps");

// }

// SelectByNo(No)
// {
// return this.http.get("http://localhost:8888/emps/"+No);

// }
// Insert(empobj)
// {
// return this.http.post("http://localhost:8888/emps",empobj);

// }
// Update(empobj)
// {
// return this.http.put("http://localhost:8888/emps/"+empobj.No,empobj);

// }
// Delete(No)
// {
// return this.http.delete("http://localhost:8888/emps/"+No);

// }

}
