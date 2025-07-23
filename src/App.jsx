// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./App.css";
import { FaArrowLeft, FaArrowRight, FaHeart, FaPlay, FaRegThumbsUp, FaStar, FaPlus, FaMinus, FaPaperclip, FaMusic, FaQuestionCircle,} from "react-icons/fa";

const products = [
  {
    img: "https://media.sciencephoto.com/image/c0521774/800wm/C0521774-Baby_building_tower_with_building_blocks.jpg",
    title: "Shadow Box Mahabarota",
    price: "₹ 1499.00"
  },
  {
    img: "https://media.sciencephoto.com/image/f0100811/800wm/F0100811-Baby_girl_playing_with_teddy_bear.jpg",
    title: "Cube Tales",
    price: "₹ 1499.00"
  },
  {
    img: "https://baybee.co.in/cdn/shop/files/71B1_ExJQzL_500x.jpg?v=1744998553",
    title: "3D Buddies",
    price: "₹ 1499.00"
  },
  {
    img: "https://img.freepik.com/premium-photo/baby-girl-playing-with-educational-toy-nursery_73683-347.jpg",
    title: "Puzzle Stack",
    price: "₹ 1499.00"
  }
];

  const testimonials = [
  {
    name: "Customer Name",
    text: "Lorem ipsum dolor sit amet consectetur. Quod ultricies proin dolor a vitae nunc...",
    color: "blue-card",
  },
  {
    name: "Customer Name",
    text: "Quis etiam ornare urna est a. Dolor mauris sed tempus hac tempus tincidunt...",
    color: "pink-card",
  },
  {
    name: "Customer Name",
    text: "Lorem ipsum dolor sit amet consectetur. Quod ultricies proin dolor a vitae nunc purus...",
    color: "green-card",
  },
  {
    name: "Customer Name",
    text: "Quis etiam ornare urna est a. Dolor mauris sed tempus hac tempus tincidunt...",
    color: "purple-card",
  },
];

const faqItems = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: `In the case of faulty or damaged goods, notify us within 3-5 days of delivery with pictures supporting your claim. We will be happy to refund the original price of the item or send you a replacement.
You are responsible for ensuring the return of goods; we recommend you obtain proof of postage. This does not affect your statutory rights.`,
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Etiam vel nisl sit amet mauris posuere aliquam. Vivamus luctus, justo at convallis congue, sapien magna pretium augue, at tincidunt nibh eros sit amet eros.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Integer fringilla, ligula eu interdum efficitur, turpis mauris tristique turpis, in dictum lectus justo non urna.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Curabitur elementum justo sit amet orci elementum, sit amet bibendum dolor faucibus.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Sed sed sollicitudin mi. Aliquam sagittis tempor eros, vitae finibus sapien facilisis vitae.",
  },
  {
    id: 6,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Suspendisse potenti. Cras ut mauris scelerisque, finibus ipsum in, posuere nibh.",
  },
];

