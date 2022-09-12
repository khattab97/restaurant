function loadHome() {
  let home = document.createElement("div");
  home.classList.add("home");

  function mainDish() {
    let dish = document.createElement("div");
    let title = document.createElement("h1");
    let img = new Image();
    let dishName = document.createElement("p");
    let description = document.createElement("p");

    dish.classList.add("dish");
    title.textContent = "Main Dish";
    img.src = "../src/images/mac.jpg";
    dishName.textContent = "Mac's Famous Mac 'n Cheese";
    description.textContent =
      "This is macaroni cheese American-style. Gooey," +
      " filling and served with a bacon salad," +
      " there’s no denying this is proper comfort food.";
    dish.appendChild(title);
    dish.appendChild(img);
    dish.appendChild(dishName);
    dish.appendChild(description);

    return dish;
  }

  function hours() {
    let days = document.createElement("div");
    let title = document.createElement("h3");
    let sunday = document.createElement("p");
    let monday = document.createElement("p");
    let tuesday = document.createElement("p");
    let wednesday = document.createElement("p");
    let thursday = document.createElement("p");
    let friday = document.createElement("p");
    let saturday = document.createElement("p");

    days.classList.add("days");
    title.textContent = "Hours";
    sunday.textContent = "Sunday: 8am - 8pm";
    monday.textContent = "Monday: 6am - 6pm";
    tuesday.textContent = "Tuesday: 6am - 6pm";
    wednesday.textContent = "Wednesday: 6am - 6pm";
    thursday.textContent = "Thursday: 6am - 10pm";
    friday.textContent = "Friday: 6am - 10pm";
    saturday.textContent = "Saturday: 8am - 10pm";

    days.appendChild(title);
    days.appendChild(sunday);
    days.appendChild(monday);
    days.appendChild(tuesday);
    days.appendChild(wednesday);
    days.appendChild(thursday);
    days.appendChild(friday);
    days.appendChild(saturday);

    return days;
  }

  function location() {
    let loc = document.createElement("div");
    let title = document.createElement("h3");
    let content = document.createElement("p");

    loc.classList.add("loc");
    title.textContent = "Location";
    content.textContent = "123 Forest Drive, Forestville, Maine";

    loc.appendChild(title);
    loc.appendChild(content);

    return loc;
  }

  home.appendChild(mainDish());
  home.appendChild(hours());
  home.appendChild(location());

  return home;
}

export { loadHome };
