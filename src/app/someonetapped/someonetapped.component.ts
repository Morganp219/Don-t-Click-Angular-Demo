import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-someonetapped',
  standalone: true,
  imports: [],
  templateUrl: './someonetapped.component.html',
  styleUrl: './someonetapped.component.css'
})
export class SomeonetappedComponent {
  @Input() tapCount = 0

}
