import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectEvent, selectEvents } from 'src/shared/state/event/events.selector';
import { Store } from '@ngrx/store';
import {
  eventCreate,
  eventDelete,
  eventGet,
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
      location: [null],
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
      location: [null],
      year: [null, [Validators.required]],
    });
    this.eventGetOneForm = this.formBuilder.group({
      id: [null],
    });
  }

  ngOnInit() {
    this.getAllEvent();
  }

  getAllEvent() {
    this.events$ = new Observable<readonly Event[]>();
    this.store.dispatch(eventGetAll());
    this.events$ = this.store.select(selectEvents);
  }

  create(event: Event) {
    this.store.dispatch(eventCreate({ event }));
    this.getAllEvent();
  }

  onDelete(eventId: number) {
    this.store.dispatch(eventDelete({ eventId }));
  }

  onUpdate(event: Event) {
    this.eventUpdateForm.patchValue(event);
  }

  onSubmitCreate(): void {
    const event: Event = this.eventCreateForm.value;
    this.create(event);
    this.getAllEvent();
  }
  onSubmitUpdate(): void {
    const event: Event = this.eventUpdateForm.value;
    this.store.dispatch(eventUpdate({ event }));
  }
  onSubmitGetOne(): void {
    const eventId: number = this.eventUpdateForm.value.id;
    this.event$ = new Observable<Event>();
    this.store.dispatch(eventGet({ eventId }));
    this.event$ = this.store.select(selectEvent);
  }
}