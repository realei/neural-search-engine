import React from "react";

const Search = (props) => {
  return (
    <div>
      <label for="img">Select image:</label>
      <input type="file" id="img" name="img" accept="image/*">
      <input type="submit">
    </div>
  )
}

export default Search;