import React from "react";
import "./style.css";

function Card({
  title,
  imageUrl,
  body,
  list1,
  list2,
  list3,
  list4,
  list5,
  sublist1,
  sublist2,
  sublist3,
  sublist4,
  sublist5,
  sublist6,
}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <h5>{body}</h5>
          <div className="card-list">
            <ul>
              <li>
                {list1}
                <ul>
                  <h5>
                    <li>{sublist1}</li>
                    <li>{sublist2}</li>
                    <li>{sublist3}</li>
                    <li>{sublist4}</li>
                    <li>{sublist5}</li>
                    <li>{sublist6}</li>
                  </h5>
                </ul>
              </li>
              <li>{list2}</li>
              <li>{list3}</li>
              <li>{list4}</li>
              <li>{list5}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
