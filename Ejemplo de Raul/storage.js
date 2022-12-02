class Storage {
  constructor(key) {
    this.key = key;
    this.createStorage();
  }

  createStorage() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }
  }

  parseStorage() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  saveStorage(storage) {
    localStorage.setItem(this.key, JSON.stringify(storage));
  }

  getNextId(storage) {
    if (storage.length === 0) {
      return 1;
    }
    const orderedStorage = storage.sort((a, b) => a - b);
    return orderedStorage[orderedStorage.length - 1].id + 1
  }

  // CRUD
  createItem(item) {
    const current = this.parseStorage();
    item.id = this.getNextId(current);
    current.push(item);
    this.saveStorage(current);
  }

  readItems() {
    return this.parseStorage();
  }

  updateItem(id, updateItem) {
    const current = this.parseStorage();
    const index = current.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) {
      current[index].firstName = updateItem.firstName;
      current[index].lastName = updateItem.lastName;
      this.saveStorage(current);
    }
  }

  deleteItem(id) {
    const current = this.parseStorage();
    const index = current.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) {
      current.splice(index, 1);
      this.saveStorage(current);
    }
  }
}
