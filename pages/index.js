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
    <div className="container pt-lg-0 pt-5 bg-dark">
      <div className="row justify-content-center pt-5 m-0 name-title-m">
        <div className="col-11">
          <h1 className="main-title text-center">
            Building brands through <span className="main-title-span">design</span> & <span className="main-title-span">technology</span>
          </h1>
        </div>
        <div className="col-10">
          <div className="row justify-content-around pt-5 mt-5">
            <div className="col-3 col-line p-relative">
              <h5 className="main-list-item">
                Design <sup>01</sup>
              </h5>
              <ul className="list">
                <li className="item">
                  XD
                </li>
                <li className="item">
                  Illustrator
                </li>
                <li className="item">
                  Photoshop
                </li>
                <li className="item">
                  Sketch
                </li>
                <li className="item">
                  Figma
                </li>
              </ul>
            </div>
            <div className="col-3 col-line p-relative">
              <h5 className="main-list-item">
                Code <sup>02</sup>
              </h5>
              <ul className="list">
                <li className="item">
                  HTML
                </li>
                <li className="item">
                  CSS
                </li>
                <li className="item">
                  JavaScript
                </li>
                <li className="item">
                  React
                </li>
                <li className="item">
                  Nextjs
                </li>
              </ul>
            </div>
            <div className="col-3 col-line p-relative">
              <h5 className="main-list-item">
                Work <sup>03</sup>
              </h5>
              <ul className="list">
                <li className="item">
                  Brands
                </li>
                <li className="item">
                  Web Design
                </li>
                <li className="item">
                  Web Development
                </li>
                <li className="item">
                  Ditigal Material
                </li>
                <li className="item">
                  Printed Material
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center pt-5">
        <div className="col-11">
          <h1 className="project-title">
            latest project
          </h1>
        </div>
        <div className="col-11">
          <div className="xd text-center">
          <iframe className="xd-iframe" width="100%" height="100%" src="https://xd.adobe.com/embed/19ce84da-c945-45a1-8068-947f64eba518-4c9d/" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-4 col-sm-11 pt-8rem">
          <h3 className="Links h3-border">
            Websites
          </h3>
          <ul className="list links">
            <li className="item">
              <a href="https://potoo.studio/" className="d-flex" target="_blank" rel="noreferrer">Potoo Studio <span className="ml-auto website-framework">Next.js, Sass</span></a>
            </li>
            <li className="item">
              <a href="https://serpentix.com/" className="d-flex" target="_blank" rel="noreferrer">Serpentix <span className="ml-auto website-framework">WordPress</span></a>
            </li>
            <li className="item">
              <a href="https://www.jaeger-aeration.com/" className="d-flex" target="_blank" rel="noreferrer">Jaeger Aeration <span className="ml-auto website-framework">HTML, CSS, JavaScript</span></a>
            </li>
            <li className="item">
              <a href="https://www.serpentixfabrication.com/" className="d-flex" target="_blank" rel="noreferrer">Serpentix Fabrication<span className="ml-auto website-framework">Next.js, Sass</span></a>
            </li>
            <li className="item">
              <a href="https://www.redscheduling.com" className="d-flex" target="_blank" rel="noreferrer">Red Scheduling<span className="ml-auto website-framework">React, Sass</span></a>
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
      </div>
    </div>
    </>
  )
}
