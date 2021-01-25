import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Vue.js</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <div className='container-fluid'>
        <div className={`row py-2 text-center ${styles.bg_success}`}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <span className= {styles.text_one}>You’re browsing the documentation for v2.x and earlier.<a href="https://v3.vuejs.org/" className="text-decoration-none text-light fw-bold"> Click Here</a> for v3.x documentation.</span>
          </div>
        </div>
      </div>
      <div className={`container ${styles.container}`}>
        <div className="row py-2">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <h3 className={`px-4 mb-0 ${styles.logo_h3}`}>Vue.js</h3>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-6">
            <nav className={`navbar navbar-expand-lg ${styles.custom_nav}`}>
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
                <ul className="navbar-nav ml-auto">
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
    </div>
  )
}