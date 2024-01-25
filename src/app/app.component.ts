import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DontpressComponent } from './dontpress/dontpress.component';
import { SomeonetappedComponent } from './someonetapped/someonetapped.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // We have to import all new modules here, do the Don't press together, then have them do Someone tapped as a challenge.
  imports: [RouterOutlet, DontpressComponent, SomeonetappedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Counter';
  tapCounter = 0
  onTap() {
    this.tapCounter++;
  }
}
