import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class CircleCalculatorComponent {
  radius:number = 1;
  perimeter:any = 0;
  area:any = 0;
  isShow:boolean = false;

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
};
