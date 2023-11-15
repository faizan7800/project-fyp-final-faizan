import React from "react";
import { useGetLocalNewsByCategoryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import Loader from "../Loader";

export default function LocalSports({ toggleMode }) {
  const { data, isLoading } = useGetLocalNewsByCategoryQuery("sports");
  if (isLoading)
    return (
      <div style={{ marginTop: "30vh", marginLeft: "60vh" }}>
        <Loader  />
      </div>
    );
  if (!data?.news?.length) return <>No news for today!</>;
  return (
    <>
      {data && (
        <TopStories
          articles={data.news}
          msg="Local Sports News"
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
