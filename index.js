let appState = [
  { itemName: "almonds", isItemChecked: false },
  { itemName: "apples", isItemChecked: false },
  { itemName: "oranges", isItemChecked: false },
  { itemName: "milk", isItemChecked: false },
  { itemName: "bread", isItemChecked: false },
];

function renderList(data) {
  console.log("renderList is executing");

  let htmlFrame = "";

  for (let i = 0; i < appState.length; i++) {
    htmlFrame += `
        <li>
            <span class="shopping-item">${appState[i].itemName}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>
        `;
  }

  //   return htmlFrame;
  $(".shopping-list").html(htmlFrame);
}

renderList();
