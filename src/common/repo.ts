type Item = {
  id: string,
}

class Repo<ItemType extends Item> {
  repo: {
    [id: string]: ItemType | undefined;
  }

/**
 * Create new object as a repo.
 */
    constructor() {
      this.repo = {};
    }
  
    addItem(item: ItemType): ItemType | undefined {
      this.repo[item.id] = item;
      return this.repo[item.id];
    }
  
    getAllItems(): (ItemType | undefined)[]{
      return Object.values(this.repo);
    }
  
    getItem(id: string): ItemType | undefined {
      return this.repo[id];
    }
  
    updateItem(id: string, item: ItemType): ItemType | undefined {
      if (!this.repo[id]) {
        throw new Error (`Record with id ${id} where removed`);
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
