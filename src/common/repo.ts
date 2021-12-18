type Item = {
  id: string,
}

class Repo<ItemType extends Item> {
  repo: {
    [id: string]: ItemType | undefined | null;
  }

    constructor() {
      this.repo = {};
    }
  
    addItem(item: ItemType): ItemType | undefined | null {
      this.repo[item.id] = item;
      return this.repo[item.id];
    }
  
    getAllItems(): (ItemType | undefined | null)[]{
      return Object.values(this.repo);
    }
  
    getItem(id: string): ItemType | undefined | null {
      return this.repo[id];
    }
  
    updateItem(id: string, item: ItemType | null): ItemType | undefined | null {
      if (!this.repo[id]) {
        throw new Error (`Record with id ${id} where removed`);
      }
      if (item === null) {
        this.repo[id] = item;
        return this.repo[id];
      }
      this.repo[id] = {
        ...this.repo[id],
        ...item,
      }
      return this.repo[id];
    }
  
    deleteItem(id: string) {
      if (this.repo[id]) {
        delete this.repo[id];
        return true;
      }
      return false;
    };

    checkItem (id: string): boolean {
      return this.repo.hasOwnProperty(id);
    };

    deleteAllItems(): void {
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
