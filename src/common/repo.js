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
        this.repo[id] = null;
        return true;
      }
      return false;
    };

    checkItem (id) {
      return !!this.repo[id];
    };

    deleteAllItems() {
      this.repo = {};
    }

    getItemsByFieldValue(field, value) {
      return Object.values(this.repo).filter(item => item[field] === value);
    }
};

module.exports = Repo;