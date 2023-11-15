import React from "react";
import { useGetLocalNewsByCategoryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import Loader from "../Loader";

export default function LocalEntertainment({ toggleMode }) {
  const { data, isLoading } = useGetLocalNewsByCategoryQuery("entertainment");
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
          msg="Local Entertainment News"
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
