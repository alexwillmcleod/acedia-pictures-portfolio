import styles from './style.module.css';
import featuredProjects from './featured.conf.json';

type TagProps = {
  text: string;
  color: string;
};

export const Tag = (props: TagProps) => {
  return (
    <p
      className={styles.tag}
      style={{ color: props.color }}
    >
      {props.text}
    </p>
  );
};

type FeaturedProject = {
  title: string;
  key: string;
  description?: string;
  coverImage: string;
  videoRef?: string;
  tags?: TagProps[];
};

export const FeaturedComponent = (props: FeaturedProject) => {
  return (
    <div
      className={styles['featured-component-container']}
      style={{
        backgroundImage: `url("${props.coverImage}")`,
      }}
      key={props.key}
    >
      <div className={styles['featured-component-container-child']}>
        <h1 className={styles['featured-component-title']}>
          {props.title}
          {props.tags ? (
            props.tags.map((element) => <Tag {...element} />)
          ) : (
            <></>
          )}
        </h1>
        <p className={styles.description}>{props.description}</p>
        {props.videoRef && (
          <a
            className={styles['video-link']}
            href={props.videoRef}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export const Featured = () => {
  return (
    <div className={styles.container}>
      {featuredProjects.map((element, index) => (
        <FeaturedComponent
          {...element}
          key={`featured-component-${index}`}
        />
      ))}
    </div>
  );
};
