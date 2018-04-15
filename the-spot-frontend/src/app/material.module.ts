import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatSnackBarModule} from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatSnackBarModule],
  exports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatSnackBarModule],
})
export class MaterialModule { }