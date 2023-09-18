import { ChangeEvent, useState } from "react";
import { auth, db } from "../../config/firebase";
import "./ProfilePage.scss";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

import { useNavigate } from "react-router-dom";

export const ProfilePage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState<any>("");
  const userID = auth.currentUser?.uid;
  const navigate = useNavigate();

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleImageUpload = async (file: File) => {
    try {
      const storageRef = ref(storage, `userImages/${userID}/${file.name}`);
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Błąd podczas przesyłania obrazu:", error);
      throw error;
    }
  };

  const handleSave = async () => {
    try {
      if (userName) {
        const userDataRef: any = doc(
          db,
          `usersData/${userID}/userData/userName`
        );
        await setDoc(userDataRef, { userName });
      }
      if (userImage) {
        const downloadURL = await handleImageUpload(userImage as File);
        const userImageRef: any = doc(
          db,
          `usersData/${userID}/userData/userImage`
        );
        await setDoc(userImageRef, { userImage: downloadURL });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Błąd podczas zapisywania danych:", error);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-page__header">User profile </div>
      <form className="profile-page__form">
        <div>
          <label className="profile-page__form-label">
            User name:
            <input
              className="profile-page__input"
              type="text"
              value={userName}
              onChange={handleUserNameChange}
            />
          </label>
        </div>
        <div>
          <label className="profile-page__form-label">
            Upload your profile avatar:
            <input
              className="profile-page__upload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setUserImage(file);
                  
                }
              }}
            />
          </label>
          
        </div>
        <button
          className="profile-page__primary-button"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
  );
};
