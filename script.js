const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./m.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./m2.webp",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "ice cream shakes",
      category: "shakes",
      price: 6.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3oK3RQj8K81Slob34kmYShp_NrI1pzVIuzaejmGjSg&s",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Chhole puri",
      category: "breakfast",
      price: 20.99,
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/09/breakfast-recipes-fb.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Dosha",
      category: "lunch",
      price: 22.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpG8yPraEqJDxvsvjlTz3sDCxgxKPW57tJrR4B9nfgWKX2RT2pGCzsKDds1MSaEKBegQ&usqp=CAU",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Mango shakes",
      category: "shakes",
      price: 18.99,
      img: "https://tastyoven.com/wp-content/uploads/2022/06/mango-shake-image.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Egg bread",
      category: "breakfast",
      price: 8.99,
      img: "https://del.h-cdn.co/assets/17/03/1024x1024/square-1484951546-delish-loaded-breakfast-quesadilla-1.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Paneer curry",
      category: "lunch",
      price: 12.99,
      img: "https://theyummydelights.com/wp-content/uploads/2018/07/dhaba-style-paneer-masala-recipe.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "strawberry",
      category: "shakes",
      price: 16.99,
      img: "https://www.cspinet.org/sites/default/files/styles/700x530/public/2022-04/may22_bn_hero_700x530.jpg?h=61bc1599",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Briyani",
      category: "dinner",
      price: 22.99,
      img: "https://dww3ueizok6z0.cloudfront.net/food/banner/193-8e6f5c121411ff2b5a54143fa12a5d126973b2f0",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");

  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
    
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {

        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }