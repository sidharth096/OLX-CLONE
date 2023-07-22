import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
function View() {
  const [userDetails,setUserDetails] =useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    
    const {userId}= postDetails
    console.log("ss");
    firebase.firestore().collection('users').where ('id','==',userId).get().then((res)=>{
      console.log("sss0");
      console.log(res);
      res.forEach(doc =>{
        setUserDetails(doc.data())
      })
      console.log("hai");
      console.log(userDetails);
    })
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.cretedAt}</span>
        </div>
        {userDetails &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
