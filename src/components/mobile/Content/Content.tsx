import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSearch } from "../../../searchContext";
import { PostType } from "../../desktop/Content/Content";
import { Loader } from "../../desktop/Loader/Loader";
import { PopUp } from "../PopUp/PopUp";
import { Post } from "../Post/Post";
import style from "./Content.module.css";

export const Content = () => {
  const { search } = useSearch();
  const [selectedPost, setSelectedPost] = useState<PostType>(null);
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios
      .get<Array<PostType>>(
        "https://cloud.codesupply.co/endpoint/react/data.json"
      )
      .then((res) => res.data)
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
        {selectedPost && (
          <PopUp
            {...selectedPost}
            onClickOutside={() => setSelectedPost(null)}
          />
        )}

        {search.length === 0
          ? data.map((item, index) => (
              <Post
                onClick={() => setSelectedPost(item)}
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
