import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Thing } from '../shared/thing';
import { ThingFacade } from '../shared/thing-facade.service';

@Component({
  selector: 'app-add-thing',
  templateUrl: './add-thing.component.html',
  styleUrls: ['./add-thing.component.css']
})
export class AddThingComponent implements OnInit {
  val: Thing;
  newThingFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private thingfacade: ThingFacade) {

  }

  ngOnInit(): void {
    this.newThingFormGroup = this.formBuilder.group({
      title: '',
      description: '',
      price: '',
      imageUrl: ''
    });
  }

  submit() {
    const val: Thing = this.newThingFormGroup.value as Thing;
    console.log(val);
    this.thingfacade.addThing(val);
  }

}
