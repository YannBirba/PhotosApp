import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from 'src/models/event.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  public imagePath = environment.API_IMAGES_FILE_PATH;

  @Input() events: ReadonlyArray<Event | null> = [];
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Event>();

  constructor() {}

  trackByMethod(index: number, el: any): number {
    return el.id;
  }

  onDownload(imageId: number | undefined) {
    if (imageId) {
      window.open(environment.API_IMAGES_DOWNLOAD_PATH + imageId);
    }
  }
}
