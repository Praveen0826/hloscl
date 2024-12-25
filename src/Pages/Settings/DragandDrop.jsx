import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

function DragAndDropPhotoWithLink() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const fileInputRef = React.useRef(null); // Reference to the hidden file input

  const handleDrop = (event) => {
    event.preventDefault();
    setError(""); // Reset error on every drop

    const file = event.dataTransfer.files[0]; // Get the first dropped file

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Save the image as a base64 string
      };
      reader.readAsDataURL(file);
    } else {
      setError("Please upload a valid image file!");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setError("Please upload a valid image file!");
    }
  };

  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    fileInputRef.current.click(); // Trigger the hidden file input click
  };

  return (
    <div className="flex mt-5  items-center justify-center mx-5 ">
      <div
        className=" border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer text-gray-600 text-center px-12 py-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleLinkClick}
      >
        {image ? (
          <img src={image} alt="Uploaded" className="max-h-full max-w-full rounded-lg" />
        ) : (
          <div>
            <div className="flex justify-center mb-3 text-2xl">
            <FiUpload />
                </div>
       
                <button
              onClick={handleLinkClick}
              className="text-blue-500 font-bold  hover:text-blue-700  text-xs no-underline"
            >
              Click to Upload <span className="text-black font-normal text-sm dark:text-white">or drag and drop</span>
            </button>
            <p className="text-xs text-black dark:text-white">JPG and PNG</p>
            <p className="text-xs text-black dark:text-white">(Max 450 px)</p>
            
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef} // Reference to the hidden file input
        style={{ display: "none" }} // Completely hide the input
        onChange={handleFileInputChange}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default DragAndDropPhotoWithLink;
