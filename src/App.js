import "@aws-amplify/ui-react/styles.css";

import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Grid
} from "@aws-amplify/ui-react";

import { Amplify, API, Storage } from 'aws-amplify';
import React, { useState, useEffect } from "react";

function App({ signOut }) {

  // For uploadImage
  async function onChange(e) {
    e.preventDefault();
    // If there are no files, return
    if (!e.target.files[0]) return
    // Set the variable file to the uploaded file
    const file = e.target.files[0];
    // Set the key for the file
    const imageKey = 'image/raw/' + file.name;
    // setIr(imageKey);
    // Log the key
    console.log(imageKey);
    // try {
    //   // Place the image in the bucket
    //   await Storage.put(imageKey, file, {
    //     contentType: "image/png", // contentType is optional
    //   })
    //   // This returns the key
    //   .then((res) => 
    //     console.log(res)
    //   );
    // } catch (error) {
    //   console.log("Error uploading file: ", error);
  }


  return (
    <>
      <Card
        columnStart="1"
        columnEnd="-1"
      >
       <Heading level={1}>Nautilus Marketing</Heading> 
      </Card>

      <div className='mainContent'>
        {/* Upload Image */}
        <div className='formDiv'>
          <input
            type="file"
            onChange={onChange}
          />
        </div>

        {/* Inputs */}
        <Heading level={3}>Comment Metadata</Heading> 


        <div className='formDiv'>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      </div>
   

    </>


  );
}

export default withAuthenticator(App);