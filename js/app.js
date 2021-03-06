import addItem from './add-todo.js';
import todoList from './todo-list.js';
import itemsApi from './todo-api.js'; 

const items = itemsApi.getAll(); 

todoList.init(items, function(item){
    itemsApi.remove(item);
});

addItem.init(function(item) {
    itemsApi.add(item); 
    
    todoList.add(item); 

}); 