import React from "react";
import './Home.css';

const Home = () => {
    return(
        <div>
        <header className='App-header'>
          <nav className="navbar">
            <h1 className="logo">PRODAKU</h1>
            <ul className="link-nav">
              <li class="active"><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className='product'>
          <div className="main-data">
            <h1>INI HOME PAGE</h1>
            <button><a href="/product">Produk List</a></button>
          </div>
          </section>
          <footer>
            <div className="foot-content">
              <h2>PRODAKU</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis id quo quidem laboriosam!</p>
              <ul className="social">
                  <li><a href="#">facebook</a></li>
                  <li><a href="#">instagram</a></li>
                  <li><a href="#">twitter</a></li>
              </ul>
            </div>
            <div className="foot-end">
              <p>copyright &copy;2022 PRODAKU design with <span>Love</span></p>
            </div>
          </footer>
        </main>
      </div>
    )
}

export default Home;