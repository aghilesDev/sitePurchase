import { Injectable } from '@angular/core';
import { Thing } from './thing';
import { ThingAPI } from './thing-api.service';
import { ThingState } from './thing-state.service';

@Injectable({
  providedIn: 'root'
})
export class ThingFacade {

  constructor(private thingApi: ThingAPI, private thingState: ThingState) { }

  getThings() {
    this.thingApi.getThings().subscribe(things => {
      this.thingState.setThings(things);
    }
    );
  }

  getThings$() {
    return this.thingState.getThings();
  }
  addThing(newThing) {
    this.thingApi.createThing(newThing).subscribe(
      (addedThing: Thing) => {
        this.thingState.addThing(newThing);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
