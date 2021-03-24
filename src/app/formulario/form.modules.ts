import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      
      
    ],
    declarations: [FormularioComponent],
    exports: [FormularioComponent]
  })
  export class FormularioModule {}