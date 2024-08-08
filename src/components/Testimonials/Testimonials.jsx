import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Muqaddas Akram",
    text: "Customer service was excellent! They helped me choose the right product for my needs.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Eman Ashraf",
    text: "The after-sales support is fantastic. They promptly addressed all my concerns.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Amina Shafique",
    text: "Highly recommend this site for anyone looking for the latest and greatest in technology.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Laiba Eman",
    text: "The machine I bought has exceeded my expectations in performance and reliability.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-sky-500">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-sky-900">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Reviews
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-sky-50 dark:bg-gray-800 hover:bg-sky-100 dark:hover:bg-sky-700 relative">
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {data.text}
                    </p>
                    <h1 className="text-xl font-bold text-sky-900 dark:text-sky-200">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-sky-200 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
