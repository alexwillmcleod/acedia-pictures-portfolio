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
  videoRef: string;
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
        <a href={props.videoRef}></a>
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
