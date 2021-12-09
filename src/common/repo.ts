import { IBoard } from '../resources/boards/types';

type Item = IBoard | null;

class Repo {
  repo: {
    [id: string]: IBoard | null ;
  }

    constructor() {
      this.repo = {};
    }
  
    addItem(item: IBoard) {
      this.repo[item.id] = item;
      return this.repo[item.id];
    }
  
    getAllItems() {
      return Object.values(this.repo);
    }
  
    getItem(id: string) {
      return this.repo[id];
    }
  
    updateItem(item: IBoard) {
      this.repo[item.id] = {
        ...this.repo[item.id],
        ...item,
      }
      return this.repo[item.id];
    }
  
    deleteItem(id: string) {
      if (this.repo[id]) {
        this.repo[id] = null;
        return true;
      }
      return false;
    };

    checkItem (id: string) {
      return !!this.repo[id];
    };

    deleteAllItems() {
      this.repo = {};
    }

    getItemsByFieldValue(field: keyof Item, value: string | null) {
      return Object.values(this.repo).filter(item => {
        if (item) {
          return item[field] === value as unknown;
        }
        return false;
      });
    }
};

export default Repo;
