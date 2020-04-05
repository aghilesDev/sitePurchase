import { Injectable } from '@angular/core';

import { Thing } from './thing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingState {
  private things$ = new BehaviorSubject<Thing[]>(null);
  private updating$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  setUpdating(newUpdating: boolean) {
    this.updating$.next(newUpdating);
  }

  getThings() {
    return this.things$;
  }

  setThings(things: Thing[]) {
    this.things$.next(things);
  }

  addThing(thing: Thing) {
    const currentThings = this.things$.value;
    this.things$.next([thing, ...currentThings]);
  }

  updateThing(updatedThing: Thing) {
    const currentThings = this.things$.value;
    const indexThing = currentThings.findIndex(thing => thing._id = updatedThing._id);
    currentThings[indexThing] = updatedThing;
    this.things$.next([...currentThings]);
  }

  deleteThing(deletedThing: Thing) {
    const currentThings = this.things$.value;
    this.things$.next(currentThings.filter(thing => thing !== deletedThing));
  }


}
