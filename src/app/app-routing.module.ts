import { Component, createPlatformFactory, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoComponent } from './categorias/acao/acao.component';
import { FPSComponent } from './categorias/fps/fps.component';
import { LutaComponent } from './categorias/luta/luta.component';
import { MOBAComponent } from './categorias/moba/moba.component';
import { PlaformerComponent } from './categorias/plaformer/plaformer.component';
import { PuzzleComponent } from './categorias/puzzle/puzzle.component';
import { RitmoComponent } from './categorias/ritmo/ritmo.component';
import { RPGComponent } from './categorias/rpg/rpg.component';
import { TerrorComponent } from './categorias/terror/terror.component';
import { VisualNovelComponent } from './categorias/visual-novel/visual-novel.component';


const routes: Routes = [
  {path: "categorias/acao", component:AcaoComponent},
  {path: "categorias/fps", component:FPSComponent},
  {path: "categorias/luta", component:LutaComponent},
  {path: "categorias/moba", component:MOBAComponent},
  {path: "categorias/platformer", component:PlaformerComponent},
  {path: "categorias/puzzle", component:PuzzleComponent},
  {path: "categorias/ritmo", component:RitmoComponent},
  {path: "categorias/rpg", component:RPGComponent},
  {path: "categorias/terror", component:TerrorComponent},
  {path: "categorias/visual-novel", component:VisualNovelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
