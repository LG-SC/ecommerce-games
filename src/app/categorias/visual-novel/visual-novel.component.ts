import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-novel',
  templateUrl: './visual-novel.component.html',
  styleUrls: ['./visual-novel.component.css']
})
export class VisualNovelComponent implements OnInit {

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
