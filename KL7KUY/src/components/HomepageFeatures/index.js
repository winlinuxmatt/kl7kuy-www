import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'VHF/UHF Operations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Full VHF/UHF station featuring Yaesu FTM-500DR, ICOM ID-52A, and DMR hotspot.
        Active on local repeaters, APRS, and satellite operations.
      </>
    ),
  },
  {
    title: 'HF DX Station',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Yaesu FT-710 Field station with Buckmaster OCF dipole and 40m-10m coverage.
        Specializing in SSB, CW, and digital modes for worldwide DX.
      </>
    ),
  },
  {
    title: 'Portable Operations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SOTA, POTA, and field day enthusiast. Lightweight setup with Xiegu G90,
        portable antennas, and battery power for remote activations.
      </>
    ),
  },
  {
    title: 'Digital Modes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Active in FT8, JS8Call, and WSPR. Using WSJT-X, GridTracker, and 
        FLdigi for digital communications and propagation analysis.
      </>
    ),
  },
  {
    title: 'Antenna Projects',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Homebrew antenna construction including <a href="/docs/antenna-projects">EFHW, yagis, and magnetic loops</a>.
        Experimenting with NVIS configurations for regional communications.
      </>
    ),
  },
  {
    title: 'Emergency Comms',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ARES/RACES certified operator. Equipped with emergency power solutions
        and portable setups for disaster response communications.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
