import { Component, OnInit } from '@angular/core';
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
  selector: 'app-event-admin-view',
  templateUrl: './event-admin-view.component.html',
  styleUrls: ['./event-admin-view.component.scss']
})
export class EventAdminViewComponent implements OnInit {

  public events$: Observable<readonly Event[]>;
  public event$: Observable<Event>;

  public eventUpdateForm: FormGroup;
  public eventCreateForm: FormGroup;
  public eventGetOneForm: FormGroup;

  constructor(
    private store: Store<{ event: Event[] }>,
    private formBuilder: FormBuilder
  ) {

  this.events$ = new Observable<readonly Event[]>();
  this.event$ = new Observable<Event>();
  this.eventUpdateForm = this.formBuilder.group({
    id: [null],
    name: [
      null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
    ],
    description: [
      null,
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    ],
    start_date: [null, [Validators.required]],
    end_date: [null],
    location: ['', [Validators.required]],
    year: [null, [Validators.required]],
  });
  this.eventCreateForm = this.formBuilder.group({
    name: [
      null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
    ],
    description: [
      null,
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    ],
    start_date: [null, [Validators.required]],
    end_date: [null],
    location: ['', [Validators.required]],
    year: [null, [Validators.required]],
  });
  this.eventGetOneForm = this.formBuilder.group({
    id: [null],
  });
}

ngOnInit(): void {
  this.getAllEvent();
}

getAllEvent(refresh: boolean = false): void {
  if (refresh) {
    this.events$ = new Observable<readonly Event[]>();
    this.store.dispatch(eventGetAll({ clear: true }));
    this.store.dispatch(eventGetAll({ clear: false }));
    this.events$ = this.store.select(selectEvents);
  } else {
    this.events$ = new Observable<readonly Event[]>();
    this.store.dispatch(eventGetAll({ clear: false }));
    this.events$ = this.store.select(selectEvents);
  }
}

create(event: Event): void {
  this.store.dispatch(eventCreate({ event }));
}

onDelete(eventId: number): void {
  this.store.dispatch(eventDelete({ eventId }));
  this.eventUpdateForm.reset();
}

onUpdate(event: Event, dialog: any): void {
  this.eventUpdateForm.patchValue(event);
  this.openModal(dialog);
}

onSubmitCreate(): void {
  const event: Event = this.eventCreateForm.value;
  this.create(event);
  this.getAllEvent(true);
  this.getAllEvent();
}
onSubmitUpdate(): void {
  const event: Event = this.eventUpdateForm.value;
  this.store.dispatch(eventUpdate({ event }));
}
onCloning(): void {
  this.eventCreateForm.patchValue(this.eventUpdateForm.value);
}
onClear(): void {
  this.getAllEvent(true);
}
openModal(dialog: any): void {
  dialog.showModal();
}
closeModal(dialog: any): void {
  dialog.close();
}
}
