import React from "react";
import Option from "../components/Option";
import Question from "../components/Question";
import "./Home.css";

const Home = (props) => {
  const { data } = props.data;
  return (
    <div className="Home">
      {data.map((item, index) => {
        return (
          <>
            <div className="Home-item" key={index}>
              <Question questionNumber={index + 1} question={item.question} />
              {item.options.map((item, index) => {
                return <Option key={index} options={item} />;
              })}
              <div className="Home-item-index">
                {index + 1} of {data.length}
              </div>
            </div>
            {!(index + 1 === data.length) && <hr />}
          </>
        );
      })}
    </div>
  );
};

export default Home;
