import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vue.js</title>
        <link rel="icon" href="/img/favicon.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
      </Head>
      <div className="d-none d-lg-block d-md-block d-sm-none">
        <div className="container-fluid">
          <div className={`row py-2 text-center ${styles.bg_success}`}>
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
              <span className= {styles.text_one}>You’re browsing the documentation for v2.x and earlier.<a href="https://v3.vuejs.org/" className="text-decoration-none text-light fw-bold"> Click Here</a> for v3.x documentation.</span>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className={`container d-flex ${styles.container}`}>
            <a className={`navbar-brand me-auto pt-0 ${styles.logo_text}`} href="#">Vue.Js</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className={`form-group ms-auto me-4 mt-3 mt-lg-0 mt-md-0 ${styles.has_search}`}>
                <span className={`fa fa-search ${styles.form_control_feedback}`}></span>
                <input type="text" className={`form-control ${styles.form_control}`} />
              </div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles.text_item}`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Learn<span className="sr-only">(current)</span></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="navbarDropdownMenuLink">
                    <li className="dropdown-item fw-bold text-secondary">Documentation</li>
                    <li><a className="dropdown-item" href="#">Guide</a></li>
                    <li><a className="dropdown-item" href="#">API</a></li>
                    <li><a className="dropdown-item" href="#">Style Guide</a></li>
                    <li><a className="dropdown-item" href="#">Examples</a></li>
                    <li><a className="dropdown-item" href="#">Cook Book</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li className="dropdown-item fw-bold text-secondary">Video Courses</li>
                    <li><a className="dropdown-item" href="#">Vue Mastery</a></li>
                    <li><a className="dropdown-item" href="#">Vue School</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles.text_item}`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Ecosystem</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li className="dropdown-item fw-bold text-secondary">Help</li>
                    <li><a className="dropdown-item" href="#">Forum</a></li>
                    <li><a className="dropdown-item" href="#">Chat</a></li>
                    <li><a className="dropdown-item" href="#">Meetups</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li className="dropdown-item fw-bold text-secondary">Tooling</li>
                    <li><a className="dropdown-item" href="#">Dev Tools</a></li>
                    <li><a className="dropdown-item" href="#">Vue CLI</a></li>
                    <li><a className="dropdown-item" href="#">Vue Loader</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li className="dropdown-item fw-bold text-secondary">Core Libraries</li>
                    <li><a className="dropdown-item" href="#">Vue Router</a></li>
                    <li><a className="dropdown-item" href="#">Vuex</a></li>
                    <li><a className="dropdown-item" href="#">Vue Server Renderer</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li className="dropdown-item fw-bold text-secondary">News</li>
                    <li><a className="dropdown-item" href="#">Weekly News</a></li>
                    <li><a className="dropdown-item" href="#">Roadmap</a></li>
                    <li><a className="dropdown-item" href="#">Events</a></li>
                    <li><a className="dropdown-item" href="#">Twitter</a></li>
                    <li><a className="dropdown-item" href="#">Blog</a></li>
                    <li><a className="dropdown-item" href="#">Jobs</a></li>
                    <li><a className="dropdown-item" href="#">Dev Community</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.text_item}`} href="#">Team</a>
                </li>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles.text_item}`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Resources</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Partners</a></li>
                    <li><a className="dropdown-item" href="#">Themes</a></li>
                    <li><a className="dropdown-item" href="#">Awesome Vue</a></li>
                    <li><a className="dropdown-item" href="#">Browse Package for Vue</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles.text_item}`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Support Vue</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">One Time Donations</a></li>
                    <li><a className="dropdown-item" href="#">Recurring Pledges</a></li>
                    <li><a className="dropdown-item" href="#">T Shirt Shop</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.text_item}`} href="#">Translation</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="d-block d-lg-none d-md-none d-sm-block">
        <nav className="navbar navbar-dark bg-success">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className={`form-group ms-auto me-4 mt-3 mt-lg-0 mt-md-0 ps-2 ${styles.has_search}`}>
            <span className={`fa fa-search ${styles.form_control_feedback}`}></span>
            <input type="text" className={`form-control ${styles.form_control}`} />
          </div>
          <ul className="nav flex-column mb-2 mb-lg-0 ps-4">
            <li className={`nav-item mt-2 py-2 ${styles.mobile_text_item}`}><span className="text-secondary">Learn</span>
              <ul className="nav">
                <li className= {`nav-item ms-3 py-2 ${styles.mobile_text_item}`}> <span className="text-secondary">Documentation</span>
                  <ul className="nav flex-column">
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Guide</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>API</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Style Guide</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Examples</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Cookbook</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav">
                <li className= {`nav-item ms-3 ${styles.mobile_text_item}`}> <span className="text-secondary">Video Courses</span>
                  <ul className="nav flex-column">
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Vue Mastery</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Vue School</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={`nav-item  ${styles.mobile_text_item}`}><span className="text-secondary">Ecosystem</span>
              <ul className="nav">
                <li className= {`nav-item ms-3 py-2 ${styles.mobile_text_item}`}> <span className="text-secondary">Help</span>
                  <ul className="nav flex-column">
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Forum</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Chat</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Meetups</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav">
                <li className= {`nav-item ms-3 py-2 ${styles.mobile_text_item}`}> <span className="text-secondary">Tooling</span>
                  <ul className="nav flex-column">
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Dev Tools</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Vue CLI</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Vue Loader</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav">
                <li className= {`nav-item ms-3 py-2 ${styles.mobile_text_item}`}> <span className="text-secondary">Core Libraries</span>
                  <ul className="nav flex-column">
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Vue Router</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Vuex</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Vue Server Renderer</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav">
                <li className= {`nav-item ms-3 py-2 ${styles.mobile_text_item}`}> <span className="text-secondary">News</span>
                  <ul className="nav flex-column">
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Weekly News</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Roadmap</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Events</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Twitter</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Blog</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Jobs</a></li>
                    <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Dev Community</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Team</a></li>
            <li className= {`nav-item ms-3 py-2 ${styles.mobile_text_item}`}> <span className="text-secondary">Resources</span>
              <ul className="nav flex-column">
                <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Partners</a></li>
                <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Themes</a></li>
                <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Awesome Vue</a></li>
                <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Browse Packages for Vue</a></li>
              </ul>
            </li>
            <li className= {`nav-item ms-3 py-2 ${styles.mobile_text_item}`}> <span className="text-secondary">Support Vue</span>
              <ul className="nav flex-column">
                <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>One-time Donations</a></li>
                <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Recurring Pledges</a></li>
                <li className="nav-item ms-3"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>T-shirt Shop</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#" className={`nav-link text-secondary ${styles.mobile_text_item}`}>Translate</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}