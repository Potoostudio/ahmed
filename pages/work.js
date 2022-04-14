import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Work() {
  return (
    <>
    <Head>
        <title>Work</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
        <div className="container pt-8rem pb-8rem bg-dark px-5rem">
            <div className="row justify-content-center pt-8rem">
                <div className="col-11">
                    <h1 className="custom-h1 text-center">
                        Websites
                    </h1>
                </div>
                    <div className="col-2 col-sm-12 pt-5 mx-5">
                        <div className="image-cover">
                            <p className="project-sec">
                                <span className="project-name">POTOO</span>  <span className="details">Nextjs, Sass</span>
                            </p>
                            <Link href="https://www.potoo.studio">
                                <a className="link"></a>
                            </Link>
                            <Image
                            height="650px"
                            width="299px"
                            src="/Potoo.jpg"
                            alt="potoo"
                            />
                        </div>
                    </div>
                <div className="col-2 col-sm-12 pt-5 mx-5 pt-sm-5rem">
                    <div className="image-cover">
                        <p className="project-sec">
                            <span className="project-name">Serpentix</span>  <span className="details">WordPress</span>
                        </p>
                        <Link href="https://www.serpentix.com">
                            <a className="link"></a>
                        </Link>
                        <Image
                        height="650px"
                        width="299px"
                        src="/Serpentix.jpg"
                        alt="potoo"
                        />
                    </div>
                </div>
                <div className="col-2 col-sm-12 pt-5 mx-5 pt-sm-5rem">
                    <div className="image-cover">
                        <p className="project-sec">
                            <span className="project-name">Action Blower</span>  <span className="details">React, Sass</span>
                        </p>
                        <Link href="https://action-blower-app.herokuapp.com/">
                            <a className="link"></a>
                        </Link>
                        <Image
                        height="650px"
                        width="299px"
                        src="/action-blower.jpg"
                        alt="potoo"
                        />
                    </div>
                </div>
                <div className="col-2 col-sm-12 pt-5 mx-5 pt-sm-5rem">
                    <div className="image-cover">
                        <p className="project-sec">
                            <span className="project-name">Red Scheduling</span>  <span className="details">Nextjs, Sass</span>
                        </p>
                        <Link href="https://www.red-scheduling.com">
                            <a className="link"></a>
                        </Link>
                        <Image
                        height="650px"
                        width="299px"
                        src="/red-scheduling.jpg"
                        alt="potoo"
                        />
                    </div>
                </div>
                <div className="col-2 col-sm-12 pt-5 mx-5 pt-sm-5rem">
                    <div className="image-cover">
                        <p className="project-sec">
                            <span className="project-name">Serpentix Fabrication</span>  <span className="details">Nextjs, Sass, Node</span>
                        </p>
                        <Link href="https://www.serpentix.com">
                            <a className="link"></a>
                        </Link>
                        <Image
                        height="650px"
                        width="299px"
                        src="/Serpentix-fab.jpg"
                        alt="potoo"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
