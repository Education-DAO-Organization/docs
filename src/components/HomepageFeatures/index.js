import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Why from '!!raw-loader!./why.md';

const FeatureList = [
  {
    title: "What's new from Education DAO?",
    Svg: require('@site/static/img/education-dao-animated-logo.svg').default,
    description: (
      <>
       <div>
      <iframe src="https://paragraph.xyz/@education-dao" style={{ width: '60vw', height: '80vh', display: 'flex',
    align: 'center' }} title="Updates from Education DAO via paragraph.xyz" ></iframe>
      </div>
        <ReactMarkdown>{Why}</ReactMarkdown>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{textAlign: "center", width: "60vw"}}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
