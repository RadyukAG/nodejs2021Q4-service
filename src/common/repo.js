class Repo {
    constructor() {
      this.repo = {};
    }
  
    addItem(item) {
      this.repo[item.id] = item;
      return this.repo[item.id];
    }
  
    getAllItems() {
      return Object.values(this.repo);
    }
  
    getItem(id) {
      return this.repo[id];
    }
  
    updateItem(item) {
      this.repo[item.id] = {
        ...this.repo[item.id],
        ...item,
      }
      return this.repo[item.id];
    }
  
    deleteItem(id) {
      if (this.repo[id]) {
        this.repo[id] = undefined;
        return true;
      }
      return false;
    }
};

module.exports = Repo;