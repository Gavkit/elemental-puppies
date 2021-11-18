import React from "react";
import { Navbar } from '../../common/index'

import './Header.css';

function Header() {
    return(
        <section className={"header"}>
            <section className={"header-top"}>
                <section className={"header-top__name"}>
                    <a href="/" className="header-name">Elemental Puppies</a>
                </section>
                <section className={"header-top__navbar"}>
                    <Navbar />
                </section>
            </section>
            <hr className="header-hr"/>
        </section>
    )
}

export default  Header;