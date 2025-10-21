"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/style.css";
import logo from "../assets/logo/logo.png";

export default function Header() {
  return (
    <header className="header">
      {/* top header */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <a href="mailto:[email protected]">
                      <i className="fas fa-envelopes"></i>
                      <span>[email protected]</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+21236547898">
                      <i className="fas fa-phone-volume"></i> +2 123 654 7898
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-alarm-clock"></i> Sun - Fri (08AM - 10PM)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-link">
                <Link href="/login">
                  <i className="fas fa-arrow-right-to-bracket"></i> Login
                </Link>
                <Link href="/register">
                  <i className="fas fa-user-vneck"></i> Register
                </Link>
              </div>
              <div className="header-top-social">
                <span>Follow Us: </span>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg navbar-fixed">
          <div className="container ">
            <Link className="navbar-brand" href="/index">
              <Image src={logo} alt="logo" width={120} height={40} />
            </Link>

            <div className="mobile-menu-right">
              <div className="search-btn">
                <button type="button" className="nav-right-link">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-mobile-icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link active" href="/home" >
                  {/* <Link className="nav-link dropdown-toggle active" href="/home" > */}
                    Home
                  </Link>
                  
                </li>

                <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    Taxi
                  </Link>
                 
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    Service
                  </Link>
                 
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    Pages
                  </Link>
                 
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    Blog
                  </Link>
                  
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact</Link>
                </li>
              </ul>

              <div className="nav-right">
                <div className="search-btn">
                  <button type="button" className="nav-right-link">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="nav-right-btn mt-2">
                  <Link href="#" className="theme-btn">
                    <span className="fas fa-taxi"></span>Book A Taxi
                  </Link>
                </div>
                <div className="sidebar-btn">
                  <button type="button" className="nav-right-link">
                    <i className="fas fa-bars-filter"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="search-area">
              <form action="#">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Type Keyword..." />
                  <button type="submit" className="search-icon-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>

    </header>
  );
}
