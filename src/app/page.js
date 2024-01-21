import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Creative Thoughts Agency
          </h1>
          <p className={styles.desc}>lorem ipsum dolor </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn more</button>
            <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" fill  className={styles.brand}/>

          </div>

        </div>
        <div className={styles.imgContainer}>
      <Image src="/hero.gif" width={400} height={400} className={styles.heroImg}/>
        </div>
    
      </div>
 
  );
}
