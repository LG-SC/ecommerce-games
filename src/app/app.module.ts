import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaformerComponent } from './categorias/plaformer/plaformer.component';
import { RPGComponent } from './categorias/rpg/rpg.component';
import { LutaComponent } from './categorias/luta/luta.component';
import { AcaoComponent } from './categorias/acao/acao.component';
import { FPSComponent } from './categorias/fps/fps.component';
import { MOBAComponent } from './categorias/moba/moba.component';
import { TerrorComponent } from './categorias/terror/terror.component';
import { PuzzleComponent } from './categorias/puzzle/puzzle.component';
import { VisualNovelComponent } from './categorias/visual-novel/visual-novel.component';
import { RitmoComponent } from './categorias/ritmo/ritmo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaformerComponent,
    RPGComponent,
    LutaComponent,
    AcaoComponent,
    FPSComponent,
    MOBAComponent,
    TerrorComponent,
    PuzzleComponent,
    VisualNovelComponent,
    RitmoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
