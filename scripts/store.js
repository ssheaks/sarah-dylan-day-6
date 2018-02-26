'use strict';

/* global cuid, Item */

// eslint-disable-next-line no-unused-vars
const store = (function() {
  const items = 
     [
       { id: cuid(), name: 'apples', checked: false },
       { id: cuid(), name: 'oranges', checked: false },
       { id: cuid(), name: 'milk', checked: true },
       { id: cuid(), name: 'bread', checked: false }
     ];

  let hideCheckedItems = false;
  let searchTerm = '';
  const findById = function(id) {
    return items.find(item => item.id ===id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.unshift(Item.create(name));
    } catch(e) {
      console.log(`Cannot add item ${e.message}`);
    }
  };

  const findAndToggleChecked = function(id) {
    let item = this.findById(id);
    item.checked = !item.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch(e) {
      console.log(`Cannot update name ${e.message}`);
    }
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(val) {
    this.searchTerm = val;
  };

  return {
    items, 
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
  
}());
