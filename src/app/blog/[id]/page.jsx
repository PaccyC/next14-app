import styles from './singlePost.module.css'
import Image from 'next/image'
const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
      <Image src="/contact.png" fill className={styles.img}/>
     </div>
     <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.detail}>
        <Image src="/noavatar.png" className={styles.avatar} width={50} height={50}/>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Paccy</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>12.1.2024</span>
        </div>
      </div>
      <div className={styles.content}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta aut modi officia delectus architecto. Provident blanditiis nesciunt eos at! Odit explicabo molestiae accusantium? Porro ducimus pariatur placeat distinctio eaque accusamus!
      </div>
     </div>
    </div>
  )
}

export default SingleBlogPage
