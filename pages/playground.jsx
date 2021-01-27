<div className="container">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>


// previous index.js header code
<div className='container-fluid'>
        <div className={`row py-2 text-center ${styles.bg_success}`}>
          <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            <span className= {styles.text_one}>You’re browsing the documentation for v2.x and earlier.<a href="https://v3.vuejs.org/" className="text-decoration-none text-light fw-bold"> Click Here</a> for v3.x documentation.</span>
          </div>
        </div>
      </div>
      <div className={`container ${styles.container}`}>
        <div className="row py-2">
          <div className="col-4 col-lg-4 col-md-4 col-sm-6">
            <h3 className={`px-4 mb-0 ${styles.logo_h3}`}>Vue.js</h3>
          </div>
          <div className="col-8 col-lg-8 col-md-8 col-sm-12">
            <nav className={`navbar navbar-expand-lg d-flex align-items-end flex-column ${styles.custom_nav}`}>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <div className={`mx-3 ${styles.main}`}>
                  <div className={`form-group ${styles.has_search}`}>
                    <span className={`fa fa-search ${styles.form_control_feedback}`}></span>
                    <input type="text" className={`form-control ${styles.form_control}`} />
                  </div>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className={`nav-link ${styles.text_item}`} href="#">Learn<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${styles.text_item}`} href="#">Ecosystem</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${styles.text_item}`} href="#">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${styles.text_item}`} href="#">Resources</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${styles.text_item}`} href="#">Support Vue</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${styles.text_item}`} href="#">Translation</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> 
        </div>
      </div>

      


      @media (min-width: 1400px){ .container,
        .container-lg,
        .container-md,
        .container-sm,
        .container-xl,
        .container-xxl {
          max-width: 1783px!important;
        }
        }
      
        @media screen and (max-width: 768px){
       
        }
        
        
        /* Header */
        
        .main {
          width: 22%;
        }
        .has_search .form_control {
          padding-left: 2.375rem;
        }
        .form_control{
          border: 1px solid #e3e3e3!important;
          border-radius: 70px!important;
          height: 29px;
        }
        .form_control:focus {
          color: #212529;
          background-color: #fff;
          border-color: darkcyan!important;
          outline: 0;
          box-shadow: none!important;
        }
        .has_search .form_control_feedback {
          position: absolute;
          z-index: 2;
          display: block;
          width: 2.375rem;
          height: 2.375rem;
          line-height: 1.8rem;
          text-align: center;
          pointer-events: none;
          color:#e3e3e3;
        }
        
        .logo_h3{
          font-family: 'Dosis',sans-serif;
        }
        .text_item{
          color: #304455;
          font-size: 15px;
        }
        .text_item:hover{
          color: #304455;
        }
      
        .custom_nav{
          padding-top: 0!important;
        }
      
      /* Utilities */
      .bg_success{
        background: #42b983;
      }
      .text_one{
        color: #d6ffec;
        font-size: 15px;
      }

  // header css