import styles from "../../animation.module.css";

const ShapesAnimation = () => {
  return (
    <div className="h-[200px]">
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <div className={styles.star}></div>
      </div>
    </div>
  );
};

export default ShapesAnimation;
