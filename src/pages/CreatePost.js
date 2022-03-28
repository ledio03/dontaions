import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { storage } from '../firebase-storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

function CreatePost({ isAuth }) {

  const [title, setTitle] = useState("");
  const [lloji, setLloji] = useState("");
  const [mosha, setMosha] = useState("");
  const [gjendja, setGjendja] = useState("");
  const [sasia, setSasia] = useState("");
  const [date, setDate] = useState("");
  const [imazh, setImazh] = useState(null);

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    const uploadTask = storage.ref(`images/${imazh.name}`).put(imazh);
    uploadTask.on(
      `state_changes`,
      snapshot => { },
      error => { console.log(error) },
      async () => {
        const setUrl = await storage.ref('images').child(imazh.name).getDownloadURL().then(async (url) => {
          await addDoc(postsCollectionRef, {
            title: title,
            lloji: lloji,
            mosha: mosha,
            gjendja: gjendja,
            sasia: sasia,
            date: date,
            imazh: url,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
          });
          navigate("/");

        })
      }
    )
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className='createPostPage'>
        <div className='cpContainer'>
          <h1>Krijo postimin tend</h1>
          <div className='inputGp'>
            <label>Titulli</label>
            <input
              onChange={(event) => {
                setTitle(event.target.value);
              }} />
          </div>
          <div className='inputGp'>
            <label className="form-label">Lloji</label>
            <select className="form-select" onChange={(event) => {
              setLloji(event.target.value);
            }} >
              <option value=""></option>
              <option value="Lodra">Lodra</option>
              <option value="Tjeter">Tjeter</option>
            </select>
          </div>
          <div className="inputGp">
            <label htmlFor="mosha" className="form-label">Mosha</label>
            <select className="form-select" onChange={(event) => {
              setMosha(event.target.value);
            }}>
              <option></option>
              <option>0-1</option>
              <option>1-3</option>
              <option>3-6</option>
              <option>6-12</option>
              <option>12+</option>
              <option>(Nuk eshte loder)</option>
            </select>
          </div>
          <div className="inputGp">
            <label htmlFor="gjendja" className="form-label pt-1">Gjendja (1-5)</label>
            <input onChange={(event) => {
              setGjendja(event.target.value);
            }} id="gjendja" type="number" name="gjendja" className="form-control" step="1" min="1" max="5" required />
            <span className="validity"></span>
          </div>
          <div className="inputGp">
            <label htmlFor="sasia" className="form-label pt-1">Sasia</label>
            <input onChange={(event) => {
              setSasia(event.target.value);
            }} id="sasia" type="number" name="sasia" className="form-control" step="1" min="1" required />
            <span className="validity"></span>
          </div>
          <div className="inputGp">
            <label htmlFor="date" className="form-label pt-1">Data e postimit</label>
            <input onChange={(event) => {
              setDate(event.target.value);
            }} type="date" id="date" className="form-control" name="date" required />
            <span className="validity"></span>
          </div>
          <div className="inputGp pb-4">
            <label htmlFor="imazh" className="form-label pt-1">Imazh</label>
            <input onChange={(event) => {
              if (event.target.files[0]) {
                const image = new File([event.target.files[0]], `${new Date().toISOString()}-${event.target.files[0].name}`);
                setImazh(image)
              }
            }} id="imazh" type="file" name="imazh" className="form-control" required />
            <span className="validity"></span>
          </div>
          <button onClick={createPost}>Submit</button>
        </div>

      </div>
      <Footer />
    </div>

  )
}


export default CreatePost;
