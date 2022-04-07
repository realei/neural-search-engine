import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import { ContactsOutlined } from "@material-ui/icons";
import TitlebarImageList from "./TitlebarImageList.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const NeuralSearch = () => {
  const classes = useStyles();
  const [picture, setPicture] = useState([]);
  const [itemData, setItemData] = useState([]);

  const onChangePicture = (e) => {
    console.log("version 1");

    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  };

  useEffect(() => {
    requestTopk();

    console.log("itemData is " + itemData.length + ", now Redirecting")

    if (itemData.length > 0) {
      return <Redirect
              to={{
              pathname: "/results",
              state: { itemData }
              }}
              />
    }
  }, [picture]);

  async function requestTopk() {
    // The parameters we are gonna pass to the fetch function

    console.log("start featching by POSTing Images......")

    let data = new FormData();

    data.append("file", picture);

    let fetchData = {
      method: "POST",
      // mode: "no-cors",
      body: data,
    };

    const res = await fetch(`https://imagesearchstage.toorbee.com/image/query`, fetchData);
    const imageObject = await res.json();

    setItemData(imageObject);

  };

  return (
    <div class="search">
      <input type="text" id="fname" name="fname"></input>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={(e) => onChangePicture(e)}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <TitlebarImageList itemData={ itemData }/>
    </div>
  );
};

export default NeuralSearch;