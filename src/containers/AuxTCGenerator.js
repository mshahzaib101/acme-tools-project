import React, { Component } from 'react';
import './App.css';
import S3UploadWrapper from "./S3UploadWrapper";

class AuxTCGenerator extends Component {
  render() {
    return (

      <div>

          <h3 className="App-title">Auxiliarly Timecode Generator</h3>

          <S3UploadWrapper/>
          <div className="center">
              <div className="App-intro">
                  <p >
                  AcmeTools Auxiliary Timecode Generator is a tool for creating auxiliary timecodes for all master clips on a synced sequence (or syncmap). The auxiliary timecodes that we create will match your sequence master TC1.
              </p>
                  <p>
                      How to use AcmeTools Auxiliary Timecode Generator-
                  </p>
                  <ol type={1}>
                      <li>Upload an AAF of your sync map</li>
                      <li>Download the AAF we have created</li>
                      <li>Open Avid Media Composer (without any open bins)</li>
                      <li>Import AcmeTools AAF into a new bin</li>
                      <li>Sort your masterclips according to group order, and use Avid Media Composer's Multigroup feature using timecodes Aux1</li>
                  </ol></div>

            {/*<DropFile/>*/}

          </div>


      </div>


    );
  }
}

export default AuxTCGenerator;
