import { Component, OnInit } from '@angular/core';
import { haloRanks, haloRanksOrdered } from '../haloCsr';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  haloRanks = haloRanks;
  haloRanksOrdered = haloRanksOrdered;

  constructor() { }

  ngOnInit() {
  }

}
