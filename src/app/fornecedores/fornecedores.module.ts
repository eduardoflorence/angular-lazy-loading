import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresComponent } from './fornecedores.component';

@NgModule({
  declarations: [FornecedoresComponent],
  imports: [
    CommonModule,
    FornecedoresRoutingModule
  ]
})
export class FornecedoresModule { }
