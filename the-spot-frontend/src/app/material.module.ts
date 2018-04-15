import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule} from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule],
  exports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule],
})
export class MaterialModule { }
