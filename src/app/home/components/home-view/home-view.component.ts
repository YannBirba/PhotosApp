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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {
  public events$ : Observable<readonly Event[]> = this.store.select(selectEvents);
  public eventForm: FormGroup;

  constructor(private store: Store<{ event: Event[] }>, private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      id: [0, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      start_date: [new Date(), [Validators.required]],
      end_date: [new Date()],
      location: [''],
      year: [0, [Validators.required]],
    });
  }

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
    this.eventForm.patchValue(event);
  }

  onSubmit(): void {
    const event: Event = this.eventForm.value;
    this.store.dispatch(eventUpdate({ event }));
  }
}
