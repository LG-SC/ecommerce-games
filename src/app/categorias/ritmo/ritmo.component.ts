import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ritmo',
  templateUrl: './ritmo.component.html',
  styleUrls: ['./ritmo.component.css']
})
export class RitmoComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/COND.png",
      Desc : "Roguelike com ritmo",
      Titulo: "Crypt of Necrodancer"
    }, 
    {
      Imagem : "../assets/JD.jpg",
      Desc : "Dance com a musica",
      Titulo: "Just Dance 2022"
    }, 
    {
      Imagem : "../assets/RD.jpg",
      Desc : "Salve pacientes em ritmo",
      Titulo: "Rythm Doctor"
    }, 
    {
      Imagem : "../assets/NB.jpg",
      Desc : "Atravese os obstáculos",
      Titulo: "Neon Beats"
    }, 
    {
      Imagem : "../assets/BH.jpg",
      Desc : "Sobreviva com a musica",
      Titulo: "Beat Hazard"
    }, 
    {
      Imagem : "../assets/EH.jpg",
      Desc : "Aventura musical surreal",
      Titulo: "Everhood"
    }, 
    {
      Imagem : "../assets/BS.jpg",
      Desc : "Siga o ritmo em VR",
      Titulo: "Beat Saber"
    }, 
    {
      Imagem : "../assets/BB.jpg",
      Desc : "Ataque ao ritmo",
      Titulo: "Beat Blast"
    }, 
    {
      Imagem : "../assets/SL.jpg",
      Desc : "Bullet hell com ritmo",
      Titulo: "Super Ledgehop DL"
    }, 
    {
      Imagem : "../assets/PD.jpg",
      Desc : "Dance com Vocaloids",
      Titulo: "Project Diva"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
