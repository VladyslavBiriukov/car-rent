import React from "react";
import { Link } from "react-router-dom";

import styles from './Hero.module.scss';

import BgShape from "../../images/hero/hero-bg.png";
import HeroCar from "../../images/hero/main-car.png";

import { IconChevronRight } from "@tabler/icons-react";

export const Hero = () => {
    //       const scrollToTop = () => {
    //     window.scrollTo({ top: (0, 0), behavior: "smooth" });
    //   };
    return (
        <>
            <section id="home" className={styles.heroSection}>
                <div className={styles.container}>
                    <img className={styles.bgShape} src={BgShape} alt="bg-shape" />
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h4 className={styles.heroTextH4}>Plan your trip now</h4>
                            <h1 className={styles.heroTextH1}>
                                Save <span className={styles.heroTextSpan}>big</span> with our car rental
                            </h1>
                            <p className={styles.heroTextP}>
                                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                                flexible pick-up options and much more.
                            </p>
                        </div>
                        
                            <Link
                                className={styles.heroBtn}
                                to="/catalog"
                            >
                                Look at our catalog &nbsp; <IconChevronRight />
                            </Link>
                        {/* img */}
                        <img
                            src={HeroCar}
                            alt="car-img"
                            className={styles.carImg}
                        />
                    </div>
                </div>

                {/* page up */}
                {/* <div
                    onClick={scrollToTop}
                    className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                >
                    ^
                </div> */}
            </section>
        </>
    )
};