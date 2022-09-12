function loadContacts() {
  let contacts = document.createElement("div");
  contacts.classList.add("contacts");
  let copyRight = document.createElement("p");
  copyRight.textContent =
    "Photos by Photo: Matt Dinerstein - © 2022, FX Networks. All Rights Reserved.";

  function createContact(name, title, number, email, src) {
    let official = document.createElement("div");
    let img_wrapper = document.createElement("div");
    let info_wrapper = document.createElement("div");
    let img = new Image();
    let official_name = document.createElement("h3");
    let official_title = document.createElement("p");
    let official_number = document.createElement("p");
    let official_email = document.createElement("p");

    img.src = src;
    img_wrapper.classList.add("img-wrapper");
    img_wrapper.appendChild(img);

    official_name.textContent = name;
    official_title.textContent = title;
    official_number.textContent = number;
    official_email.textContent = email;

    info_wrapper.appendChild(official_name);
    info_wrapper.appendChild(official_title);
    info_wrapper.appendChild(official_number);
    info_wrapper.appendChild(official_email);

    official.appendChild(info_wrapper);
    official.appendChild(img_wrapper);

    return official;
  }

  contacts.appendChild(
    createContact(
      "Carmy",
      "Chef",
      "555-555-5554",
      "totallyRealEmail@notFake.com",
      "https://m.media-amazon.com/images/M/MV5BZWRjZmE1MmUtNDVmMi00MzdjLTkwOWQtMjhiOWQ5NTBkZjQ1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg"
    )
  );
  contacts.appendChild(
    createContact(
      "Richie",
      "Manager",
      "555-555-5555",
      "perfectlyRealEmail@notFake.com",
      "https://m.media-amazon.com/images/M/MV5BNjUzOTIyMWYtYzJlZC00NjlhLTkwNjktMTZkNDJkNjQ5YzVmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1280_.jpg"
    )
  );
  contacts.appendChild(
    createContact(
      "Sydney Adamu",
      "Waiter",
      "555-555-5556",
      "totallyRealEmail@notFake.com",
      "https://m.media-amazon.com/images/M/MV5BMjY4MjY2ZGMtZmY1ZS00ZTk0LWJmN2EtMWRhOWMxYjAzNmRmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg"
    )
  );
  contacts.appendChild(copyRight);

  return contacts;
}

export { loadContacts };
