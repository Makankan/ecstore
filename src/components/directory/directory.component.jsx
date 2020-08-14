import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "HAT",
          image: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "Jacket",
          image: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "Shoe",
          image: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "Women",
          image: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          size:'large'
        },
        {
          title: "Men",
          image: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          size:'large'
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, image, id,size }) => (
          <MenuItem key={id} title={title} imageUrl={image} size={size}/>
        ))}
      </div>
    );
  }
}
export default Directory;
