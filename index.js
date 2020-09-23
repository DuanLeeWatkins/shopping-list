//  This function adds what ever is typed into the text box to the shopping list
// once you click the add item button.
function addItem() {
  $("form").submit((e) => {
    e.preventDefault();
    let item = $("#shopping-list-entry").val();
    // This if statement makes sure that empty boxes are not added to the list.
    if (item) {
      $("#shopping-list-entry").val("");
      //   This creates the shopping item with the check and delete buttons.
      html = `
    
        <li>
          <span class="shopping-item">${item}</span>
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
      // This jquery object allows the new item to be added to the page.
      $(".shopping-list").append(html);
    }
  });
}

// This function allows the item to be checked/unchecked when you
// click the check button.
function checkItem() {
  $("body").on("click", ".shopping-item-toggle", function (e) {
    $(this)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
}
// This function allows the item to be deleted from the list.
function deleteItem() {
  $("body").on("click", ".shopping-item-delete", function (e) {
    $(this).closest("li").remove();
  });
}
// These jquery objects allow the functions to change the page.
$(addItem(), checkItem(), deleteItem());
