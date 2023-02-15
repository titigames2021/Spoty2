import { TrajetasComponent } from './trajetas/trajetas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { CategoriasbComponent } from './categoriasb/categoriasb.component';
import { FotoComponent } from './foto/foto.component';
import { BuscarComponent } from './buscar/buscar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TrajetasComponent,ListasComponent,CategoriasbComponent,FotoComponent,BuscarComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [TrajetasComponent,ListasComponent,CategoriasbComponent,FotoComponent,BuscarComponent]
})
export class ComponentesModule { }
