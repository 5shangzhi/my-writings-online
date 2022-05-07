import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '微信公众号同步文章',
    Svg: require('@site/static/img/frog-mp.svg').default,
    description: (
      <>
        同步发布「井蛙惊梦人」微信公众号文章。
      </>
    ),
  },
  {
    title: '正在写的书：《因材施教》',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        一套不仅仅适合国人的学习方法。
      </>
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
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
