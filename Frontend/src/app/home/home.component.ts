import { Component, OnInit } from '@angular/core';
import { ThingFacade } from './thing-facade.service';
import { BehaviorSubject } from 'rxjs';
import { Thing } from './thing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  things$: BehaviorSubject<Thing[]>;
  constructor(private thingFacade: ThingFacade) {

    this.things$ = this.thingFacade.getThings$();
  }

  ngOnInit(): void {
    this.thingFacade.getThings();
  }

}
