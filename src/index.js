const REVERSE_COMPARATOR = (a, b) => a - b;

class Sorter {
    
  constructor() {
      this.sorterArray = [];
      this.compareFunction = REVERSE_COMPARATOR;
  }

  add(element) {
        this.sorterArray.push(element);
  }

  at(index) {
      return this.sorterArray[index];
  }

  get length() {
    return this.sorterArray.length;
  }

  toArray() {
    return this.sorterArray;
  }

  sort(indices) {
      indices.sort(REVERSE_COMPARATOR);
      var sortingValues = [];
      for (var i = 0; i < this.sorterArray.length; i++) {
        if (indices.includes(i)) {
            sortingValues.push(this.sorterArray[i]);
        }
      }
      
      sortingValues.sort(this.compareFunction);
      
      for (var i = 0; i < indices.length; i++) {
            this.sorterArray[indices[i]] = sortingValues[i];
      }
  }

  setComparator(compareFunction) {
      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
