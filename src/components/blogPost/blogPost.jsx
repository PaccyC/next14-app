import Link from 'next/link';
import styles from './blogPost.module.css';
import Image from 'next/image';

const BlogPost = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill className={styles.img} />
        </div>
        <span className={styles.date}>12.1.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link href="/blog/1" className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
};

export default BlogPost;
