import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RPGComponent implements OnInit {

  Jogos: any = [
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }, 
    {
      Imagem : "../assets/Celeste.png",
      Desc : "Also try: Estrogen",
      Titulo: "Celeste"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
