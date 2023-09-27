import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import "./ProfilePage.scss";
import { DocumentReference, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { setActiveUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { ImageComponent } from "../registrationPage/components/ImageComponent/ImageComponent";

export const ProfilePage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState<any>();
  const userID = auth.currentUser?.uid;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleImageUpload = async (file: any) => {
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

  const saveFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserImage(file);
    }
  };

  const handleSave = async () => {
    try {
      if (userName) {
        const userDataRef: DocumentReference = doc(
          db,
          `usersData/${userID}/userData/userName`
        );
        await setDoc(userDataRef, { userName });
        dispatch(setActiveUser({ userName }));
      }
      if (userImage) {
        const downloadURL = await handleImageUpload(userImage);
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
      <div className="profile-page__form">
        <div className="profile-page__header">User profile </div>
        <form className="profile-page__form">
          <label className="profile-page__form-label">
            User name:
            <input
              className="profile-page__input"
              type="text"
              value={userName}
              onChange={handleUserNameChange}
            />
          </label>
          <label className="profile-page__form-label">
            Upload your profile avatar:
            <input
              className="profile-page__upload"
              type="file"
              accept="image/*"
              onChange={saveFile}
            />
          </label>
          <button
            className="profile-page__primary-button"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </div>
      <ImageComponent src="netflix-image.png" name="Netflix logo" />
    </div>
  );
};
