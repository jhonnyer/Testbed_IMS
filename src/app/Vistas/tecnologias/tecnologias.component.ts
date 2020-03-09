import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
    public informacionID;
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.informacionID = id;
  }

}
