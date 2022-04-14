import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
    <Head>
        <title>Ahmed Alfargalla</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
    <div className="container p-5 pt-lg-0 bg-dark about-container">
      <div className="row justify-content-around">
          <div className="col-4 col-sm-10 pt-5">
              <h1 className="about-h1 pt-5 pt-sm-3">
                  This is me on the top of the rockies thinking of the color scheme of the new project I'm wokring on.
              </h1>
          </div>
          <div className="col-6 col-sm-10">
              <Image
              src="/ahmed-picture.jpg"
              height="500px"
              width="500px"
              alt="ahmed's picture"
              />
          </div>
      </div>
      <div className="row pt-8rem pb-8rem justify-content-center">
          <div className="col-8 col-sm-12 pt-5 pb-8rem">
            <h2 className="about-h2 pt-5">
                <span className="custom-span">A tiger cub.</span> <br/> The first art I made for my little sister was for her school homework. I remember it as it was yesterday. Since then, I loved learning about all the aspects of art, from sketching, drawing, writing, and photography.
            </h2>
            <h2 className="about-h2 pt-5">
                I'm extremely inspired by people's stories and goals. Every story is unique and must design differently than others. From a brand strategy, logo, graphics, website, etc. With several years of experience in designing and programming. I define myself as a product designer for small to medium size clients.
            </h2>
            <h2 className="about-h2 pt-5">
                My learning motivation comes from the challenges I take. I love to do interesting things that matter and make changes in clients' lives. Let me uniquely tell your story. Away crafted for you and your business.
            </h2>
          </div>
      </div>
    </div>
    </>
  )
}
