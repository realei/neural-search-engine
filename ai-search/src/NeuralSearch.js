import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

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

  const onChangePicture = (e) => {

    console.log(e.target.files)
    
    if (e.target.files[0]) {
      // console.log("picture: ", e.target.files);
      console.log("Here is a photo uploaded");
      setPicture((e.target.files) => [...picture, e.target.files.key]);
      console.log(picture)
      // const reader = new FileReader();
      // reader.addEventListener("load", () => {
      //   setImgData(reader.result);
      // });
      // reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className={classes.root}>
      <input type="text" id="fname" name="fname"></input>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={e => onChangePicture(e)}
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
    </div>
  );
};

export default NeuralSearch;
