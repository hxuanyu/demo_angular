import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo_angular';

  public print() {
    console.log("focus out happened, current focused element is");
    const elem = document.activeElement as HTMLElement;
    console.log(elem);
  }
}
