import { Link } from "react-router-dom";
import { useState } from "react";
import "./CountactUs.css";
import image2 from "./../images/client-01.png";

const CountactUs = () => {
  const [selected,setSelected]  = useState(null)
  const data = [
    {
      title: "Accordion1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aspernatur ab quidem illum perspiciatis, ea perferendis commodi enim, exercitationem distinctio eaque quos autem necessitatibus assumenda tenetur ut aliquid omnis pariatur.",
    },
    {
      title: "Accordion2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aspernatur ab quidem illum perspiciatis, ea perferendis commodi enim, exercitationem distinctio eaque quos autem necessitatibus assumenda tenetur ut aliquid omnis pariatur.",
    },
    {
      title: "Accordion3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aspernatur ab quidem illum perspiciatis, ea perferendis commodi enim, exercitationem distinctio eaque quos autem necessitatibus assumenda tenetur ut aliquid omnis pariatur.",
    },
  ];
  const toggle =(i)=>{
    if (i===selected) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <>
      <section id="1">
        <div className="bGround ">
          <h4 className="center">CONTACT US</h4>
          <h1 className="center">LET`S GET IN TOUCH</h1>
        </div>
      </section>

      <section id="2" className="container">
        <div className="container mt-5">
          <h2>Our Location On Maps</h2>
          <hr />
          <div className="row">
            <div className="col mb-3">
              <iframe
                title="frame"
                src="https://maps.google.com/maps?q=iran,kermanshah,eslam%20abad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="frame"
                frameborder="1"
              ></iframe>
            </div>
            <div className="col ">
              <p className="blue">About our office</p>
              <p className="ppfont">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo sunt doloremque cum maxime fuga possimus, blanditiis
                at soluta reprehenderit iste! Quia amet quisquam quasi
                voluptatum eius soluta beatae tempora recusandae
              </p>
              <p className="ppfont">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo sunt doloremque cum maxime fuga possimus, blanditiis
                at soluta reprehenderit iste! Quia amet quisquam quasi
                voluptatum eius soluta beatae tempora recusandae
              </p>
              <br />
              <hr />

              <ul className="mt-4">
                <li className="list">
                  <Link href="https://facebook.com">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                      </g>
                    </svg>
                  </Link>
                </li>
                <li className="list ml">
                  <Link href="https://twiter.com">
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.946 5.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594A4.412 4.412 0 0 0 14.895.472a6.606 6.606 0 0 0-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 1.51 1.511 4.412 4.412 0 0 0 .472 3.105a6.606 6.606 0 0 0-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1 0 13.622 9 4.622 4.622 0 0 0 9 4.378zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z" />
                    </svg>
                  </Link>
                </li>
                <li className="list ml">
                  <Link href="https://instagram.com">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562 3.779 3.779 0 0 1-3.526-2.621 3.858 3.858 0 0 0 1.705-.065 3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473 3.775 3.775 0 0 1-1.168-5.041 10.716 10.716 0 0 0 7.781 3.945 3.813 3.813 0 0 1-.097-.861 3.773 3.773 0 0 1 3.774-3.773 3.77 3.77 0 0 1 2.756 1.191 7.602 7.602 0 0 0 2.397-.916 3.789 3.789 0 0 1-1.66 2.088 7.55 7.55 0 0 0 2.168-.594 7.623 7.623 0 0 1-1.884 1.953z" />
                    </svg>
                  </Link>
                </li>
                <li className="list ml">
                  <Link href="https://">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="3">
        <div className="container my-5">
          <h2>Send us a Message</h2>
          <hr />
          <div className="row">
            <div className="col">
              <form>
                <input
                  type="text"
                  className="form-control my-4"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id=""
                  className="form-control mb-4"
                  placeholder="Your Message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button className="filled-button">Send Message</button>
              </form>
            </div>

            <div className="col mt-5">
              <div className="wrapper">
                <div className="accordion">
                  {data.map((item, i) => {
                    return (
                      <div className="item" onClick={()=> toggle(i)}>
                        <div  className={selected === i ? "title show" : 'title'}  >
                          <h4>{item.title}</h4> 
                          <span className="spanfont">{selected === i ? "-" : '+'}</span>
                        </div>
                        <div  className={selected === i ? "Content show" : 'content'}>{item.content}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="5">
        <div className="container my-5 py-5">
          <h2>Our Happy Customers</h2>
          <hr />
          <div className="row">
            <div className="col">
              <img className="py-5" src={image2} alt="image2" />
            </div>
            <div className="col">
              <img className="py-5" src={image2} alt="image2" />
            </div>
            <div className="col">
              <img className="py-5" src={image2} alt="image2" />
            </div>
            <div className="col">
              <img className="py-5" src={image2} alt="image2" />
            </div>
            <div className="col">
              <img className="py-5" src={image2} alt="image2" />
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="6">
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

export default CountactUs;
