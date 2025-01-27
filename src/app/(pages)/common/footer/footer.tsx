import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image src="/images/bg_footer_grasses_top.png" alt="" fill />
      <div className={styles.inner}>
        <div className={styles.contact}>
          <h1 className={styles.name}>
            Ryoga<span className={styles.job}>〈プログラマー〉</span>
          </h1>
          <p className={styles.mail}>お問い合わせ : 56ryoga@gmail.com</p>
        </div>
        <div className={styles.important}>
          <p>
            本文、写真、および絵のすべてに関する著作権は私に帰属しており、
            無断での複製や転載は厳しく禁じられています。
            他のウェブサイト、印刷物、電子メディアなどへの転載は一切許可されません。
            無断転載には法的措置を取る可能性があります。ご理解とご協力をお願いします。
          </p>
        </div>
        <div className={styles.copyright}>
          <small>Copyright ryoga All right reserved</small>
        </div>
      </div>
    </footer>
  );
}
