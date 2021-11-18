import React from "react";

import './Footer.css';

function Footer () {
    return(
        <section className="footer">
            <hr className="footer-separator" />
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Self Taught Developer:
                    </section>
                    <section className="footer-info__name">
                        RoboTiberius (RoboTech)
                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__email">
                        RoboTiberius@gmail.com
                    </section>
                    <section className="footer-info__terms">
                        Terms and Conditions
                        <br />
                        Copyright
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Footer;