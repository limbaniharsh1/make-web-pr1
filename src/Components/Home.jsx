import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="box">
          <div className="main">
            <div className="container">
              <div className="text-content">
                <h3>NEW ARRIVALS</h3>
                <h1>Recycled Journeymen</h1>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>

        {/* seller section */}

        <section>
          <div className="container">
            <div className="seller">
              <h2>Explore Best Sellers</h2>
              <div className="seller-img">
                <div className="seller-box">
                  <div className="seller-img-box1"></div>
                  <h5>classic belt - cognac</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$115.00</p>
                </div>
                <div className="seller-box">
                  <div className="seller-img-box2"></div>
                  <h5>classic belt - black</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$115.00</p>
                </div>
                <div className="seller-box">
                  <div className="seller-img-box3"></div>
                  <h5>journeyman - natural</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$85.00</p>
                </div>
                <div className="seller-box">
                  <div className="seller-img-box4"></div>
                  <h5>standerd mug</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$36.00</p>
                </div>
                <div className="seller-box">
                  <div className="seller-img-box5"></div>
                  <h5>classic belt - cognac</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$120.00</p>
                </div>
                <div className="seller-box">
                  <div className="seller-img-box6"></div>
                  <h5>utility bifold - natural</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$125.00</p>
                </div>
                <div className="seller-box">
                  <div className="seller-img-box7"></div>
                  <h5>journeyman - cognac</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$85.00</p>
                </div>
                <div className="seller-box">
                  <div className="seller-img-box8"></div>
                  <h5>canyon crossbody pack - onyx(waxed canvas)</h5>
                  <h6>TANNER GOODS</h6>
                  <p>$100.00</p>
                </div>
              </div>
              <div className="btn">
              <Link to='/product' className="seller-button">VIEW ALL</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
