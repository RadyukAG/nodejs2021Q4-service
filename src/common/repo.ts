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

  /**
   * Save new item in repo
   * 
   * @param item - item, that will be saved
   * @returns saved item
   */
    addItem(item: ItemType): ItemType | undefined {
      this.repo[item.id] = item;
      return this.repo[item.id];
    }

  /**
   * Get all items from repo
   * 
   * @returns array of items
   */
    getAllItems(): (ItemType | undefined)[]{
      return Object.values(this.repo);
    }

  /**
   * Get item from repo by its id
   * 
   * @param id - string id of an item
   * @returns - item from repo
   */
    getItem(id: string): ItemType | undefined {
      return this.repo[id];
    }

  /**
   * Change fields of saved item with input
   * 
   * @param id - id of an item
   * @param item - new version of an item
   * @returns - updated item
   */
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

  /**
   * Delete item from repo
   * 
   * @param id - id of an item
   * @returns true id item was removed. False if doesn't exist.
   */
    deleteItem(id: string): boolean {
      if (this.repo[id]) {
        delete this.repo[id];
        return true;
      }
      return false;
    };

  /**
   * Checks if repo has item
   * 
   * @param id string id of an item
   * @returns true if item exists or false
   */
    checkItem (id: string): boolean {
      return this.repo.hasOwnProperty(id);
    };

    /**
     * Clean the repo, remove all items from it
     */
    deleteAllItems(): void {
      this.repo = {};
    }

    /**
     * Find all items have specific field with specific value
     * 
     * @param field key of item
     * @param value value of field
     * @returns array of items
     */
    getItemsByFieldValue(field: keyof ItemType, value: string | null): (ItemType | undefined)[] {
      return Object.values(this.repo).filter(item => {
        if (item) {
          return item[field] === value as unknown;
        }
        return false;
      });
    }
};

export { Repo, Item };
