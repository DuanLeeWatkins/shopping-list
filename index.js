

function addItem() {
    $("#js-shopping-list-form").submit((event) => {
        event.preventDefault();
        const userTextElement = $(this).find("#shopping-list-entry");
        $("li").html(addItem());
    });

  let htmlFrame = "";

  
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

$(addItem())