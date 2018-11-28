import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  boxes:number[]=[];
  counter:number=0;

  OnAddbtnClick(){
    this.counter++;
    this.boxes.push(this.counter);
  }

  OnRemovebtnClick(){
    if(this.counter!=0)
    {
      this.counter--;
      this.boxes.pop();
    }
  }
}
 