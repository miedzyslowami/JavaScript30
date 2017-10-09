document.addEventListener('DOMContentLoaded', function(event) {
//page loaded
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,//ES6 text:text;
    done:false
  }
  items.push(item);
  populateList(items,itemsList);
  localStorage.setItem('items',JSON.stringify(items));
  this.reset();//reset form!
}


function populateList(plates = [],platesList){
  platesList.innerHTML = plates.map((plate,idx)=>{
    return `
      <li>
        <input type='checkbox' data-index=${idx} id='items${idx}' ${plate.done ? 'checked' : ' '} />
        <label for='items${idx}'>${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  console.log(e.target);
  if (!e.target.matches('input')){
     return; // skip this unless it's an input
  }
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;//if true make false and if false make true
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}


addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items,itemsList);

  });
