function loadMenu() {
  let menu = document.createElement("div");
  menu.classList.add("menu");
  let title = document.createElement("h1");
  title.textContent = "Menu";
  let grid = document.createElement("div");
  grid.classList.add("grid");

  function gridElement(title, desc) {
    let gridItem = document.createElement("div");
    let img = new Image();
    img.src = `../src/images/${title.replace(" ", "-").toLowerCase()}.jpg`;
    let container = document.createElement("div");
    let name = document.createElement("h3");
    let description = document.createElement("p");

    gridItem.classList.add("grid-item");
    container.classList.add("container");
    name.classList.add("name");
    name.textContent = title;
    description.classList.add("description");
    description.textContent = desc;

    container.appendChild(name);
    container.appendChild(description);
    gridItem.appendChild(img);
    gridItem.appendChild(container);

    return gridItem;
  }

  grid.appendChild(
    gridElement(
      "Cool Beef",
      "Level up your grilling game with fire-cooking expert Genevieve Taylor’s juicy"
    )
  );
  grid.appendChild(
    gridElement(
      "Yummy Beef",
      "Need a quick and easy steak dinner for 2? Slices of juicy rib-eye served on top of"
    )
  );
  grid.appendChild(
    gridElement(
      "Burger Beef",
      "Need a quick and easy steak dinner for 2? Slices of juicy rib-eye served on top of"
    )
  );
  grid.appendChild(
    gridElement(
      "Broc Beef",
      "This aromatic roast beef makes the perfect Easter or Sunday lunch served"
    )
  );
  grid.appendChild(
    gridElement(
      "Eat Me",
      "Marc Hardiman, head chef at London’s Galvin at Windows, shares his recipe for"
    )
  );
  grid.appendChild(
    gridElement(
      "Fried Beef",
      "Perfect with pasta or crusty bread, this rich beef cheek and cannellini bean"
    )
  );
  grid.appendChild(
    gridElement(
      "Nice Beef",
      "Why serve beef bourguignon with separate sides when you can top it with rich,"
    )
  );
  grid.appendChild(
    gridElement(
      "Steak",
      "Stick a batch of richly flavoured beef chilli in the slow cooker and this gloriously"
    )
  );
  grid.appendChild(
    gridElement(
      "Steak Beef",
      "Make the ultimate steak sarnie for one with our not-for-sharing recipe"
    )
  );
  grid.appendChild(
    gridElement(
      "Taco Beef",
      "For a delicious take on a classic Vietnamese banh mi, stuff demi baguette"
    )
  );
  grid.appendChild(
    gridElement(
      "Ugh Beef",
      "Our lighter take on roast beef, the joint nestled among juicy vegetables and"
    )
  );

  menu.appendChild(title);
  menu.appendChild(grid);

  return menu;
}

export { loadMenu };
