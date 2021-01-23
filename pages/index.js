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
      </Head>
      <div className='container-fluid'>
        <div className={`row py-2 text-center ${styles.bg_success}`}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <span className= {styles.text_one}>You’re browsing the documentation for v2.x and earlier.<a href="https://v3.vuejs.org/" className="text-decoration-none text-light fw-bold"> Click Here</a> for v3.x documentation.</span>
          </div>
        </div>
      </div>
      <div className={`container ${styles.container}`}>
        <div className="row py-3">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <h3 className={`px-4 ${styles.logo_h3}`}>Vue.js</h3>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8">
            <nav className="navbar navbar-expand-lg">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <form className="d-flex">
                  <div className="input-group border rounded-pill">
                    <div className="input-group-prepend border-0">
                      <button id="button-addon4" type="button" className="btn btn-link text-info"><i className="fa fa-search"></i></button>
                    </div>
                    <input type="search" aria-describedby="button-addon4" className={`form-control bg-none border-0 ${styles.form_control} ${styles.form_control_focus}`} />
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}