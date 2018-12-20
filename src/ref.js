export class DerekSet {
  turnListIntoSet(listItems) {
    // takes list with duplicates and returns new list without duplicates
    let memory = []
    for(let indexInTheList = 0; indexInTheList < listItems.length; indexInTheList += 1) {
      let item = listItems[indexInTheList];

      if (!memory.includes(item)) {
        memory.push(item)
      }
    }
    return memory;
  }

  doesListContainDuplicates(list){
    let memory = []
    for(let indexInTheList = 0; indexInTheList < list.length; indexInTheList += 1) {
      let item = list[indexInTheList];

      if (memory.includes(item)) {
        return true;
      } else {
        memory.push(item)
      }
    }
    return false;
  }

}


