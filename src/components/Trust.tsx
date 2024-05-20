import style from "../styles/trust.module.scss";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface commentInterface {
  comment: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stars: number;
  description: string;
  author: string;
}

const Trust = () => {

  const comments: commentInterface[] = [
    {
      comment: "It helped me alot with my channels",
      stars: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 2.7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={style.trust}>
      <div className={style.trustMain}>
        <h1>Thousand of user trust US</h1>
        <h3>
          Our goal is your success.We do our best to make your mission easy and
          save time.
        </h3>
        <div className={style.sliderbox}>
          <Slider {...settings}>
            {comments.map((comment, i) => {
              return (
                <div key={i}>
                  <div className={style.slides}>
                    <h4>{comment.comment}</h4>
                    <StarRatings
                      rating={comment.stars}
                      starRatedColor="#F5A623"
                      numberOfStars={5}
                      starDimension="23px"
                      starSpacing="5px"
                      name="rating"
                    />
                    <p>{comment.description}</p>
                    <span>{comment.author}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={70}
            // slidesPerView={winWidth < 1200 ? 3 : 2 }
            slidesPerView={winWidth < 850 ? 1 : winWidth < 1300 ? 1.5 : 3}
            navigation
            className={style.silderSect}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {comments.map((comment, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className={style.slides}>
                    <h4>{comment.comment}</h4>
                    <StarRatings
                      rating={comment.stars}
                      starRatedColor="#F5A623"
                      numberOfStars={5}
                      starDimension="23px"
                      starSpacing="5px"
                      name="rating"
                    />
                    <p>{comment.description}</p>
                    <span>{comment.author}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper> */}

          <div className={style.btn}>
            <button className={style.free_trail}>Start Free trial</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
