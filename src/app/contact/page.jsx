import styles from './contact.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Contact page",
  description: "Next.14 contact page description",
};
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt='contact image' fill className={styles.image}/>
      
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder='Name and Surname' name="names" id="" />
          <input type="email" placeholder='Email address' name="email" id="" />
          <input type="phone" placeholder='Phone numbers(optional)' name="phone" id="" />
          <textarea name="message" id="message" cols="30" rows="10"/>
         <button>Send</button>

        </form>
        </div>
    </div>
  )
}

export default ContactPage
