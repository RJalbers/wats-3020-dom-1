document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('submit', (event) => {
    event.preventDefault();

    
    let itemInput = document.querySelector("input[name= 'item-input']");
    let itemValue = itemInput.value;
    
    //test to be sure that user entered a value
    if (itemValue.length !== 0) {
      //create new item
      //TODO create a list item with a checkbox and a label containing the user input string
      let newItemEl = document.createElement('li');
      let newLabel = document.createElement('label');
      let newCheckBox = document.createElement('input');

      newCheckBox.setAttribute('type', 'checkbox');
      newItemEl.appendChild(newCheckBox);
      newLabel.textContent = itemValue;
      newItemEl.appendChild(newLabel);
    
      //get a reference to list and append list item
      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);
      //clear the user input
      itemInput.value = '';

   
      newCheckBox.addEventListener('click', function (event) {
        let textItem = this.nextSibling.textContent;
        let doneItem = document.createElement("li")
        doneItem.textContent = textItem;
        document.getElementById("done-list").appendChild(doneItem);
        this.parentElement.remove();
        // if (this.nextSibling.style.textDecoration == "line-through") {
        //   this.nextSibling.style.textDecoration = '';
       
        // } else {
        //   this.nextSibling.style.textDecoration = 'line-through';
  
        // }
      });

    }
  }) // form submit
}) // document ready
