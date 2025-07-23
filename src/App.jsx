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

  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: 1,
      image: "https://www.lego.com/cdn/cs/set/assets/blt6796a619c1f2e1e7/Trains-Interest-202211-Sidekick-Tall-Remote.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
      title: "10 Exciting Ways to make of Summer Holidays",
      description: "Lorem ipsum dolor sit amet consectetur duis rhoncus nunc dolor a vestibulum at sit sagittis pharetra bibendum interdum arcu tellus tempor consequat.",
      buttonColor: "bg-danger"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop",
      title: "Rethinking Education: The Role of Non-Traditional Learning Methods for Children",
      description: "Aliquam molestie cursus ipsum risrum ut auctor et elit rutdie tempor consequat nullam velicula sagittis et velsping neque dolor.",
      buttonColor: "bg-warning"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=200&fit=crop",
      title: "7 Healthy Habits to Teach Your Kids in 2024",
      description: "Dolor rhoncus sed tempor leo tempus tristique sem malesuada nam libero sed placerat tincidunt vestibulum nullam ex tempor mauris.",
      buttonColor: "bg-danger"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop",
      title: "Know the Differences between Technical & Traditional Toys",
      description: "Aliquam consequat ut facilisi ipsum velit nsi dui ac neque premet pellus sit tincidunt consequat duis imperdiet tincidunt elit eget ultricies ac pretium.",
      buttonColor: "bg-warning"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % cards.length;
      visible.push(cards[index]);
    }
    return visible;
  };

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
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

    <div className="position-relative min-vh-100 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1dd1a1 0%, #55a3ff 100%)',
    }}>
      {/* Cloud Background */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
        {/* Purple clouds at top */}
        <svg 
          className="position-absolute w-100" 
          style={{ top: '-50px', height: '200px' }}
          viewBox="0 0 1200 200" 
          fill="none"
        >
          <path 
            d="M0,100 C150,50 300,150 450,80 C600,10 750,120 900,60 C1050,0 1200,100 1200,100 L1200,0 L0,0 Z" 
            fill="#8e44ad"
          />
        </svg>
        
        {/* Additional cloud layers */}
        <svg 
          className="position-absolute w-100" 
          style={{ top: '0px', height: '150px' }}
          viewBox="0 0 1200 150" 
          fill="none"
        >
          <path 
            d="M0,80 C200,20 400,100 600,40 C800,80 1000,20 1200,60 L1200,0 L0,0 Z" 
            fill="#9b59b6"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Yellow decorative circles */}
      <div 
        className="position-absolute rounded-circle border-5" 
        style={{
          bottom: '100px',
          left: '50px',
          width: '120px',
          height: '120px',
          borderColor: '#f1c40f',
          borderStyle: 'solid',
          backgroundColor: 'transparent'
        }}
      ></div>
      
      <div 
        className="position-absolute rounded-circle" 
        style={{
          bottom: '50px',
          left: '200px',
          width: '80px',
          height: '80px',
          backgroundColor: '#f39c12',
          opacity: '0.8'
        }}
      ></div>

      {/* Main Content */}
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center position-relative" style={{ zIndex: 2 }}>
        <div className="text-center text-white px-4">
          {/* Decorative arrows */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <span className="me-3 fs-3" style={{ color: '#f1c40f' }}>→</span>
            <p className="display-6 fw-bold mb-0 text-uppercase" style={{ 
              fontFamily: 'Beachday',
              fontWeight : '400',
              letterSpacing: '0%',
              lineHeight: '100%',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              paddingTop: '100px'
            }}>
              Lorem Ipsum Dolor Sit
            </p>
            <span className="ms-3 fs-3" style={{ color: '#f1c40f' }}>←</span>
          </div>

          {/* Subtitle */}
          <p className="lead mb-4 mx-auto" style={{ 
            maxWidth: '600px',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Lorem ipsum dolor sit amet consectetur. In arcu amet tincidunt lectus nisl convallis. Egestas lorem 
            consectetur amet sed. Morbi viverra ut ipsum aliquet ut sunt molestie ultricies
          </p>

          {/* Yellow separator line */}
          <div 
            className="mx-auto mb-5" 
            style={{
              width: '100px',
              height: '4px',
              backgroundColor: '#f1c40f',
              borderRadius: '2px'
            }}
          ></div>

          {/* Brand logos container */}
          <div 
            className="mx-auto p-4 rounded-4 d-flex align-items-center justify-content-center flex-wrap gap-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '600px',
              minHeight: '100px'
            }}
          >
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-4">
              <span 
                className="text-white fw-normal"
                style={{ 
                  fontSize: '1.8rem',
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                amazon.in
              </span>
              
              <span 
                className="text-white fw-light"
                style={{ 
                  fontSize: '1.6rem',
                  fontFamily: 'Arial, sans-serif',
                  fontStyle: 'italic'
                }}
              >
                firstcry.com
              </span>
              
              <span 
                className="text-white"
                style={{ 
                  fontSize: '1.8rem',
                  fontFamily: 'Brush Script MT, cursive',
                  fontWeight: 'normal'
                }}
              >
                Hamleys
              </span>
            </div>
          </div>

          {/* Bottom separator lines */}
          <div className="d-flex justify-content-center gap-3 mt-5">
            <div 
              style={{
                width: '60px',
                height: '3px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
              }}
            ></div>
            <div 
              style={{
                width: '60px',
                height: '3px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
              }}
            ></div>
            <div 
              style={{
                width: '60px',
                height: '3px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div className="position-relative min-vh-100 overflow-hidden" style={{
      backgroundColor: '#e74c3c',
      background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'
    }}>
      
      {/* Yellow decorative elements */}
      <div className="position-absolute" style={{
        top: '20px',
        left: '50px',
        width: '150px',
        height: '100px',
        background: 'linear-gradient(45deg, #f1c40f, #f39c12)',
        borderRadius: '50px',
        opacity: '0.8'
      }}></div>

      <div className="position-absolute" style={{
        top: '0px',
        right: '100px',
        width: '200px',
        height: '20px',
        backgroundColor: '#3498db',
        borderRadius: '10px'
      }}></div>

      {/* Green decorative circles on right */}
      <div className="position-absolute" style={{
        right: '50px',
        top: '40%',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '15px solid #27ae60',
        backgroundColor: 'transparent'
      }}></div>

      <div className="position-absolute" style={{
        right: '180px',
        top: '50%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#2ecc71',
        opacity: '0.7'
      }}></div>

      {/* Dark decorative elements at bottom */}
      <div className="position-absolute w-100" style={{ bottom: '0', height: '100px' }}>
        <svg width="100%" height="100" viewBox="0 0 1200 100" fill="none">
          <path d="M0,50 C200,20 400,80 600,40 C800,0 1000,60 1200,30 L1200,100 L0,100 Z" fill="#2c3e50" opacity="0.6"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center position-relative py-5" style={{ zIndex: 2 }}>
        
        {/* Header Section */}
        <div className="text-center text-white mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <span className="me-3 fs-3" style={{ color: '#f1c40f' }}>→</span>
            <h1 className="display-3 fw-bold mb-0 text-uppercase" style={{ 
              fontFamily: 'Beachday',
              letterSpacing: '3px',
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              OUR
            </h1>
            <span className="ms-3 fs-3" style={{ color: '#f1c40f' }}>←</span>
          </div>
          
          <p className="lead" style={{ 
            fontSize: '0.75rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Find out what's happening in the world of STEAM play
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="position-relative w-100" style={{ maxWidth: '1200px' }}>
          
          {/* Navigation Buttons */}
          <button 
            className="btn btn-dark rounded-circle position-absolute d-flex align-items-center justify-content-center"
            onClick={prevSlide}
            style={{
              left: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              zIndex: 10,
              backgroundColor: 'rgba(0,0,0,0.7)',
              border: 'none'
            }}
          >
            <span className="text-white fs-5">‹</span>
          </button>

          <button 
            className="btn btn-dark rounded-circle position-absolute d-flex align-items-center justify-content-center"
            onClick={nextSlide}
            style={{
              right: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              zIndex: 10,
              backgroundColor: 'rgba(0,0,0,0.7)',
              border: 'none'
            }}
          >
            <span className="text-white fs-5">›</span>
          </button>

          {/* Cards Container */}
          <div className="row g-4 justify-content-center">
            {getVisibleCards().map((card, index) => (
              <div key={`${card.id}-${index}`} className="col-lg-3 col-md-6">
                <div 
                  className="card h-100 border-0 shadow-lg"
                  style={{
                    backgroundColor: 'rgba(139, 69, 19, 0.8)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <div className="card-body p-4 text-center text-white d-flex flex-column">
                    <img 
                      src={card.image}
                      alt={card.title}
                      className="mx-auto mb-3 rounded-3"
                      style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover'
                      }}
                    />
                    
                    <h5 className="card-title fw-bold mb-3" style={{
                      fontSize: '1rem',
                      lineHeight: '1.3',
                      minHeight: '60px'
                    }}>
                      {card.title}
                    </h5>
                    
                    <p className="card-text flex-grow-1" style={{
                      fontSize: '0.85rem',
                      lineHeight: '1.4',
                      opacity: '0.9'
                    }}>
                      {card.description}
                    </p>
                    
                    <button 
                      className={`btn text-white fw-bold rounded-pill mt-3 ${card.buttonColor}`}
                      style={{
                        padding: '8px 30px',
                        fontSize: '0.9rem',
                        border: 'none',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-5">
          <button 
            className="btn text-white fw-bold rounded-pill px-5 py-3"
            style={{
              backgroundColor: '#27ae60',
              border: 'none',
              fontSize: '1.1rem',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            VIEW MORE
          </button>
        </div>

        {/* Bottom Toolbar (Static representation) */}
        <div 
          className="position-fixed bottom-0 start-50 translate-middle-x mb-3 d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <div 
              className="rounded d-flex align-items-center justify-content-center text-white"
              style={{ width: '35px', height: '35px', backgroundColor: '#3498db' }}
            >
              <span style={{ fontSize: '1.2rem' }}>✓</span>
            </div>
            <div 
              className="rounded d-flex align-items-center justify-content-center"
              style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '1.2rem' }}>👆</span>
            </div>
            <div 
              className="rounded d-flex align-items-center justify-content-center"
              style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '1.2rem' }}>💭</span>
            </div>
            <button 
              className="btn btn-primary rounded-pill px-3 py-1 fw-bold"
              style={{ fontSize: '0.9rem' }}
            >
              Ask to edit
            </button>
            <div className="d-flex gap-1">
              <div 
                className="rounded d-flex align-items-center justify-content-center"
                style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1rem' }}>📝</span>
              </div>
              <div 
                className="rounded d-flex align-items-center justify-content-center"
                style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1rem' }}>📋</span>
              </div>
              <div 
                className="rounded d-flex align-items-center justify-content-center"
                style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1rem' }}>💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="position-relative min-vh-100 overflow-hidden" style={{
      backgroundColor: '#2c3e50',
      background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)'
    }}>
      
      {/* Red decorative wave at top */}
      <div className="position-absolute w-100" style={{ top: '0', height: '80px' }}>
        <svg width="100%" height="80" viewBox="0 0 1200 80" fill="none">
          <path 
            d="M0,20 C200,60 400,0 600,40 C800,80 1000,20 1200,50 L1200,0 L0,0 Z" 
            fill="#e74c3c"
            opacity="0.9"
          />
          <path 
            d="M0,30 C150,10 350,50 550,20 C750,60 950,10 1200,35 L1200,0 L0,0 Z" 
            fill="#c0392b"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Scattered clouds */}
      <div className="position-absolute" style={{
        top: '120px',
        left: '150px',
        width: '60px',
        height: '30px',
        backgroundColor: '#95a5a6',
        borderRadius: '50px',
        opacity: '0.6'
      }}>
        <div className="position-absolute" style={{
          top: '-8px',
          left: '10px',
          width: '25px',
          height: '25px',
          backgroundColor: '#95a5a6',
          borderRadius: '50%'
        }}></div>
        <div className="position-absolute" style={{
          top: '-8px',
          right: '15px',
          width: '20px',
          height: '20px',
          backgroundColor: '#95a5a6',
          borderRadius: '50%'
        }}></div>
      </div>

      <div className="position-absolute" style={{
        top: '180px',
        right: '200px',
        width: '45px',
        height: '25px',
        backgroundColor: '#7f8c8d',
        borderRadius: '40px',
        opacity: '0.5'
      }}>
        <div className="position-absolute" style={{
          top: '-6px',
          left: '8px',
          width: '18px',
          height: '18px',
          backgroundColor: '#7f8c8d',
          borderRadius: '50%'
        }}></div>
      </div>

      <div className="position-absolute" style={{
        top: '250px',
        left: '80px',
        width: '35px',
        height: '20px',
        backgroundColor: '#95a5a6',
        borderRadius: '30px',
        opacity: '0.4'
      }}>
        <div className="position-absolute" style={{
          top: '-4px',
          left: '6px',
          width: '15px',
          height: '15px',
          backgroundColor: '#95a5a6',
          borderRadius: '50%'
        }}></div>
      </div>

      <div className="position-absolute" style={{
        top: '320px',
        right: '300px',
        width: '50px',
        height: '28px',
        backgroundColor: '#7f8c8d',
        borderRadius: '45px',
        opacity: '0.6'
      }}>
        <div className="position-absolute" style={{
          top: '-6px',
          left: '10px',
          width: '20px',
          height: '20px',
          backgroundColor: '#7f8c8d',
          borderRadius: '50%'
        }}></div>
        <div className="position-absolute" style={{
          top: '-6px',
          right: '12px',
          width: '16px',
          height: '16px',
          backgroundColor: '#7f8c8d',
          borderRadius: '50%'
        }}></div>
      </div>

      {/* Large decorative circle on right */}
      <div className="position-absolute" style={{
        right: '-100px',
        top: '40%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'rgba(127, 140, 141, 0.1)',
        border: '2px solid rgba(127, 140, 141, 0.2)'
      }}>
        <div className="position-absolute" style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'rgba(127, 140, 141, 0.05)',
          border: '1px solid rgba(127, 140, 141, 0.15)'
        }}>
          <div className="position-absolute" style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'rgba(127, 140, 141, 0.1)'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid h-100 d-flex flex-column justify-content-center position-relative py-5" style={{ zIndex: 2 , backgroundColor: '#2F2F2F'}}>
        
        {/* Hero Text */}
        <div className="text-center mb-5" style={{ paddingTop: '100px' }}>
          <h1 className="display-1 text-grey mb-4" style={{
            fontFamily: 'Fredoka',
            style: 'Light',
            fontWeight: '300',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            lineHeight: '1.1',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '2px',
            color: '#444444'
          }}>
            Craft your<br />tales!
          </h1>
        </div>

        {/* Footer Content */}
        <div className="container" style={{ marginTop: 'auto', paddingBottom: '100px' }}>
          <div className="row">
            
            {/* Newsletter Subscription */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-white">
                <h4 className="mb-3" style={{
                  fontSize: '1.3rem',
                  fontWeight: '400',
                  lineHeight: '1.3'
                }}>
                  Subscribe to the<br />iQ Tales Newsletter
                </h4>
                <p className="mb-4" style={{
                  fontSize: '0.9rem',
                  opacity: '0.8',
                  lineHeight: '1.5'
                }}>
                  Latest news, musings, announcements and<br />
                  updates direct to your inbox
                </p>
                <div className="d-flex flex-column gap-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '25px',
                      padding: '12px 20px',
                      color: 'white'
                    }}
                  />
                  <button
                    className="btn text-white fw-bold rounded-pill"
                    onClick={handleSubscribe}
                    style={{
                      backgroundColor: '#27ae60',
                      border: 'none',
                      padding: '12px 30px',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: '0 4px 15px rgba(39, 174, 96, 0.3)'
                    }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>

            {/* Products Column */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                Products
              </h5>
              <ul className="list-unstyled">
                {['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'].map((item, index) => (
                  <li key={index} className="mb-2">
                    <a 
                      href="#" 
                      className="text-decoration-none"
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                Company
              </h5>
              <ul className="list-unstyled">
                {Array.from({length: 8}, (_, i) => `Menu ${i + 1}`).map((item, index) => (
                  <li key={index} className="mb-2">
                    <a 
                      href="#" 
                      className="text-decoration-none"
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                Resources
              </h5>
              <ul className="list-unstyled">
                {Array.from({length: 5}, (_, i) => `Menu ${i + 1}`).map((item, index) => (
                  <li key={index} className="mb-2">
                    <a 
                      href="#" 
                      className="text-decoration-none"
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                Social
              </h5>
              <ul className="list-unstyled">
                {Array.from({length: 5}, (_, i) => `Menu ${i + 1}`).map((item, index) => (
                  <li key={index} className="mb-2">
                    <a 
                      href="#" 
                      className="text-decoration-none"
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Border Line */}
          <div 
            className="mt-5 pt-4 border-top"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1) !important' }}
          >
          </div>
        </div>

        {/* Bottom Toolbar */}
        <div 
          className="position-fixed bottom-0 start-50 translate-middle-x mb-3 d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <div 
              className="rounded d-flex align-items-center justify-content-center text-white"
              style={{ width: '35px', height: '35px', backgroundColor: '#3498db' }}
            >
              <span style={{ fontSize: '1.2rem' }}>✓</span>
            </div>
            <div 
              className="rounded d-flex align-items-center justify-content-center"
              style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '1.2rem' }}>👆</span>
            </div>
            <div 
              className="rounded d-flex align-items-center justify-content-center"
              style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '1.2rem' }}>💭</span>
            </div>
            <button 
              className="btn btn-primary rounded-pill px-3 py-1 fw-bold"
              style={{ fontSize: '0.9rem' }}
            >
              Ask to edit
            </button>
            <div className="d-flex gap-1">
              <div 
                className="rounded d-flex align-items-center justify-content-center"
                style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1rem' }}>📝</span>
              </div>
              <div 
                className="rounded d-flex align-items-center justify-content-center"
                style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1rem' }}>📋</span>
              </div>
              <div 
                className="rounded d-flex align-items-center justify-content-center"
                style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1rem' }}>💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </>
  );
}

export default App;
