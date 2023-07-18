import React from "react";
import "../styles/content.css";
import Footer from "./Footer"

const Content = () => {
  return (
    <div className="content">
      <div className="container-content">
        <div>
          <img
            src={require("../assets/images/logoNCC 1.png")}
            id="logo"
            alt=""
          />
        </div>

        <div className="text">
          <h3>Lorem ipsum dolor sit asmet?</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>

        <div className="list">
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="style-img-text">
              <img src={require("../assets/images/css-icon 1.png")} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at
              </p>
            </div>
            <p>
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
              ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
              porta massa in metus bibendum congue. Pellentesque ultrices
              vestibulum mattis.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="style-img-text">
              <img src={require("../assets/images/html-icon 1.png")} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at
              </p>
            </div>
            <p>
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
              ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
              porta massa in metus bibendum congue. Pellentesque ultrices
              vestibulum mattis.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="style-img-text">
              <img src={require("../assets/images/url-icon 1.png")} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at
              </p>
            </div>
            <p>
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
              ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
              porta massa in metus bibendum congue. Pellentesque ultrices
              vestibulum mattis.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Content;
