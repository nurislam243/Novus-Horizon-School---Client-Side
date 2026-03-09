import axios from 'axios';

export const uploadImageToImgBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData
    );

    if (response.data.success) {
      return response.data.data.url;
    }
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Image upload failed");
  }
};