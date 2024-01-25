import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dontpress',
  standalone: true,
  imports: [],
  templateUrl: './dontpress.component.html',
  styleUrl: './dontpress.component.css'
})
export class DontpressComponent {
  // This is to create a new Click listener for the parent component
  @Output() onClick = new EventEmitter()

  onTapOfButton() {
    //We have to emit the event to the parent
    this.onClick.emit()
  }

}
