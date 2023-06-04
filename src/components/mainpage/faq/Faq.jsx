import React, {useState} from "react";
import "./Faq.css";
import FaqData from "../../../Data/FaqData";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) 
      return setSelected(null);
    setSelected(i);
  };

  return (
    <div className="Faq">
      <div className="faq_content">
      <div className="faq_heading">
        <h1 className="faq_head"> Frequently Asked Questions </h1>
        <p>
          As with any new platform, users may have questions regarding how it
          works and what it can offer them. To address these concerns, the
          RateYourSkill website features a Frequently Asked Questions (FAQ)
          section. The FAQ section contains a list of common questions that
          users may have about the platform, such as how to sign up, how to take
          an assessment, and how to view their results.
        </p>
      </div>
      <div className="faq_questions">
        <div className="accordion">
          {FaqData.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h4> {item.question} </h4>
                <span> {selected === i ? "-" : "+"} </span>
              </div>
              <div className={selected === i ? "content_show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;
