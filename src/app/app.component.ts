import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String = 'vader';
  choice:String = 'recipe';

  onSelect(feature: string) {
    this.choice = feature;
  }

}
