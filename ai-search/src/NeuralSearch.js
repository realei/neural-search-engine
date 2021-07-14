import { useState } from 'react';

const ImageUpload = () => {
  return (
    <form>
      <input type="file" id="myFile" name="filename"></input>
      <input type="Submit"></input>
    </form>
  )
}

const NeuralSearch = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };

  return (
    <div className="topnav">
      <a className="active" href="#home">Nerual Search</a>
      <ImageUpload />
    </div>
  );
}

export default NeuralSearch;