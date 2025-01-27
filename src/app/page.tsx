import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import {
  FadeInContainer,
  FadeIntoRightContainer,
} from "./(pages)/common/animations";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mv}>
        <Image src="/images/top-mv.jpg" fill alt="" />
      </div>
      <div className={styles.about}>
        <FadeIntoRightContainer>
          <h1 className={styles.name}>
            Ryoga<span className={styles.job}>〈プログラマー〉</span>
          </h1>
        </FadeIntoRightContainer>
        <FadeInContainer>
          <div className={styles.description}>
            大学院を卒業後、ITメガベンチャーに就職。現在2年目になります。
            大学から今までに得た豊富な経験を活かし、新しい技術を習得することが得意です。
            また小さい頃からファッションに興味があり、デザイン力も鍛えられてきました。
            現在は、応用情報技術者と英語の勉強をしています。
          </div>
        </FadeInContainer>
      </div>
    </div>
  );
}
