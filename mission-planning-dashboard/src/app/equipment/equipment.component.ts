import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment = ['socket wrench', 'blowtorch', 'electric eel', 'charger for electric eel', 'commemorative bicentennial plate'];
  constructor() { }

  ngOnInit() {
  }

}
