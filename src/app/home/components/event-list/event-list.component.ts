import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from 'src/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  @Input() events: ReadonlyArray<Event | null> = [];
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Event>();
  trackByMethod(index:number, el:any): number {
    return el.id;
}
}
