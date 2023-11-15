import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetNewsByCategoryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import Loader from "../Loader";

export default function Science({ toggleMode }) {
  const location = useLocation();
  const [news, setNews] = useState(null);
  const category = location.pathname.split("/")[3];
  const { data, isLoading } = useGetNewsByCategoryQuery(category);
  useEffect(() => {
    data && setNews(data.news);
  }, [data]);
  if (isLoading)
    return (
      <div style={{ marginTop: "30vh", marginLeft: "60vh" }}>
        <Loader  />
      </div>
    );
  if (!news?.length) return <>No news for today!</>;
  return (
    <>
      {news && (
        <TopStories
          articles={news}
          msg="Science News"
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
