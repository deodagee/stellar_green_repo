import React from "react";
import Image from "next/image";
import styles from "@/styles/components/body.module.css"
import Link from "next/link";



/* 
  <defs>
    <image id="myImage" width="200" height="200" xlink:href="/logo.png" />
  </defs>
  
  <use xlink:href="/logo.png" />
  */

function Body() {







  return (


    <> <div className={styles.whole}>
      <div className={styles.parent_wrapper}>

        <ul className={styles.credentials}>

          <li className={styles.my_logo}>
            <Image
              className={styles.logo}
              width={50}
              height={50}
              alt="logo"
              src="/logored.png"
            >
            </Image>
          </li>

          <li className={styles.visualstudio_logo}>
            <Image
              className={styles.logo}
              width={50}
              height={50}
              alt="logo"
              src="/visualstudio.jpg"
            >
            </Image>
          </li>

          <li className={styles.photoshop_logo}>
            <Image
              className={styles.logo}
              width={50}
              height={50}
              alt="logo"
              src="/photoshop.jpg"
            >
            </Image>
          </li>

          <li className={styles.soundcloud_logo}>
            <Image
              className={styles.logo}
              width={50}
              height={50}
              alt="logo"
              src="/soundcloud.jpg"
            >
            </Image>
          </li>

          <li className={styles.upwork_logo}>
            <Image
              className={styles.logo}
              width={50}
              height={50}
              alt="logo"
              src="/upwork.jpg"
            >
            </Image>
          </li>

          <li className={styles.prisma_logo}>
            <Image
              className={styles.logo}
              width={50}
              height={50}
              alt="logo"
              src="/prisma.jpg"
            >
            </Image>
          </li>



        </ul>

        <div className={styles.ellipse_wrapper}>
        </div>

        <div class={styles.tabber}>
          <Image
            width={50}
            height={50}
            alt="avatar"
            src="/Deo.jpg"
            className={styles.avatar_image}></Image>

          <ul className={styles.body_list}>


            <li>
              <div class={styles.name}>Astrum Stellar</div>
            </li>

            <li>
              <div
                class={styles.description}
              >
                <p>
                If you&apos;re seeking website building and app development services to establish your online presence, look no further, there&apos;s help available! I specialize in utilizing the most cutting-edge, meticulously tailored systems to meet your specific aspirations. All technicalities aside, I can assure the creation of dynamically immersive websites and application that resonate with your target audience at the intended level. I deliver the most cost-effective solutions that challenge the prices and security measures of mainstream applications, bringing you power to own and monetize your own sites/apps. Why not forge a technologically simplified tech experience, empowering the individual&apos;s ability to access the realm of e-commerce enterprise options easily and affordably.
                </p>
              </div>
            </li>

            <li className={styles.tabber_buttons}>
              <button >

                <p class={styles.services_more_button}>Services {" >"}</p>
              </button>
              <button >

                <p class={styles.prices_more_button}>Prices {" >"}</p>
              </button>
              <button >

                <p class={styles.contact_more_button}>Contact {" >"}</p>
              </button>
            </li>

          </ul>
        </div>





        <div className={styles.lower_div}>

          <div>

            <ul className={styles.promo_messages} >
              <li className={styles.promo_message1}>
                <Link
                  href="/pricing"
                >
                  <p>3-5 Day Turnaround Time For Your Projects</p>
                </Link>
              </li>

              <li className={styles.promo_message2}>
                Apply the Promo Code: &quot;46474892&quot; To the order to get 60% Percent off the whole deal.
              </li>
            </ul>
          </div>

          <div className={styles.tables}>

            <ol className={styles.div1}>
              <Image
                className={styles.staticthumbnail}
                alt="static"
                src="/staticrep.jpg"
                width={100}
                height={100}
              >
              </Image>
              <h1 className={styles.static_sites_title}>Static Sites</h1>

              <ul className={styles.static_sites_list}>
                <li>
                  Original Js Code: *Base price of the project*
                </li>
                <li>
                  Storage Space: 40 GB
                </li>
                <li>
                  Ram: 1.3 GB
                </li>
                <li>
                  Bandwith: Unmetered
                </li>
                <li>
                  Ip: Dedicated Ip
                </li>
                <li>
                  CDN: Cloudflare
                </li>
                <li>
                  Deployment Sytem: Node.Js
                </li>
                <li>
                  HOSTING: VPS, Fully Redundant Network
                </li>
                <li>
                  CMS:No Integrated CMS, only 1 form per page
                </li>
                <li>
                  Web Pages (Page Links): 3 Pages Min At No Extra Cost
                </li>
              </ul>
            </ol>



            <ol className={styles.div2}>
              <Image
                className={styles.dynamicthumbnail}
                alt="static"
                src="/dynamicrep.jpg"
                width={100}
                height={100}
              >
              </Image>
              <h1 className={styles.dynamic_sites_title}>Dynamic Sites</h1>
              <ul className={styles.dynamic_sites_list}>
                <li>
                  Original Js Code: *Base price of the project*
                </li>
                <li>
                  Storage Space: 40 GB
                </li>
                <li>
                  Ram: 1.3 GB
                </li>
                <li>
                  Bandwith: Unmetered
                </li>
                <li>
                  Ip: Dedicated Ip
                </li>
                <li>
                  CDN: Cloudflare
                </li>
                <li>
                  Deployment Sytem: Node.Js
                </li>
                <li>
                  HOSTING: VPS, Fully Redundant Network
                </li>
                <li>
                  CMS:No Integrated CMS, only 1 form per page
                </li>
                <li>
                  Web Pages (Page Links): 3 Pages Min At No Extra Cost
                </li>
              </ul>
            </ol>



            <ol className={styles.div3}>
              <Image
                className={styles.ecommercethumbnail}
                alt="static"
                src="/ecommercerep.jpg"
                width={100}
                height={100}
              >
              </Image>
              <h1 className={styles.ecommerce_sites_title}>Ecommerce Sites</h1>

              <ul className={styles.ecommerce_sites_list}>
                <li>
                  Original Js Code: *Base price of the project*
                </li>
                <li>
                  Storage Space: 40 GB
                </li>
                <li>
                  Ram: 1.3 GB
                </li>
                <li>
                  Bandwith: Unmetered
                </li>
                <li>
                  Ip: Dedicated Ip
                </li>
                <li>
                  CDN: Cloudflare
                </li>
                <li>
                  Deployment Sytem: Node.Js
                </li>
                <li>
                  HOSTING: VPS, Fully Redundant Network
                </li>
                <li>
                  CMS:No Integrated CMS, only 1 form per page
                </li>
                <li>
                  Web Pages (Page Links): 3 Pages Min At No Extra Cost
                </li>
              </ul>
            </ol>

          </div>
        </div>
      </div>

    </div>



    </>
  )
}

export default Body;