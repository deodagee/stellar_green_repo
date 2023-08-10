import React from "react";
import styles from "@/styles/header.module.css"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";




function Header() {






  /*
  
  const [ menulist, setmenulist ] = useState (false) ;
  
    window.addEventListener('scroll', () => {
      const menulist = document.querySelector('.menulist');
      if (window.scrollY >= window.innerHeight * 0.3) {
        menulist.style.zIndex = '10'; 
        menulist.style.zIndex = '1';
      }
    });
  
  
      const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen((prevState) => !prevState);
    };
  
  
    
    */




  return (

    <>
      <div className={styles.parent}>

        <div className={styles.parent_wrapper}>




          <ol className={styles.logo_and_info}>

            <li className={styles.sample_logo}>
              <Image
                className="w-8 h-7"
                alt="logo"
                width={50}
                height={50}
                src={"/logored.png"}
              >
              </Image>
            </li>

            <li className={styles.signature}>
              <Image
                className="w-30 h-7"

                aria-label="signature"
                alt="signature"
                width={100}
                height={100}
                src={"/signaturewhite.png"}
              >
              </Image>
            </li>

            <li className={styles.promo_list}>

              <p className={styles.promo1}>
                Private Domains
              </p>
              <p className={styles.promo2}>
                Dall-E Engines
              </p>
              <p className={styles.promo3}>
                3D Renders
              </p>
              <p className={styles.promo4}>
                Wix?
              </p>
              <p className={styles.promo4}>
                Hostgator?
              </p>
            </li>

            <li className={styles.buttons} >
              <button  className={styles.register_button}>
                <p className={styles.register}>Register</p>
              </button>
              <button className={styles.login_button}>
                <p className={styles.register}>Login</p>
              </button>
            </li>
            
          </ol>

          







          <ol className={styles.menubar}>


            <li className={styles.menulist}>
              <Link legacyBehavior
                href="/"
              >
                <span className={styles.features}> <p> Home </p>
                </span>
              </Link >

              <span className={styles.menu_list_seperator}></span>


              <Link legacyBehavior
                href="/services"
              >
                <span className={styles.features}> <p> Services </p>
                </span>

              </Link>

              <span className={styles.menu_list_seperator}></span>



              <Link legacyBehavior
                href="/pricing"
              >
                <span className={styles.features}> <p> Pricing </p>
                </span>

              </Link>

              <span className={styles.menu_list_seperator}></span>



              <Link legacyBehavior
                href="/projects"
              >
                <span className={styles.features}> <p> Projects </p>
                </span>

              </Link>

              <span className={styles.menu_list_seperator}></span>



              <Link legacyBehavior
                href="/code"
              >
                <span className={styles.features}> <p> Source Code </p>
                </span>

              </Link>
            </li>

          </ol>


        </div>
      </div>
    </>
  )
}

export default Header;