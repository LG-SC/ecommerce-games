import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moba',
  templateUrl: './moba.component.html',
  styleUrls: ['./moba.component.css']
})
export class MOBAComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/LOL.jpg",
      Desc : "Rival à Dota2",
      Titulo: "League of Legends"
    }, 
    {
      Imagem : "../assets/DOTA2.jpg",
      Desc : "Rival à LOL",
      Titulo: "Dota 2"
    }, 
    {
      Imagem : "../assets/HOS.jpg",
      Desc : "MOBA da Blizzard",
      Titulo: "Heroes of the Storm"
    }, 
    {
      Imagem : "../assets/SMI.jpg",
      Desc : "MOBA com seres mitologicos",
      Titulo: "SMITE"
    }, 
    {
      Imagem : "../assets/VG.jpg",
      Desc : "Moba com graficos lindos",
      Titulo: "Vain Glory"
    }, 
    {
      Imagem : "../assets/AV.jpg",
      Desc : "Moba com crossplay mobile",
      Titulo: "Arena of Valor"
    }, 
    {
      Imagem : "../assets/AN.jpg",
      Desc : "Moba 2d, frenético",
      Titulo: "AwesomeNauts"
    }, 
    {
      Imagem : "../assets/DOTA1.jpg",
      Desc : "Precussor à DOTA 2",
      Titulo: "DOTA"
    }, 
    {
      Imagem : "../assets/DEM.png",
      Desc : "Gigantes.",
      Titulo: "Demigod"
    }, 
    {
      Imagem : "../assets/HN.jpg",
      Desc : "MOBA de gráficos incríveis",
      Titulo: "Heroes of Newerth"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
