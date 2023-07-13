import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonModule,
  ],
  exports: [MatAutocompleteModule, MatBottomSheetModule, MatButtonModule],
})
export class MaterialModule {}
