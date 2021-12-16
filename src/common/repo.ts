// import { IBoard } from '../resources/boards/types';
// import { IUser } from '../resources/users/types';

// type Item = IBoard | IUser | null;

type Item = {
  id: string,
}

class Repo<ItemType extends Item> {
  repo: {
    [id: string]: ItemType | null;
  }

    constructor() {
      this.repo = {};
    }
  
    addItem(item: ItemType): ItemType | null {
      this.repo[item.id] = item;
      return this.repo[item.id];
    }
  
    getAllItems(): (ItemType | null)[]{
      return Object.values(this.repo);
    }
  
    getItem(id: string): ItemType | null {
      return this.repo[id];
    }
  
    updateItem(item: ItemType): ItemType | null {
      if (this.repo[item.id] === null) {
          throw new Error (`Record with id ${item.id} where removed`);
      }
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

    getItemsByFieldValue(field: keyof ItemType, value: string | null) {
      return Object.values(this.repo).filter(item => {
        if (item) {
          return item[field] === value as unknown;
        }
        return false;
      });
    }
};

export { Repo, Item };
