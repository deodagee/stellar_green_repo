import React from "react";
import Image from "next/image";
import styles from "@/styles/footer.module.css"


function Footer () { 


return (

    <>
<div className={styles.footer_parent}>
<div className={styles.wrapper}>

<ul className={styles.first_section}>

  <li className={styles.avatar_and_contact}>
  <Image
    alt="image6"
    className={styles.avatar}
    width={44}
    height={44}
    src={"/logored.png"}
    >
  </Image>
  <p class={styles.astrum_bottom_name}>Astrum Stellar</p>
  <button className={styles.contact_button}>
  <p class={styles.contact_paragraph}> Contact</p>
  </button>
  </li>
<li>
<div className={styles.pages_section_bottom}>
  <h1>Pages</h1>
  <p class={styles.open_ai}>Open Ai</p>
  <p class={styles.blender_3d}> Blender 3D</p>
   <p class={styles.visual_studio}>Visual Studio </p>
   <p class={styles.fl_stufio}>Fl Studio </p>
   </div>
   </li>

<li>
   <div className={styles.links_section_bottom}>
  <h1>Helful Links</h1>
  <p class={styles.open_ai}>Open Ai</p>
  <p class={styles.blender_3d}> Blender 3D</p>
   <p class={styles.visual_studio}>Visual Studio </p>
   <p class={styles.fl_stufio}>Fl Studio </p>
   </div>
   </li>

<li>
   <div className={styles.sevices_section_bottom}>
  <h1>Services</h1>
  <p class={styles.open_ai}>Open Ai</p>
  <p class={styles.blender_3d}> Blender 3D</p>
   <p class={styles.visual_studio}>Visual Studio </p>
   <p class={styles.fl_stufio}>Fl Studio </p>
   </div>
   </li>

  </ul>

  <div class={styles.seperator_line}></div>

  
  <ul className={styles.second_section}>

    <li className={styles.img_wrapper}>
  <Image
    alt="image1"
    className={styles.image1}
    width={44}
    height={44}
    src={"/upwork.jpg"}
    >
  </Image>

  <Image
    alt="image2"
    className={styles.image1}
    width={44}
    height={44}
    src={"/dribble.jpg"}    
    >
  </Image>

  <Image
    alt="image3"
    className={styles.image1}
    width={44}
    height={44}
    src={"/indeed.jpg"}
    >
  </Image>

  <Image
    alt="image4"
    className={styles.image1}
    width={44}
    height={44}
    src={"/soundcloud.jpg"}
    >
  </Image>
  </li>
  <li className={styles.img_foot}>
    <p>© Photo, Inc. 2019. We love our users!</p>
  </li>
  </ul>

  </div>
</div>



    
    </>

)


}

export default Footer;