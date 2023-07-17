import axios from "axios";
import { useQuery } from "react-query";
import { useSearch } from "../../../searchContext";
import { PostType } from "../../desktop/Content/Content";
import { Loader } from "../../desktop/Loader/Loader";
import { Post } from "../Post/Post";
import style from "./Content.module.css";

export const Content = () => {
  const { search } = useSearch();
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios
      .get<Array<PostType>>(
        "https://cloud.codesupply.co/endpoint/react/data.json"
      )
      .then((res) => {
        console.log(res.data);

        return res.data;
      })
  );

  if (error) {
    console.error(error);

    return <div>{(error as Error).message}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <div className={style.content}>
        {search.length === 0
          ? data.map((item, index) => (
              <Post
                style={{
                  margin: index === 0 ? "0 auto" : "32px auto 0 auto",
                }}
                {...item}
                key={item.img}
              />
            ))
          : data
              .filter(
                (item) =>
                  item.title.toLocaleLowerCase().includes(search) ||
                  item.text.toLocaleLowerCase().includes(search)
              )
              .map((item, index) => (
                <Post
                  style={{
                    margin: index === 0 ? "0 auto" : "32px auto 0 auto",
                  }}
                  {...item}
                  key={item.img}
                />
              ))}
      </div>
    );
  }
};
