export class DerekSet {
  turnListIntoSet(listItems){
    let memory = []
    console.log('list', listItems);
    for (let index = 0; index < listItems.length; index++) {
      console.log('index', index);
      let item = listItems[index]
      if (!memory.includes(item)){
        memory.push(item);
        console.log(memory)
      }
    }
    return memory;
  }
}
