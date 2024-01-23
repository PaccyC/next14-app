import Link from 'next/link';
import styles from './blogPost.module.css';
import Image from 'next/image';

const BlogPost = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill className={styles.img} />
        </div>
        <span className={styles.date}>12.1.2024</span>
      </div>
      
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post._id}`} className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
};

export default BlogPost;
