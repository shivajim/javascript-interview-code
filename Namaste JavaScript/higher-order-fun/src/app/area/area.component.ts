import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  radius = [2, 5, 3];
  constructor() { }

  ngOnInit(): void {

    Array.prototype.calculate = function(array: Array<number>) {
      const result = [];
      for(let i = 0; i< array.length; i++){
        result.push(array[i]);
      }
    }
  }

}
