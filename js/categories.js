const categories = [
  {
    category: "Comedy",
  },
  {
    category: "Drama",
  },
  {
    category: "Thriller",
  },
  {
    category: "Horror",
  },
  {
    category: "Romance",
  },
];

const movieCard = () => {
  return `<div class="col text-center mb-3 mb-lg-0 px-1">
  <img class="img-fluid rounded" src=${movies.imgURL} />
</div>`;
};

const movieCategory = () => {
  let mc = document.createElement("div");
  mc.classList.add(
    "row",
    "no-gutters",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "mb-4"
  );
  return mc;
};

const createCategory = (categories, index) => {
  let main = document.querySelector("main");
  let category = document.createElement("div");
  category.id = `category${index}`;
  let title = document.createElement("h3");
  title.classList.add("mt-4", "text-white");
  title.innerText = `${categories.category}`;

  let carouselSlide = document.createElement("div");
  carouselSlide.id = `categoryControl${index}`;
  carouselSlide.classList.add("carousel", "slide", "m-0", "p-0");
  carouselSlide.setAttribute("data-ride", "carousel");

  category.appendChild(title);
  main.appendChild(category);
  main.appendChild(carouselSlide);
};

categories.map((category, index) => {
  console.log(category, index);
  createCategory(category, index);
});
