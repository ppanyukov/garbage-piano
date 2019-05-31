import { Component, OnInit } from '@angular/core';
import { Rando } from '../randomize';


const data = {
  keys: [
    'C', 'Db/C#', 'D', 'Eb', 'E', 'F', 'F#/Gb', 'G', 'Ab/G#', 'A', 'B', 'Bb',
  ] as ReadonlyArray<string>,

  tonality: [
    'major',
    'harmoinic minor',
    'melodic minor',
  ] as ReadonlyArray<string>,

  hands: [
    'HT',
    'LH',
    'RH',
  ] as ReadonlyArray<string>,
};


export enum Progress {
  NotStarted = 1,
  InProgress = 2,
  Finished = 3,
}

class State {
  readonly items: ReadonlyArray<ReadonlyArray<any>>;
  readonly totalCount: number;

  readonly progress: Progress = Progress.NotStarted;

  readonly currentItem: ReadonlyArray<any> = [];
  readonly currentItemNumber = 0;

  constructor(items: ReadonlyArray<ReadonlyArray<any>>) {
    this.items = items;
    this.totalCount = items.length;
  }
}


@Component({
  selector: 'app-random-keys',
  templateUrl: './random-keys.component.html',
  styleUrls: ['./random-keys.component.scss']
})
export class RandomKeysComponent implements OnInit {
  constructor() {
  }

  public Progress = Progress;
  public state: State;

  ngOnInit() {
    this.reshuffle();
    this.start();
  }

  reshuffle(): State {
    const dimensions = [
      data.keys,
      data.tonality,
      data.hands,
    ];

    const items = Rando.permuteDimensions(dimensions);
    Rando.shuffleInplace(items);

    const nextState = new State(items);
    this.state = nextState;


    return nextState;
  }

  restart(): State {
    const oldState = this.state;
    this.state = new State(oldState.items);
    return this.start();
  }

  start(): State {
    const oldState = this.state;

    if (oldState.progress === Progress.InProgress) {
      return oldState;
    }

    const nextState = Object.assign(oldState, {
      progress: Progress.InProgress,
    });

    this.state = nextState;


    return this.next();
  }

  next(): State {
    const oldState = this.state;

    const nextNumber = oldState.currentItemNumber + 1;


    if (nextNumber > oldState.items.length) {
      return this.finish();
    }

    const nextItem = oldState.items[nextNumber - 1];
    const nextState = Object.assign(oldState, {
        currentItemNumber: nextNumber,
        currentItem: nextItem,
      });


    this.state = nextState;
    return nextState;
  }

  finish(): State {
    const oldState = this.state;

    const nextState = Object.assign(oldState, {
      progress: Progress.Finished,
      });

    this.state = nextState;
    return nextState;
  }
}


