import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/F1.jpg",
      Desc : "Sobreviva as 7 noites",
      Titulo: "FNAF"
    }, 
    {
      Imagem : "../assets/F2.jpg",
      Desc : "Continuação de FNAF1",
      Titulo: "FNAF 2"
    }, 
    {
      Imagem : "../assets/F3.jpg",
      Desc : "Continuação de FNAF 2",
      Titulo: "FNAF 3"
    }, 
    {
      Imagem : "../assets/AO.png",
      Desc : "Escape do monstro azul",
      Titulo: "Ao Oni"
    }, 
    {
      Imagem : "../assets/SN.jpg",
      Desc : "Sobreviva no oceano",
      Titulo: "Subnautica"
    }, 
    {
      Imagem : "../assets/SLE.jpg",
      Desc : "Colete as 4 páginas",
      Titulo: "Slender"
    }, 
    {
      Imagem : "../assets/DU.jpg",
      Desc : "Escape do espaço",
      Titulo: "Duskers"
    }, 
    {
      Imagem : "../assets/PH.jpg",
      Desc : "Exorcise espiritos",
      Titulo: "Phasmophobia"
    }, 
    {
      Imagem : "../assets/CPA.jpg",
      Desc : "Escape da escola",
      Titulo: "Corpse Party"
    }, 
    {
      Imagem : "../assets/WH.jpg",
      Desc : "Escape da bruxa",
      Titulo: "The Witch's House"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
