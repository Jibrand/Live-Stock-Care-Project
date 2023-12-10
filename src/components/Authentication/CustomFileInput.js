import React from 'react';

const CustomFileInput = ({ defaultValue, onChange }) => {
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      onChange(e.target.files[0]);
    } else {
      // If no file selected, set the default value (either null or default profile image path)
      onChange(defaultValue);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      multiple={false}
    />
  );
};

export default CustomFileInput;
    