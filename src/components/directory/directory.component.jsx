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
          linkUrl:'hats'
        },
        {
          title: "Jacket",
          image: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl:''
        },
        {
          title: "Shoe",
          image: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl:''
        },
        {
          title: "Women",
          image: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          size:'large',
          linkUrl:''
        },
        {
          title: "Men",
          image: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          size:'large',
          linkUrl:''
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProperties }) => ( //spearding values of sections
          <MenuItem key={id} {...otherProperties}/>
        ))}
      </div>
    );
  }
}
export default Directory;
