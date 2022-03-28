import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";
import "../App.css";
import Footer from '../components/Footer';

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);



  return (
    <div>
      <div className='homePage' style={{ marginTop: "150px" }}>
        {postLists.map((post) => {
          return (
            <div className='post'>
              <div className='postHeader'>
                <div className="container">
                  <div className="row row-cols-2 ">
                    <div className='title'>
                      <h1 className="p-2" > {post.title} </h1>
                    </div>
                    <div className='deletePost'>
                      {isAuth && post.author.id === auth.currentUser.uid && (
                        <button
                          onClick={() => {
                            deletePost(post.id);
                          }}
                        > &#128465;
                        </button>
                      )}
                    </div>
                    <img className="col posterNew" src={post.imazh} />
                    <div className="col">
                      <h2 className="typeNew"><i>Lloji - </i>{post.lloji}</h2>
                      <h2 className="ageNew"><i>Mosha - </i>{post.mosha}</h2>
                      <h2 className="gjendjaNew"><i>Gjendja e objektit - </i>{post.gjendja}</h2>
                      <h2 className="titleNew"><i>Sasia - </i>{post.sasia}</h2>
                      <h2 className="dateNew"><i>Data - </i>{post.date}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="p-3">@{post.author.name}</h3>
            </div>
          );
        })}
      </div>
      <Footer />
    </div >
  )
}

export default Home;