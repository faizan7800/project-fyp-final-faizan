import React, { useState, useRef } from "react";
import "./TopStories.css";
import { Tag, Row, Col, Carousel } from "antd";
import StoriesCard from "./StoriesCard";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const TopStories = ({ articles, msg, toggleMode, dropdown }) => {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");

 

    const [value, setValue] = useState("");
  const [selectedTags, setSelectedTags] = useState(["All"]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  const filteredArticles = articles?.filter((el) =>
    el.title?.toLowerCase().includes(search)
  );
  const handleSearch = () => {
    console.log(filteredArticles);
  };

  const handleChangeSelect = (e) => {
    setValue(e.target.value);
    navigate(`/dashboard/country/${e.target.value}`);
    console.log(value);
  };
  return (
    <>
      <div className="bold fs-20" style={{color:"rgb(69, 162, 158)"}}>{msg || "Top Stories for you"}</div>
      <Row>
        <Col xs={24}>
          <div
            className="search_bar"
            style={{ marginTop: "1.5rem", width: "100%", display: "flex" }}
          >
            <Input
              className="border-0"
              style={{
                background: "#45a29e",
                borderRadius: "4px",
                color:"white",
                width: "50%",
                height: "46px",
                marginLeft: "2px",
              }}
              placeholder="Search news..."
              size="large"
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(search);
              }}
              suffix={
                <span>
                  <SearchOutlined onClick={handleSearch} />
                </span>
              }
            />

            {dropdown === "yes" ? (
              <select
                style={{
                  height: "45px",
                  overflowY: "auto",
                  width: "250px",
                  marginLeft: "3px",
                  background: "#ECF5F8",
                  border: "2px solid #E0F0F8",
                  borderRadius: "3px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
                value={value}
                onChange={(e) => handleChangeSelect(e)}
              >
                <option value="us">USA</option>

                <option style={{ overflowY: "scroll" }} value="gb">
                  United Kingdom
                </option>
                <option style={{ overflowY: "scroll" }} value="au">
                  Australia
                </option>
                <option style={{ overflowY: "scroll" }} value="ca">
                  Canada
                </option>
                <option style={{ overflowY: "scroll" }} value="ae">
                  United Arab Emirated
                </option>
                <option style={{ overflowY: "scroll" }} value="ar">
                  Argentina
                </option>
                <option style={{ overflowY: "scroll" }} value="at">
                  Austria
                </option>
                <option style={{ overflowY: "scroll" }} value="bg">
                  Bulgaria
                </option>
                <option style={{ overflowY: "scroll" }} value="be">
                  Belgium
                </option>
                <option style={{ overflowY: "scroll" }} value="ch">
                  Switzerland
                </option>
                <option style={{ overflowY: "scroll" }} value="cn">
                  China
                </option>
                <option style={{ overflowY: "scroll" }} value="fr">
                  France
                </option>
                <option style={{ overflowY: "scroll" }} value="co">
                  Colombia
                </option>
                <option style={{ overflowY: "scroll" }} value="cz">
                  Czech Republic
                </option>
                <option style={{ overflowY: "scroll" }} value="de">
                  Germany
                </option>
                <option style={{ overflowY: "scroll" }} value="eg">
                  Egypt{" "}
                </option>
                <option style={{ overflowY: "scroll" }} value="gr">
                  Greece
                </option>
                <option style={{ overflowY: "scroll" }} value="hk">
                  Hong Kong
                </option>
                <option style={{ overflowY: "scroll" }} value="hu">
                  Hungary
                </option>
                <option style={{ overflowY: "scroll" }} value="id">
                  Indonesia
                </option>
                <option style={{ overflowY: "scroll" }} value="ie">
                  Ireland
                </option>
                <option style={{ overflowY: "scroll" }} value="il">
                  Israel
                </option>
                <option style={{ overflowY: "scroll" }} value="it">
                  Italy
                </option>
                <option style={{ overflowY: "scroll" }} value="in">
                  India
                </option>
                <option style={{ overflowY: "scroll" }} value="jp">
                  Japan
                </option>
                <option style={{ overflowY: "scroll" }} value="kr">
                  South Korea{" "}
                </option>
                <option style={{ overflowY: "scroll" }} value="ma">
                  Morocco
                </option>
                <option style={{ overflowY: "scroll" }} value="mx">
                  Mexico
                </option>
                <option style={{ overflowY: "scroll" }} value="my">
                  Malaysia
                </option>
                <option style={{ overflowY: "scroll" }} value="no">
                  Norway
                </option>
                <option style={{ overflowY: "scroll" }} value="nz">
                  New Zeland
                </option>
                <option style={{ overflowY: "scroll" }} value="pt">
                  Portugal
                </option>
                <option style={{ overflowY: "scroll" }} value="ro">
                  Romania
                </option>
                <option style={{ overflowY: "scroll" }} value="ru">
                  Russia{" "}
                </option>
                <option style={{ overflowY: "scroll" }} value="sa">
                  Saudi Arabia
                </option>
                <option style={{ overflowY: "scroll" }} value="se">
                  Sweden
                </option>
                <option style={{ overflowY: "scroll" }} value="sg">
                  Singapore
                </option>
                <option style={{ overflowY: "scroll" }} value="sk">
                  Slovakia
                </option>
                <option style={{ overflowY: "scroll" }} value="tr">
                  Turkey
                </option>
                <option style={{ overflowY: "scroll" }} value="tw">
                  Taiwan
                </option>
                <option style={{ overflowY: "scroll" }} value="ua">
                  Ukraine
                </option>
                <option style={{ overflowY: "scroll" }} value="za">
                  South Africa
                </option>
              </select>
            ) : (
              ""
            )}
          </div>

          <div style={{ marginTop: "2rem" }}></div>
          {filteredArticles?.length ? (
            <Row style={{ marginTop: "1rem", width: "100%" }}>
              {filteredArticles.map((el, i) => {
                return (
                  <div key={i} style={{ marginTop: "1rem", display: "flex" }}>
                    <StoriesCard article={el} toggleMode={toggleMode} />
                  </div>
                );
              })}
            </Row>
          ) : (
            "No results found"
          )}
        </Col>
      </Row>
    </>
  );
};

export default TopStories;
