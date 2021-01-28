<div className="d-none d-lg-block d-md-block d-sm-none">
        <div className="collapse" id="navbarToggleExternalContent">
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
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
          </nav>
        </div>
      </div>
      // desktop header
      <div className="d-block d-lg-none d-md-none d-sm-block">
        <nav className="navbar navbar-dark bg-success">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className={`form-group  mt-3 mt-lg-0 mt-md-0 ${styles.has_search}`}>
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
  // mobile header