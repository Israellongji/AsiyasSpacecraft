
                    // NAV LINK HIGHLIGHT
                    const currentLocation = window.location.href;
                    const menuItems = document.querySelectorAll('.nav-link');

                    menuItems.forEach(item => {
                      if (currentLocation.includes(item.getAttribute('href'))) {
                        item.classList.add('active');
                      }
                    });

let services = [
    {
      name: "Luxury Event Decor",
      price: "$2,000+",
      description: "Elegant and bespoke decor tailored to your theme."
    },
    {
      name: "Catering Services",
      price: "$1,500+",
      description: "Delicious, customizable menu options for any event."
    },
    {
      name: "Photography & Videography",
      price: "$1,800+",
      description: "Professional coverage with timeless editing."
    },
    {
      name: "Venue Selection",
      price: "$500+",
      description: "We help you find the perfect location for your event."
    },
    {
      name: "Bridal Styling",
      price: "$600+",
      description: "Hair, makeup, and gown coordination for the bride."
    },
    {
      name: "Entertainment Booking",
      price: "$1,200+",
      description: "Live bands, DJs, and performers to light up your night."
    }
  ];
  
  let button = document.getElementById("showServices");
  let list = document.getElementById("serviceList");
  
  button.addEventListener("click", function () {
    list.innerHTML = "";
  
    for (let i = 0; i < services.length; i++) {
      let item = document.createElement("li");
      item.className = "list-group-item text-start fade-in";
  
      item.innerHTML = `
        <h5>${services[i].name}</h5>
        <p class="mb-1">${services[i].description}</p>
        <strong>${services[i].price}</strong>
      `;
  
      list.appendChild(item);
  
      // Show class after short delay for animation
      setTimeout(() => {
        item.classList.add("show");
      }, i * 100); // stagger effect
    }
  });

  let isShowing = false;

button.addEventListener("click", function () {
  if (isShowing) {
    list.innerHTML = "";
    isShowing = false;
    button.textContent = "See Our Services";
  } else {
    list.innerHTML = "";
    for (let i = 0; i < services.length; i++) {
      let item = document.createElement("li");
      item.className = "list-group-item text-start fade-in";

      item.innerHTML = `
        <h5>${services[i].name}</h5>
        <p class="mb-1">${services[i].description}</p>
        <strong>${services[i].price}</strong>
      `;

      list.appendChild(item);

      setTimeout(() => {
        item.classList.add("show");
      }, i * 100);
    }

    isShowing = true;
    button.textContent = "Hide Services";
  }
});

let questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    let answer = this.nextElementSibling;
    answer.classList.toggle("d-none");
  });
});

