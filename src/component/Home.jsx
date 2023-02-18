import img1 from "./../images/slide_01.jpg";
import img2 from "./../images/slide_02.jpg";
import img3 from "./../images/slide_03.jpg";
import img4 from "./../images/feature-image.jpg";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      title: "BEST OFFER",
      subtitle: "NEW ARRIVALS ON SALE ",
      image: img1,
    },
    {
      title: "FLASH DEALS",
      subtitle: "GET YOUR BEST PRODUCTS",
      image: img2,
    },
    {
      title: "LAST MINUTE",
      subtitle: "GRAB LAST MINUTE DEALS",
      image: img3,
    },
  ];

  return (
    <>
      <div className="card">
        <ReactCarousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
        >
          {slides.map((s) => (
            <div key={s.title}>
              <div className="image-wrapper">
                <img src={s.image} alt="pic" className="carouimg" />
                <h2 className="carouh2">{s.title}</h2>
                {s.control}
                <h3 className="caruh3">{s.subtitle}</h3>
              </div>
            </div>
          ))}
        </ReactCarousel>
      </div>
      <section id="1">
        <div className="container my-5">
          <div className="d-flex justify-content-between">
            <h2>Latest Products</h2>
            <Link to="/products" className="redlink">
              VIEW ALL PRODUCTS
            </Link>
          </div>

          <hr />
          <div className="row">
            <div className="col">
              <div className="card cardwidth">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  alt="pic"
                  className="cardimagg"
                />
                <div className="d-flex justify-content-between px-2">
                  <h5 className="card-title mt-31">Back pack</h5>
                  <h5 className="card-title mt-31">109.95$</h5>
                </div>
                <p className="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  expedita architecto laborum, debitis deleniti id perferendis
                  .
                </p>
              <Link className="btn btn-danger btn-sm" to="./products">Go shope</Link>
              </div>
            </div>
            <div className="col">
              <div className="card cardwidth">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  alt="pic"
                  className="cardimagg"
                />
                <div className="d-flex justify-content-between px-2">
                  <h5 className="card-title mt-31">T-shirts</h5>
                  <h5 className="card-title mt-31">22.3$</h5>
                </div>
                <p className="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  expedita architecto laborum, debitis deleniti id perferendis
                  .
                </p>
                <Link className="btn btn-danger btn-sm" to="./products">Go shope</Link>
              </div>
            </div>
            <div className="col">
              <div className="card cardwidth">
                <img
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  alt="pic"
                  className="cardimagg"
                />
                <div className="d-flex justify-content-between px-2">
                  <h5 className="card-title mt-31">Jacket</h5>
                  <h5 className="card-title mt-31">55.99$</h5>
                </div>
                <p className="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  expedita architecto laborum, debitis deleniti id perferendis
                   .
                </p>
                <Link className="btn btn-danger btn-sm" to="./products">Go shope</Link>
              </div>
            </div>
            <div className="col">
              <div className="card cardwidth">
                <img
                  src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  alt="pic"
                  className="cardimagg"
                />
                <div className="d-flex justify-content-between px-2">
                  <h5 className="card-title mt-31">casual slim fit</h5>
                  <h5 className="card-title mt-31">15.99$</h5>
                </div>
                <p className="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  expedita architecto laborum, debitis deleniti id perferendis
                   .
                </p>
                <Link className="btn btn-danger btn-sm" to="./products">Go shope</Link>
              </div>
            </div>
            <div className="col">
              <div className="card cardwidth">
                <img
                  src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                  alt="pic"
                  className="cardimagg"
                />
                <div className="d-flex justify-content-between px-2">
                  <h5 className="card-title mt-31">Naga silver dragon</h5>
                  <h5 className="card-title mt-31">695$</h5>
                </div>
                <p className="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  expedita architecto laborum, debitis deleniti id perferendis
                 .
                </p>
                <Link className="btn btn-danger btn-sm" to="./products">Go shope</Link>
              </div>
            </div>
            <div className="col">
              <div className="card cardwidth">
                <img
                  src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                  alt="pic"
                  className="cardimagg"
                />
                <div className="d-flex justify-content-between px-2">
                  <h5 className="card-title mt-31">Gold plate</h5>
                  <h5 className="card-title mt-31">99.9$</h5>
                </div>
                <p className="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  expedita architecto laborum, debitis deleniti id perferendis
                  .
                </p>
                <Link className="btn btn-danger btn-sm" to="./products">Go shope</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="2">
        <div className="container">

        <h2>About Sixteen Clothing</h2>
        <hr />
        </div>
        <div className="row container mt-5">
          <div className="col widdd">
            <h4 className="colerbluuu">
              Looking for the best products?
            </h4>
            <br />
            <p className="paragraaaa mb-4">
            This template is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more info.
            </p>
            <ul className="listam">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur an adipisicing elit</li>
              <li>It aquecorporis nulla aspernatur</li>
              <li>Corporis, omnis doloremque</li>
              <li>Non cum id reprehenderit</li>
            </ul>
        <div className="container">

        <Link to="aboutUs" className="btn btn-danger btncolor">Read More</Link>
        <hr />
        </div>
          </div>
          <div className="col">
            <img className="imagesharvor" src={img4} alt="pic" />
          </div>
        </div>
      </section>

      <section id="3">
        <div className="container mt-5">
          <div className="d-flex backkkk justify-content-between p-4">
            <div>
            <h4 className="colerbluuu">Creative &amp; Unique <em>Sixteen</em> Products</h4>
            <p className="paragraaaa">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
            </div>
            <div>

            <Link to="/" className="btn btn-danger clorrrrr">Purchase Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="4">
        <div className="py-5">
          <p className="footer">
            Copyright © 2020 Sixteen Clothing Co., Ltd.- Design:{" "}
            <span style={{ color: "#f33f3f" }}>TEMPLATEMO</span>{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
