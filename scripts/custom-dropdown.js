// document.querySelectorAll('.js-option').forEach().addEventListener('click', ()=>{

// });

function renderPage(){

  const itemList=[
    { itemName: 'First Item',
      id: 1
    },
    { itemName: 'Second Item',
      id: 2
    },
    { itemName: 'Third Item',
      id: 3
    },
    { itemName: 'Fourth Item',
      id: 4
    },
    { itemName: 'Fifth Item',
      id: 5
    }
  ];


  function renderListContainer(){
    let optionsListHTML='';
    let listContainerHTML='';
    const currentItemName=document.querySelector('.js-option-selected-bar-value').innerHTML;
    itemList.forEach((item)=>{
      optionsListHTML+=`
        <li class="js-option" data-item-name="${item.itemName}" data-item-id="${item.id}">
          <div>${item.itemName}</div>
          <div class="js-selected-sign js-selected-sign-${item.id}">${currentItemName===item.itemName?'Y':''}</div>
        </li>
      `;
    });
    listContainerHTML=`
      <ul class="options-list js-options-list">
        ${optionsListHTML}
      </ul>
    `;
    document.querySelector('.js-list-container').innerHTML=listContainerHTML;
  }

  function clearAllSelectedSign(){
    document.querySelectorAll('.js-selected-sign').forEach((sign)=>{
      sign.innerHTML='';
    });
  }

  document.querySelector('.dropdown').addEventListener('click', function dropdownClickEvent() {
    console.log('dropdown click');
    let dropdownIcon=document.querySelector('.dropdown').innerText;
    if(dropdownIcon==='v'){
      document.querySelector('.dropdown').innerText='^';
      renderListContainer();
    }
    if(dropdownIcon==='^'){
      document.querySelector('.dropdown').innerText='v';
      document.querySelector('.js-list-container').innerHTML='';
    }
    document.querySelector('.dropdown').removeEventListener('click', dropdownClickEvent);
    renderPage();
  })

  document.querySelectorAll('.js-option').forEach((item)=>{
    item.addEventListener('click', ()=>{
      const {itemName, itemId}=item.dataset;
      clearAllSelectedSign();
      document.querySelector('.js-option-selected-bar-value').innerHTML=itemName;
      document.querySelector(`.js-selected-sign-${itemId}`).innerHTML='Y';
      
    });
  });

}
renderPage();