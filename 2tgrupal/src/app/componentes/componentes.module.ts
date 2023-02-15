import { OtrosComponent } from './../otros/otros.component';
import { DatosComponent } from './../datos/datos.component';
import { ApartadoComponent } from './../apartado/apartado.component';
import { SpotyxComponent } from './../spotyx/spotyx.component';
import { Spoty9Component } from './../spoty9/spoty9.component';
import { Spoty8Component } from './../spoty8/spoty8.component';
import { Spoty7Component } from './../spoty7/spoty7.component';
import { Spoty6Component } from './../spoty6/spoty6.component';
import { Spoty5Component } from './../spoty5/spoty5.component';
import { Spoty4Component } from './../spoty4/spoty4.component';
import { Spoty3Component } from './../spoty3/spoty3.component';
import { Spoty2Component } from './../spoty2/spoty2.component';
import { Spoty1Component } from './../spoty1/spoty1.component';
import { TrajetasComponent } from './trajetas/trajetas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { CategoriasbComponent } from './categoriasb/categoriasb.component';
import { FotoComponent } from './foto/foto.component';
import { BuscarComponent } from './buscar/buscar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TrajetasComponent,ListasComponent,CategoriasbComponent,FotoComponent,BuscarComponent,Spoty1Component,Spoty2Component,Spoty3Component,Spoty4Component,Spoty5Component,Spoty6Component,Spoty7Component,Spoty8Component,Spoty9Component,SpotyxComponent,ApartadoComponent,DatosComponent,OtrosComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [TrajetasComponent,ListasComponent,CategoriasbComponent,FotoComponent,BuscarComponent,Spoty1Component,Spoty2Component,Spoty3Component,Spoty4Component,Spoty5Component,Spoty6Component,Spoty7Component,Spoty8Component,Spoty9Component,SpotyxComponent,ApartadoComponent,DatosComponent,OtrosComponent]
})
export class ComponentesModule { }
