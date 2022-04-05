import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>Ahmed Alfargalla</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
    <div className="container p-5 pt-lg-0">
      <div className="row justify-content-center m-0 name-title-m">
        <div className="col-12 text-center">
          <h1 className="name text-uppercase">Ahmed Alfargalla</h1>
        </div>
        <div className="col-12">
          <h3 className="title text-center">
          UI Designer | Front-end Developer
          </h3>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-12">
          <h3 className="h3-border">
            Brand | Design | Web
          </h3>
          <div className="xd text-center">
          <iframe width="1366" height="821" src="https://xd.adobe.com/embed/19ce84da-c945-45a1-8068-947f64eba518-4c9d/" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-4 col-sm-11 pt-8rem">
          <h3 className="Links h3-border">
            Websites
          </h3>
          <ul className="list links">
            <li className="item">
              <a href="https://serpentix.com/" className="d-flex" target="_blank" rel="noreferrer">Serpentix <span className="ml-auto website-framework">WordPress</span></a>
            </li>
            <li className="item">
              <a href="https://www.jaeger-aeration.com/" className="d-flex" target="_blank" rel="noreferrer">Jaeger Aeration <span className="ml-auto website-framework">HTML, CSS, JavaScript</span></a>
            </li>
            <li className="item">
              <a href="https://www.redscheduling.com" className="d-flex" target="_blank" rel="noreferrer">Red Scheduling<span className="ml-auto website-framework">React, Sass</span></a>
            </li>
            <li className="item">
              <a href="https://www.serpentixfabrication.com/" className="d-flex" target="_blank" rel="noreferrer">Serpentix Fabrication<span className="ml-auto website-framework">Next.js, Sass</span></a>
            </li>
            <li className="item">
              <a href="https://action-blower-app.herokuapp.com/" className="d-flex" target="_blank" rel="noreferrer">Action Blower<span className="ml-auto website-framework">React, Node.js, Express.js, Sass</span></a>
            </li>
          </ul>
        </div>
        <div className="col-4 col-sm-11 pt-3">
          <h3 className="Links h3-border">
            Design
          </h3>
          <ul className="list links">
            <li className="item">
              <a href="https://xd.adobe.com/view/fac1e2d1-bc47-4053-9313-d3049f0136e2-af92/" className="" target="_blank" rel="noreferrer">Logos</a>
            </li>
            <li className="item">
              <a href="https://xd.adobe.com/view/58ea68a4-9599-4386-ad58-29f37aa587d7-0db9/" className="d-flex" target="_blank" rel="noreferrer">Digital Screen Stretch</a>
            </li>
            <li className="item">
              <a href="https://xd.adobe.com/view/fe40fd95-c2cf-449a-8222-2843e149d514-ab13/?fullscreen" className="d-flex" target="_blank" rel="noreferrer">Digital Screen</a>
            </li>
          </ul>
        </div>
        <div className="col-2 col-sm-10 pt-3">
          <h3 className="info h3-border">Information</h3>
          <ul className="list">
            <li className="item">
              <h5 className="h5-title">Address</h5>
              <a href="https://goo.gl/maps/jXhKZM5Y3GxwviVv9" target="_blank" rel="noreferrer">
                <p className="address item-p">
                  Denver, CO 80222
                </p>
              </a>
            </li>
            <li className="item">
              <h5 className="h5-title ">Email</h5>
              <a href="mailto:ahmedalf75@gmail.com">
                <p className="email item-p">
                  ahmedalf75@gmail.com
                </p>
              </a>
            </li>
            <li className="item">
              <h5 className="h5-title">Phone</h5>
              <a href="tel:+13202604416">
                <p className="phone item-p">
                  320.260.4416
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
