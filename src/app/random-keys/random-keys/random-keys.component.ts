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
    this.loadState();
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
    console.log('reshuffle state: ');
    console.log(nextState);

    return this.setState(nextState);
  }

  restart(): State {
    const oldState = this.state;
    let nextState = new State(oldState.items);
    nextState = this.setState(nextState);
    return this.start();
  }

  start(): State {
    const oldState = this.state;

    if (oldState.progress === Progress.InProgress) {
      return oldState;
    }

    let nextState = Object.assign(oldState, {
      progress: Progress.InProgress,
    });

    nextState = this.setState(nextState);
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


    return this.setState(nextState);
  }

  finish(): State {
    const oldState = this.state;

    const nextState = Object.assign(oldState, {
      progress: Progress.Finished,
      });

    return this.setState(nextState);
  }

  private setState(newState: State): State {
    this.state = newState;
    localStorage.setItem('RandomKeyComponent.state', JSON.stringify(newState));
    return newState;
  }

  private loadState(): State {
    try {
      const s = localStorage.getItem('RandomKeyComponent.state');
      if (!s || s === '') {
        return this.reshuffle();
      }

      const nextState = JSON.parse(s);
      console.log('Got state from storage');
      console.log(nextState);
      return this.setState(nextState);
    } catch {
      return this.reshuffle();
    }
  }
}


