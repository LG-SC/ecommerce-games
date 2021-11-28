import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luta',
  templateUrl: './luta.component.html',
  styleUrls: ['./luta.component.css']
})
export class LutaComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/SG.png",
      Desc : "Fighter inspirado em MvC2",
      Titulo: "Skullgirls"
    }, 
    {
      Imagem : "../assets/DBZ.jpg",
      Desc : "Fast-paced luta de equipes",
      Titulo: "Dragonball Fighter Z"
    }, 
    {
      Imagem : "../assets/GGS.webp",
      Desc : "Jogo mais recente à franquia",
      Titulo: "Guilty Gear Strive"
    }, 
    {
      Imagem : "../assets/MBAACC.jpg",
      Desc : "Classico",
      Titulo: "Melty Blood AACC"
    }, 
    {
      Imagem : "../assets/MBTL.jpg",
      Desc : "Sucessor ao classico",
      Titulo: "Melty Blood TL"
    }, 
    {
      Imagem : "../assets/TFH.jpg",
      Desc : "1x1 com animais misticos",
      Titulo: "Them Fighting Herds"
    }, 
    {
      Imagem : "../assets/SFV.jpg",
      Desc : "5° Jogo principal da franquia",
      Titulo: "Street Fighter V"
    }, 
    {
      Imagem : "../assets/BBTAG.jpg",
      Desc : "Jogo crossover da ArcSys",
      Titulo: "Blazblue Tag Battle"
    }, 
    {
      Imagem : "../assets/SMS.jpg",
      Desc : "Jogo mais recente à franquia",
      Titulo: "Smash Ultimate"
    }, 
    {
      Imagem : "../assets/MS.jpg",
      Desc : "Bullet Hell com magos",
      Titulo: "Maiden & Spell"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
