<div className={`container ${styles.container}`}>
<div className="row py-3">
  <div className="col-lg-4 col-md-4 col-sm-6">
    <h3 className={`px-4 ${styles.logo_h3}`}>Vue.js</h3>
  </div>
  <div className="col-lg-8 col-md-8 col-sm-6 bg-info">
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
        <div className={`mx-3 ${styles.main}`}>
          <div className={`form-group ${styles.has_search}`}>
            <span className={`fa fa-search ${styles.form_control_feedback}`}></span>
            <input type="text" className={`form-control ${styles.form_control}`} />
          </div>
        </div>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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


/* Layout */

@media (min-width: 1400px){ .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1783px!important;
  }
  }
  
  
  /* Header */
  
  .main {
    width: 24%;
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
    color: #aaa;
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
/* Utilities */
.bg_success{
  background: #42b983;
}
.text_one{
  color: #d6ffec;
}