import style from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.left} />
      <div />
      <div className={style.right} />
    </div>
  );
};
