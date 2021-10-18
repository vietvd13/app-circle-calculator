import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CircleCalculatorComponent } from './CircleCalculator.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [CircleCalculatorComponent],
  bootstrap: [CircleCalculatorComponent]
})
export class AppModule {

}
