import { Component, OnInit } from '@angular/core';
import { ThingFacade } from '../shared/thing-facade.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
import { Thing } from '../shared/thing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  things$: BehaviorSubject<Thing[]>;
  constructor(private thingFacade: ThingFacade, private router: Router) {

    this.things$ = this.thingFacade.getThings$();
  }

  ngOnInit(): void {
    this.thingFacade.getThings();

  }

  onAddNewItem() {
    this.router.navigate(['newThing']);
  }

}
