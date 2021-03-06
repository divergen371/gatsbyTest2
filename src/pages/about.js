import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import * as styles from "./about.module.css";

const AboutPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first gatsby website" />
      </Helmet>
      <h2 className={styles.name}>@mottox2</h2>
      <p className={styles.text}>
        都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
        新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
      </p>
    </Layout>
  );
};

export default AboutPage;
