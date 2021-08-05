import React, { useEffect, useState } from "react";
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

    const res = await fetch(`http://127.0.0.1:5000/image/query`, fetchData);

    const imageObject = await res.json();

    setItemData(imageObject);

    console.log("the result in NeuralSearch is:");
    
    for(var img in itemData) {
      console.log(itemData[img])
    }

    console.log("done")
  }

  return (
    <div className={classes.root}>
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
        {/* <Button variant="contained" onClick={ onChangePicture }>
          Search
        </Button> */}
      </label>
      <TitlebarImageList itemData={ itemData }/>
    </div>
  );
};

export default NeuralSearch;