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

  let carouselSlideContent = `<div class="carousel-inner m-0 p-0">
  <div class="carousel-item active">
    <div
      class="row no-gutters row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-4"
    >
      <div class="col mb-3 mb-lg-0 px-1">
        <div class="strive-card position-relative">
          <img class="img-fluid rounded w-100" src="movies/1-1.jpg" />
          <div class="infos-container">
            <div class="infos-content">
              <div class="d-flex align-items-center mb-3">
                <div class="play-btn gradient"></div>
                <h6 class="mb-0">Play S1 E2</h6>
                <span class="ml-auto plus">
                  <!-- <i class="fa fa-plus fa-lg" aria-hidden="true"></i> -->
                </span>
              </div>
              <h6>The Boys Season 2</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga inventore, itaque eveniet laborum iusto
                vitae dolorum eos odit fugiat accusamus, qui incidunt,
                commodi officiis aut nostrum nam illo magnam sint.
              </p>
              <div class="movie-footer">
                <span class="mr-2">2020</span>
                <i class="fa fa-address-card fa-lg mr-2"></i>
                <i class="fa fa-calendar-check-o fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-3 mb-lg-0 px-1">
        <div class="strive-card position-relative">
          <img class="img-fluid rounded w-100" src="movies/1-2.jpg" />
          <div class="infos-container">
            <div class="infos-content">
              <div class="d-flex align-items-center mb-3">
                <div class="play-btn gradient"></div>
                <h6 class="mb-0">Play S1 E2</h6>
                <span class="ml-auto plus">

                </span>
              </div>
              <h6>The Boys Season 2</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga inventore, itaque eveniet laborum iusto
                vitae dolorum eos odit fugiat accusamus, qui incidunt,
                commodi officiis aut nostrum nam illo magnam sint.
              </p>
              <div class="movie-footer">
                <span class="mr-2">2020</span>
                <i class="fa fa-address-card fa-lg mr-2"></i>
                <i class="fa fa-calendar-check-o fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-3 mb-lg-0 px-1">
        <div class="strive-card position-relative">
          <img class="img-fluid rounded w-100" src="movies/1-3.jpg" />
          <div class="infos-container">
            <div class="infos-content">
              <div class="d-flex align-items-center mb-3">
                <div class="play-btn gradient"></div>
                <h6 class="mb-0">Play S1 E2</h6>
                <span class="ml-auto plus">
                  <!-- <i class="fa fa-plus fa-lg" aria-hidden="true"></i> -->
                </span>
              </div>
              <h6>The Boys Season 2</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga inventore, itaque eveniet laborum iusto
                vitae dolorum eos odit fugiat accusamus, qui incidunt,
                commodi officiis aut nostrum nam illo magnam sint.
              </p>
              <div class="movie-footer">
                <span class="mr-2">2020</span>
                <i class="fa fa-address-card fa-lg mr-2"></i>
                <i class="fa fa-calendar-check-o fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-3 mb-lg-0 px-1">
        <div class="strive-card position-relative">
          <img class="img-fluid rounded w-100" src="movies/1-4.jpg" />
          <div class="infos-container">
            <div class="infos-content">
              <div class="d-flex align-items-center mb-3">
                <div class="play-btn gradient"></div>
                <h6 class="mb-0">Play S1 E2</h6>
                <span class="ml-auto plus">
                  <!-- <i class="fa fa-plus fa-lg" aria-hidden="true"></i> -->
                </span>
              </div>
              <h6>The Boys Season 2</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga inventore, itaque eveniet laborum iusto
                vitae dolorum eos odit fugiat accusamus, qui incidunt,
                commodi officiis aut nostrum nam illo magnam sint.
              </p>
              <div class="movie-footer">
                <span class="mr-2">2020</span>
                <i class="fa fa-address-card fa-lg mr-2"></i>
                <i class="fa fa-calendar-check-o fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <div
      class="row no-gutters row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-4"
    >
      <div class="col mb-3 mb-lg-0 px-1">
        <div class="strive-card position-relative">
          <img class="img-fluid rounded w-100" src="movies/1-1.jpg" />
          <div class="infos-container">
            <div class="infos-content">
              <div class="d-flex align-items-center mb-3">
                <div class="play-btn gradient"></div>
                <h6 class="mb-0">Play S1 E2</h6>
                <span class="ml-auto plus">
                  <!-- <i class="fa fa-plus fa-lg" aria-hidden="true"></i> -->
                </span>
              </div>
              <h6>The Boys Season 2</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga inventore, itaque eveniet laborum iusto
                vitae dolorum eos odit fugiat accusamus, qui incidunt,
                commodi officiis aut nostrum nam illo magnam sint.
              </p>
              <div class="movie-footer">
                <span class="mr-2">2020</span>
                <i class="fa fa-address-card fa-lg mr-2"></i>
                <i class="fa fa-calendar-check-o fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  </div>
</div>
<a
  class="carousel-control-prev"
  href="#carouselExampleControls"
  role="button"
  data-slide="prev"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a
  class="carousel-control-next"
  href="#carouselExampleControls"
  role="button"
  data-slide="next"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>`;
  carouselSlide.innerHTML += carouselSlideContent;
  category.appendChild(title);
  main.appendChild(category);
  main.appendChild(carouselSlide);
};

categories.map((category, index) => {
  console.log(category, index);
  createCategory(category, index);
});
