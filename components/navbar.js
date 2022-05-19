import React from "react"
import Link from 'next/link'


function Navbar() {
  
      return (
        <>
        <div className="nav">
          <div className="logo-box">
            <Link href="/">
                <a className="potoo-logo-a d-block">
                    <h5 className="logo-type">
                        Ahmed Alfargalla
                    </h5>
                </a>
            </Link>
            </div>
            {/* <div className="menu">
                <ul className="list">
                    <li className="item">
                        <Link href="/work">
                            <a>work</a>
                        </Link>
                    </li>
                    <li className="item">
                        <Link href="/about">
                            <a >about</a>
                        </Link>
                    </li>
                </ul>
            </div> */}
        </div>
      </>
      );
  }

export default Navbar;