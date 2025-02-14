import Head from "next/head";
import Script from "next/script";
import React from "react";
import Typed from "typed.js";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content="Nihal Shrivastav| Game Developer" />
        <title>Nihal Shrivastav Portfolio</title>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Custom CSS */}
        <link rel="stylesheet" href="./global.css" />
        
      </Head>

      {/* Navbar */}
      <header id="home">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
          <div className="container">
            <a className="navbar-brand my-1">
            Nihal Shrivastav
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-outline-success"
                href="/img/Nihal_Shrivastav.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div>
        {/* Section 2 */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h2 className="sectionsecondh2tag">
                  HELLO GUEST!
                </h2>
                <p className="sectionsecondhptag">
                "Hello, I'm Nihal Shrivastav, a Game Developer passionate about creating immersive digital experiences."
                </p>
                <p className="sectionsecondhptag">
                "Web development is about transforming your thoughts into digital reality, one line of code at a time."
                </p>
                <a
                  className="btn btn-outline-success"
                  href="/img/Nihal Shrivastav Updated Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
                <a
                  className="btn btn-outline-light"
                  href="/img/Nihal Shrivastav Updated Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>

              <div className="col-md">
                <img
                  className="aiimg"
                  src="/img/1.png"
                  alt="Profile"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </section>
        <hr />

        {/* Section 3: Specializations */}
        <section id="web2" className="sectionthree">
          <div className="container">
            <h2>My Specializations</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="service_box">
                  <div className="thumb">
                    <img src="/img/web-design.png" alt="Web Design Icon" />
                  </div>
                  <div className="info">
                    <h4>Website design</h4>
                    <p>
                      HTML,CSS,JS,VERCEL<br></br>
                      RENDER,MONGODB<br></br>
                      Frontend and Backend.<br></br>
                      Or a completely new task
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="service_box">
                  <div className="thumb">
                    <img src="/img/app-development.png" alt="App Development Icon" />
                  </div>
                  <div className="info">
                    <h4>App Development</h4>
                    <p>
                      Android Studio and Unity<br></br>
                      Java and Compass <br></br>
                      VR and AR
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="service_box">
                  <div className="thumb">
                    <img src="/img/game.png" alt="GAME Design Icon" />
                  </div>
                  <div className="info">
                    <h4>Game Design</h4>
                    <p>
                      Successfully uploaded game to Google Play Store
                      More games to make and upload remaining
                      From designing to development of levels
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="service_box">
                  <a className="hire-btn" href="#sectionthree">
                    hire me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <hr />

        {/* Section 4: About */}
        <section className="sectionthree">
          <div className="container">
            <div id="about">
              <h3 className="threesection">About</h3>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p className="aboutp">
                  Hello, I'm Nihal Shrivastav, and I'm passionate about web and app
                  development. With a strong background in creating innovative and
                  user-friendly websites, I'm dedicated to crafting digital experiences that not
                  only look great but also function seamlessly. I thrive on the
                  ever-evolving nature of web technologies and am committed to
                  staying at the forefront of this dynamic field. Join me on this
                  journey as we explore the exciting world of web development
                  together.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <p className="aboutp">
                  My web development skills encompass a wide range of technologies
                  and practices, making me well-equipped to tackle diverse
                  projects and challenges.
                  <br />
                  Interest:Game developement<br />
                  Full stack development <br />
                  Artificial Intelligence <br />
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <hr />

        {/* Section 5: Contact */}
        <footer className="sectionthree footer">
          <div className="container">
            <div id="contact">
              <h3 className="threesection">Contact</h3>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <h4 className="talk">Let&apos;s Talk</h4>
                  <div className="call">
                    <img src="/img/call.png" alt="Phone" />
                    <a className="phone-link" href="+918521874011">
                      +918521874011
                    </a>
                  </div>
                  <div className="info">
                    <h4>Official Email</h4>
                    <a href="mailto:nihalrs24@gmail.com">nihalrs24@gmail.com</a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <form
                    action=""
                    method="POST"
                    className="contact-form contact-form mt-30"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                          />
                          <span className="alert-error"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            type="email"
                          />
                          <span className="alert-error"></span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="text"
                          />
                          <span className="alert-error"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group comments">
                          <textarea
                            className="form-control"
                            id="comments"
                            name="comments"
                            placeholder="Tell Us About Project *"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                          <i className="fa fa-paper-plane" ></i> Get in Touch
                        </button>
                      </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                      <div id="message" className="alert-msg"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
        </footer>
        <hr />

        {/* Navbar and Social Media Footer */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <p className="my-2">
                  &#169; Nihal Shrivastav Portfolio 
                </p>
                <p>Designed By - Nihal Shrivastav</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* External Scripts */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />

      {/* Load Typed.js once */}
      {/*<Script
        src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"
        strategy="afterInteractive"
      />*/}
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

      {/* Initialize Typed.js for various elements */}
      <Script id="typed-init" strategy="afterInteractive">
        {`
          new Typed(".auto-type", {
            strings: ["Have a Great Day!", "Download Resume"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
          });
          new Typed(".auto-types", {
            strings: [
              "I'm Nihal, a web developer with a passion for crafting digital experiences. I specialize in building dynamic websites that not only function flawlessly but also inspire and engage users. I'm here to turn your digital ideas into captivating online experiences. Welcome to my creative journey in web development."
            ],
            typeSpeed: 20,
            backSpeed: 30,
            loop: true,
          });
          new Typed(".auto", {
            strings: [
              "Web development is about transforming your thoughts and ideas into a digital reality, one line of code at a time."
            ],
            typeSpeed: 20,
            backSpeed: 30,
            loop: true,
          });
          new Typed(".auto-types", {
            strings: ["Let's Connect and Create Something Amazing Together."],
            typeSpeed: 60,
            backSpeed: 70,
            loop: true,
          });
        `}
      </Script>

      {/* Custom Scripts */}
      
      <Script src="/service.js" strategy="afterInteractive" />
      <Script src="/art.js" strategy="afterInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
};

export default Home;