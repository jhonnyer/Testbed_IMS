import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css']
})
export class InfoGeneralComponent implements OnInit {
  informacionGeneral=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"JAVA"},
    {"id":3,"name":"PYTHOU"},
    {"id":4,"name":"Prueba"},
  ]
  public informacionID;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(informacion){
    this.router.navigate(['/informacion', informacion.id]);
  }

  goPrevious(){
    let previousdID = this.informacionID-1;
    this.router.navigate(['/informacion',previousdID]);
  }
  
  goNext(){
    let nextID = this.informacionID+1;
    this.router.navigate(['/informacion',nextID]);
  }
  
  gotoInformacion(){
    let selecteId= this.informacionGeneral ? this.informacionGeneral : null;
    this.router.navigate(['/informacion',{id:selecteId}]);
  }

}

