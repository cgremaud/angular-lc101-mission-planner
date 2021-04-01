import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew = ['Al', 'Bob', "Dae'Sean", 'nugget', 'lucy'];



  constructor() { }

  ngOnInit() {
  }

}
