import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule} from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSliderModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule],
})
export class MaterialModule { }
