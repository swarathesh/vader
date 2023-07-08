import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  word:String = 'vader';

  allow = true;
  onCLickEvent(event: Event) {
    this.word= (<HTMLInputElement>event.target).value;
  }
}
