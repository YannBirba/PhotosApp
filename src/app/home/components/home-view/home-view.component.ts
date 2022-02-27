import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectEvents } from 'src/shared/state/event/events.selector';
import { Store } from '@ngrx/store';
import {
  eventCreate,
  eventDelete,
  eventGetAll,
  eventUpdate,
} from 'src/shared/state/event/events.actions';
import { Event } from 'src/models/event.model';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {

  public events$ : Observable<readonly Event[]> = this.store.select(selectEvents);

  constructor(private store: Store<{event: Event[]}>) {}

  ngOnInit() {
    this.store.dispatch(eventGetAll());
  }

  onAdd(event: Event) {
    this.store.dispatch(eventCreate({ event }));
  }

  onDelete(eventId: number) {
    this.store.dispatch(eventDelete({ eventId }));
  }

  onUpdate(event: Event) {
    this.store.dispatch(eventUpdate({ event }));
  }
}
