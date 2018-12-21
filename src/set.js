export class DerekSet {
  turnListIntoSet(listItems){
    let memory = []
    // console.log('list', listItems);
    for (let index = 0; index < listItems.length; index++) {
      // console.log('index', index);
      let item = listItems[index]
      if (!memory.includes(item)){
        memory.push(item);
      }
    }
    return memory;
  }
  doesListContainDuplicates(list) {
    let memo = []
    for (let index = 0; index < list.length; index++) {
      let items = list[index];

      if (memo.includes(items)){
        return true;
      } else {
        memo.push(items);
      }

    }
    return false;
  }
}

