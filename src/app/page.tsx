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
      <FadeInContainer>
        <div className={styles.mv}>
          <Image src="/images/top-mv.jpg" fill alt="" />
        </div>
        <div className={styles.scroll}></div>
      </FadeInContainer>
      {/* <FadeInContainer>
        <div className={styles.bird}>
          <Image src="/images/bird.png" width={110} height={90} alt="" />
        </div>
      </FadeInContainer> */}
      <div className={styles.about}>
        <FadeIntoRightContainer>
          <h1 className={styles.name}>
            Ryoga<span className={styles.job}>〈プログラマー〉</span>
          </h1>
        </FadeIntoRightContainer>
        <FadeInContainer>
          <div className={styles.description}>
            大学院を卒業後、ITメガベンチャーに就職。今まで得た豊富な経験を活かし、新しい技術を習得することが得意です。
            また小さい頃からファッションに興味があり、デザイン力も鍛えられてきました。
            常に新しいことに挑戦し、成長することを楽しんでいます。
          </div>
        </FadeInContainer>
      </div>
    </div>
  );
}
