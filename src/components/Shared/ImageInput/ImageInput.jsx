import React from "react";

const ImageInput = ({ label, name = "image" }) => {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
        {label || "Upload Profile Image"}
      </label>
      <input
        required
        name={name}
        type="file"
        accept="image/*"
        className="w-full py-3 px-4 bg-white border border-gray-200 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-gray-900 file:text-white font-bold text-gray-700 cursor-pointer"
      />
    </div>
  );
};

export default ImageInput;