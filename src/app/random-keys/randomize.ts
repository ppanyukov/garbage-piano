export class Rando {
  // shuffleCopy returns a copy of input array shuffled in random order.
  //
  // Performance: O(N).
  //
  // Uses Fisher–Yates shuffle, see:
  //  - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  //  - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  static shuffleCopy(inputArray: ReadonlyArray<any>): Array<any> {
    const a = Array.from(inputArray);
    Rando.shuffleInplace(a);
    return a;
  }

  // shuffleInplace shuffles input array in place.
  //
  // Performance: O(N).
  //
  // Uses Fisher–Yates shuffle, see:
  //  - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  //  - https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  static shuffleInplace(inputArray: Array<any>) {
    for (let i = inputArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const x = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = x;
    }
  }

  // shuffleCopy returns a copy of input array shuffled in random order.
  // Assume performance O(2N + log N).
  static shuffleCopy2(items: ReadonlyArray<any>): Array<any> {
    // add random weights to items, this is O(N)
    const randomItems = items.map(item => {
      return {
        item,
        weight: Math.random(),
      };
    });

    // sort by weight, assume this is O(log N)
    randomItems.sort((a, b) => a.weight < b.weight ? 1 : -1);

    // extract back the original values and return those
    const result = randomItems.map(item => item.item);

    // done
    return result as Array<any>;
  }

  // permuteDimensions permutes values across dimensions.
  //
  // Example:
  //
  // Given input like this:
  //
  //  const exampleInput = [
  //    ['C', 'D', 'E', 'F', 'G'],
  //    ['major', 'minor'],
  //    ['HT', 'RH', 'LH'],
  //   ];
  //
  // Returns this:
  //  const exampleOutput = [
  //    ['C', 'major', 'HT'],
  //    ['C', 'major', 'RH'],
  //    ['C', 'major', 'LH'],
  //    ['C', 'minor', 'HT'],
  //    ['C', 'minor', 'RH'],
  //    ['C', 'minor', 'LH'],
  //    // ...
  //    ['G', 'major', 'HT'],
  //    ['G', 'major', 'RH'],
  //    ['G', 'major', 'LH'],
  //    ['G', 'minor', 'HT'],
  //    ['G', 'minor', 'RH'],
  //    ['G', 'minor', 'LH'],
  //  ];
  static permuteDimensions(inputArray: ReadonlyArray<ReadonlyArray<any>>): Array<Array<any>> {
    // see docs for reduce:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
    const initialValue: Array<Array<any>> = [[]];

    const reduceFunc = (accumulator: Array<Array<any>>, currentValue: Array<any>) => {
      const reduceResult: Array<Array<any>> = [];
      for (const a of accumulator) {
        for (const b of currentValue) {
          const row = Array.from(a);
          row.push(b);
          reduceResult.push(row);
        }
      }

      return reduceResult;
    };

    // reduce produces readonly array here, so need to cast.
    const result: ReadonlyArray<ReadonlyArray<any>> = inputArray.reduce(reduceFunc, initialValue);
    return result as Array<Array<any>>;
  }
}