function App() {

  const [openId, setOpenId] = useState(1); // first open by default

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };


  return (
    <>
    <div className="main-bg">
      {/* Top Promotional Banner */}
      <div className="promo-banner text-center text-white py-1">
        5% Discount on Your First Purchase Code: FIRST BUY5
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="bg-white border-bottom">
        <Container>
          <Navbar.Brand href="#">
            <span className="brand-logo">BRAND LOGO</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">
              <Nav.Link href="#">MENU 01</Nav.Link>
              <Nav.Link href="#">MENU 02</Nav.Link>
              <Nav.Link href="#">MENU 03</Nav.Link>
              <Nav.Link href="#">MENU 04</Nav.Link>
              <Nav.Link href="#">MENU 05</Nav.Link>
              <Nav.Link href="#">MENU 06</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#"><i className="bi bi-search"></i></Nav.Link>
              <Nav.Link href="#"><i className="bi bi-person"></i></Nav.Link>
              <Nav.Link href="#"><i className="bi bi-cart"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="hero-container text-center d-flex flex-column justify-content-center align-items-center">
        <div className="nav-arrow left">
          <Button variant="link" className="arrow-btn">
            <span>&#8592;</span>
          </Button>
        </div>
        <div>
          <h1 className="hero-title mb-3">LOREM IPSUM<br/>DOLOR SIT AMET</h1>
          <p className="hero-desc mb-4">
            Lorem ipsum dolor sit amet consectetur. Eu tristique sed blandit aliquam neque odio tortor in sit. Facilisis est rhoncus sed commodo nec ipsum.
          </p>
          <Button className="cta-btn px-4 py-2">SHOP NOW</Button>
        </div>
        <div className="nav-arrow right">
          <Button variant="link" className="arrow-btn">
            <span>&#8594;</span>
          </Button>
        </div>
      </Container>
    </div>

    <div className="product-showcase position-relative">
      {/* Background elements */}
      <div className="decor-squiggle"></div>
      <div className="decor-star decor-star-left"></div>
      <div className="decor-star decor-star-right"></div>
      <div className="decor-note"></div>
      <div className="decor-white-sparkle"></div>

      {/* Title and subtitle */}
      <div className="text-center pt-4 mb-3">
        <h2 className="showcase-title mb-1">LOREM IPSUM DOLOR</h2>
        <div className="showcase-desc mb-2">
          Lorem ipsum dolor sit amet consectetur. Eu tristique sed blandit aliquam neque odio tortor in sit.
          Facilisis est rhoncus sed commodo nec ipsum.
        </div>
        <div className="showcase-underline mx-auto mb-4"></div>
      </div>

      {/* Menu pill navigation */}
      <div className="showcase-menu d-flex justify-content-center mb-4">
        <span className="showcase-pill active">Menu 01</span>
        <span className="showcase-pill">Menu 02</span>
        <span className="showcase-pill">Menu 03</span>
        <span className="showcase-pill">Menu 04</span>
        <span className="showcase-pill">Menu 05</span>
      </div>

      {/* Main Product block */}
      <div className="position-relative main-product-block mx-auto">
        {/* Left arrow */}
        <Button variant="link" className="carousel-arrow left">
          <span>&#8592;</span>
        </Button>

        {/* Product image and background circle */}
        <div className="product-img-bg">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347399356i/183496.jpg" // sample image
            alt="Shadow Box"
            className="shadow-product-img"
          />
          <div className="product-label price-label">&#8377;Price</div>
          <div className="product-label heart-label">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div className="product-label price-arrow">
            <span className="price-arrow-curve"></span>
            <span className="price-goes-here">Price<br />Goes Here</span>
          </div>
        </div>

        {/* Right arrow */}
        <Button variant="link" className="carousel-arrow right">
          <span>&#8594;</span>
        </Button>
      </div>

      {/* Product name and CTA */}
      <div className="product-desc text-center mt-3">
        <h3 className="product-title mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="product-info mb-3">
          Lorem ipsum dolor sit amet consectetur. Dis nunc nisl tincidunt ullamcorper in. Id sollicitudin id scelerisque orci tortor. Nibh ac massa risus non feugiat mauris molestie velit. At risus sagittis suspendisse elementum eros.
        </div>
        <Button className="shop-btn px-4 py-2 mb-2">SHOP NOW</Button>
      </div>
    </div>    


    <div className="carousel-bg position-relative m-0">
      {/* Decorative Elements */}
      <div className="decor-top-left"></div>
      <div className="decor-top-note"></div>
      <div className="decor-bottom-right"></div>
      <div className="decor-bottom-note"></div>
      <div className="decor-star-left"></div>
      <div className="decor-star-right"></div>
      <div className="decor-rainbow"></div>
      {/* Section Heading */}
      <div className="text-center mb-3">
        <div className="mb-2 decor-rainbow-emoji">&#127752;</div>
        <h2 className="carousel-title mb-2">LOREM IPSUM DOLOR SIT AMET</h2>
        <div className="carousel-desc mx-auto mb-2">
          Lorem ipsum dolor sit amet consectetur. Augue id scelerisque nulla condimentum fermentum.<br />
          Sociis suspendisse gravida ac sit tincidunt volutpat. Quam venenatis sit sed rhoncus pharetra et ipsum. Sociis nisi sed phasellus facilisis nullam ac! Sed morbi erat enim in tristique.
        </div>
        <div className="carousel-underline mx-auto mb-3"></div>
      </div>
      {/* Carousel Navigation */}
      <div className="carousel-products d-flex justify-content-center align-items-center">
        <Button variant="primary" className="carousel-nav-btn mx-2">
          <FaArrowLeft size={22} />
        </Button>
        <div className="d-flex flex-row flex-nowrap gap-4">
          {products.map((product, idx) => (
            <div
              className={`carousel-card product-frame-${idx % 2 === 0 ? "yellow" : "blue"}`}
              key={idx}
            >
              <div className="carousel-img-wrapper">
                <img src={product.img} alt={product.title} className="carousel-img" />
                <span className="carousel-heart">
                  <FaHeart size={16} />
                </span>
                <span className="carousel-flower-badge"><FaPlay /></span>
              </div>
              <div className="carousel-card-body">
                <div className="carousel-product-title">{product.title}</div>
                <div className="carousel-product-price">{product.price}</div>
                <Button className="carousel-shopnow-btn" size="sm">
                  SHOP NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="primary" className="carousel-nav-btn mx-2">
          <FaArrowRight size={22} />
        </Button>
      </div>
      {/* Pagination Dots */}
      <div className="d-flex justify-content-center align-items-center mt-4 mb-3">
        <span className="carousel-dot active"></span>
        <span className="carousel-dot"></span>
      </div>
      {/* View More Button */}
      <div className="d-flex justify-content-center">
        <Button className="carousel-viewmore-btn" size="lg">
          VIEW MORE
        </Button>
      </div>
    </div>

    <section className="about-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h5 className="about-subtitle">ABOUT</h5>
        <h1 className="about-title">
          <span className="io">io</span> <span className="tales">tales</span>
        </h1>
        <p className="about-tagline">Small team, big tales, endless play.</p>
        
        <div className="about-content mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur. Quam scelerisque lectus egestas purus est
            ultricies enim enim massa. Egestas nibh nibh venenatis dapibus pretium in diam sodales.
            Dui volutpat condimentum pharetra elementum tellus euismod vitae augue. Convallis
            aliquam rhoncus ut varius. Volutpat viverra bibendum nam tellus sodales egestas
            consectetur lacus. Ut quam lectus proin ultricies ut est.
          </p>
          <p>
            Nisi sagittis enim etiam egestas. Ac aliquam sed diam vulputate auctor mi. Eu sed
            euismod leo urna id blandit. Lorem fames gravida in eget egestas pharetra ultricies
            massa magna. Tempor ut sed phasellus sed pharetra sit. Suscipit viverra dictumst nunc
            adipiscing arcu.
          </p>
        </div>
      </div>
    </section>

    <section className="testimonials-section text-center">
      <div className="container">
        {/* Top Heading */}
        <FaRegThumbsUp className="thumb-icon mb-3" />
        <h2 className="section-heading">HEADING GOES HERE</h2>
        <p className="section-description mx-auto">
          Lorem ipsum dolor sit amet consectetur. Purus vulputate leo malesuada ut euismod. 
          Nulla auctor at mauris suscipit augue. Mi leo tempus eget sit et tempor iaculis 
          pulvinar vitae. Dis urna et a pellentesque neque nunc arcu.
        </p>

        {/* Testimonial Cards */}
        <div className="d-flex align-items-center justify-content-center mt-4">
          <button className="arrow-btn me-3">
            <FaArrowLeft />
          </button>

          <div className="testimonial-cards d-flex gap-3">
            {testimonials.map((item, index) => (
              <div key={index} className={`testimonial-card ${item.color}`}>
                <div className="heart-icon">♥</div>
                <h5>{item.name}</h5>
                <p>{item.text}</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="arrow-btn ms-3">
            <FaArrowRight />
          </button>
        </div>

        {/* Button */}
        <button className="view-more-btn mt-4">VIEW MORE</button>
      </div>
    </section>

     <section className="faq-section text-center">
      <div className="faq-decor faq-decor-music">
        <FaMusic />
      </div>
      <div className="faq-decor faq-decor-paperclip">
        <FaPaperclip />
      </div>
      <div className="faq-decor faq-decor-qmark">
        <FaQuestionCircle />
      </div>

      <div className="container">
        {/* Icon above heading */}
        <div className="faq-topicon-wrapper">
          <span className="faq-topicon">🔔</span>
        </div>

        <h2 className="faq-heading">"HEADING GOES HERE"</h2>
        <h3 className="faq-subheading">"LOREM IPSUM DOLOR SIT AMET"</h3>

        <p className="faq-description mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sit aliquam eu volutpat et ut fermentum nisl.
          Duis viverra praesent tincidunt sed est purus. Aliquet porta a arcu cursus malesuada a
          sed. Vel vitae nam lectus cursus sed habitasse sit nunc tortor.
        </p>

        <div className="faq-divider-bar" />

        {/* Panel wrapper */}
        <div className="faq-panel mx-auto">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question w-100 text-start"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
                </button>

                <div
                  id={`faq-body-${item.id}`}
                  className="faq-answer-wrapper"
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <div className="faq-answer">
                    {item.answer.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <button
            className="faq-viewmore-btn mt-4"
            // onClick={onViewMore ? onViewMore : undefined}
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  </>
  );
}

export default App;
