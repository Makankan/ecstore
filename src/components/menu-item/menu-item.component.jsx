import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, image, size, history, linkUrl, match }) => {
  //insteaad of props we are doing destructuring
  //history,match is the props value. 5 React router refer. with use of withRouter we get the props value history
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)} //history.push() is used to route to the url
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">ShopNow</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
