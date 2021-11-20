import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item/card-item.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import { CardSearchComponent } from './card-search/card-search.component'; 



@NgModule({
  declarations: [
    CardItemComponent,
    CardModalComponent,
    CardSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
