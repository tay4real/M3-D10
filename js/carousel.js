const carousel = [
  {
    imagePath:
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_TheBoys_S2_Binge/4a9596ce-dd42-4ab3-ae79-ff2407be5dd9._UR3000,600_SX1500_FMwebp_.jpg",
  },
  {
    imagePath:
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_manonfire/cf2a10e7-dd28-4082-8171-096927b7e9ad._UR3000,600_SX1500_FMwebp_.jpg",
  },
  {
    imagePath:
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_7500/c326b18e-34bf-4573-8fb8-de393be80fe9._UR3000,600_SX1500_FMwebp_.jpg",
  },
  {
    imagePath:
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_svod_jackryans2_launch_newseries/5cd1b24c-82cc-4779-93ea-47dd61ed17ef._UR3000,600_SX1500_FMwebp_.jpg",
  },
  {
    imagePath:
      "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_BoratSubsequentMoviefilm_NoRing/f8ffc58d-e0f3-44ea-b4f1-d85ed468ac77._UR3000,600_SX1500_FMwebp_.jpg",
  },
  {
    imagePath:
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_upside/122373c9-e850-470a-9877-a531b96cacfa._UR3000,600_SX1500_FMwebp_.jpg",
  },
  {
    imagePath:
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_svod_aeronauts/9e0f2dcb-2be9-48e9-a397-5ae834f454a2._UR3000,600_SX1500_FMwebp_.jpg",
  },
];

const indicators = (id) => {
  return `<li
    data-target="#carouselExampleIndicators"
    data-slide-to=${id}
    class=
  ></li>`;
};

const slides = (imgURL, id) => {
  return `<div class="carousel-item ${id === 0 ? "active" : ""}">
 <img src=${imgURL} class="d-block w-100" alt="..." />
</div>`;
};

let slide_indicators = "";
let slideItems = "";
carousel.map((slide, index) => {
  console.log(slide, index);
  let carouselIndicator = document.querySelector(".carousel-indicators");
  let carouselInner = document.querySelector(".carousel-inner");
  slide_indicators += indicators(index);
  slideItems += slides(slide.imagePath, index);
  carouselIndicator.innerHTML = slide_indicators;
  carouselInner.innerHTML = slideItems;
});
