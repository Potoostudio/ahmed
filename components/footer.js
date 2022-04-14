import React from "react"

export default function Contact() {
    return (
        <>
            <div className="container contact">
                <div className="row justify-content-center">
                    <div className="col-10 pt-3">
                        <h1 className="info text-center">Let's start a project!</h1>
                    </div>
                    <div className="col-10">
                        <ul className="list">
                            <li className="item text-center">
                            <h5 className="h5-title">Address</h5>
                            <a href="https://goo.gl/maps/jXhKZM5Y3GxwviVv9" target="_blank" rel="noreferrer">
                                <p className="address item-p">
                                    Denver, CO 80222
                                </p>
                            </a>
                            </li>
                            <li className="item text-center">
                            <h5 className="h5-title ">Email</h5>
                            <a href="mailto:ahmedalf75@gmail.com">
                                <p className="email item-p">
                                    ahmedalf75@gmail.com
                                </p>
                            </a>
                            </li>
                            <li className="item text-center">
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