import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule} from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule],
})
export class MaterialModule { }