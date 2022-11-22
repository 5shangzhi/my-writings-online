import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: '日常思考随记',
    Svg: require('@site/static/img/frog-mp.svg').default,
    description: (
      <>
        同步发布「井蛙惊梦人」微信公众号文章。
      </>
    ),
    lnk: (
      "/blog"
    ),
    label:(
      '🐸 井蛙惊梦人'
    ),
  },
  {
    title: '正在写的书：《因材施教》',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        一套不仅仅适用于国人的<strong>学习</strong>方法。
      </>
    ),
    lnk: (
      "/docs/intro"
    ),
    label:(
      '📖 《因材施教》'
    ),
  },
  {
    title: '关于作者',
    Svg: require('@site/static/img/programming.svg').default,
    description: (
      <>
        一个热爱写作的程序员。
      </>
    ),
    lnk: (
      "/aboutme"
    ),
    label:(
      '🍁 瞧瞧去'
    ),
  },
];

function Feature({Svg, title, description, lnk, label}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
        className={clsx(
          'button button--outline button--secondary button--lg',
          styles.buttons,
        )}
        to={lnk}>
        {label}
      </Link>
      </div>

    </div>
  );
}



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
