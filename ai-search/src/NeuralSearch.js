import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { ContactsOutlined } from "@material-ui/icons";

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
    console.log("version 1")
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  };

  useEffect(() => {
    requestTopk();
  }, [picture])

  async function requestTopk() {

    // The parameters we are gonna pass to the fetch function
    let fetchData = {
      method: "GET",
      body: picture
    }

    const res = await fetch(
      `http://localhost:5000/image/query`,
      fetchData
    );
    const json = await res.json();

    console.log(json);
  }

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
