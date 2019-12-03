import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  //this component and all the other components in this (recipe folder) will use the same instance of this service and on ngOnInt you set up a listener
  constructor() { }

  ngOnInit() {
    
  }

}
