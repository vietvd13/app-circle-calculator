import { Component } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class CircleCalculatorComponent {
  radius:number = 0;

  isShow:boolean = false;

  perimeter:any = 0;
  area:any = 0;

  perimeter_auto:any = 0;
  area_auto:any = 0;

  handleCal() :void {
    this.isShow = true;

    this.perimeter = this.handleCalPerimeter(this.radius);
    this.area = this.handleCalArea(this.radius);
  }

  handleCalPerimeter(radius: number) :any {
    return (2 * Math.PI * radius).toFixed(2);
  };

  handleCalArea(radius: number) :any {
    return (Math.pow(radius, 2) * Math.PI).toFixed(2);
  };

  handleAutoCal() :void {
    this.perimeter_auto = this.handleCalPerimeter(this.radius);
    this.area_auto = this.handleCalArea(this.radius);
  };
};
