import React, { Component } from 'react';
import '../global.css';
import './grouper.css';
import S3UploadWrapper from "../S3UploadWrapper";
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import img1 from '../settings.png';
import DownloadButton from '../DownloadButton';


class Grouper extends Component {
  state = {
    settingsOpen:false,
    rowArray:[],
  }

  SettingsOpen = () => {
    this.setState({ settingsOpen: true });
  };

  SettingsClose = () => {
    this.setState({ settingsOpen: false });
  };

  filedata = (data) => {
     let key;
     let dataArr = [];
     for (key in data) {
       if(key%2 === 1){
        data[key].color = 'table-r1';
       }
       else if(key%2 === 0){
        data[key].color = 'table-r2';
       }
       console.log(2%2,'s')
      dataArr.push(data[key])
     }
     this.setState({rowArray:dataArr})
    //  console.log('state',this.state.rowArray)
  }

    render() {
      return (
  
        <div className='grouper-con'>
            <h2 className="big-font grouper-title">GROUPER</h2>
            <div >
            <S3UploadWrapper fileData={this.filedata} />
            </div>
            <table className='table-con big-font' cellSpacing="0">
              <tbody>
                {
                  this.state.rowArray.map((data,indx)=>{
                    // console.log(indx,data)
                    return(
                      <tr className={data.color} key={`${indx}row`}>
                      <td className='data-table'>{data.filename}</td>
                      <td className='table-center'>{data.size/1000000}MB</td>
                      {data.urlExist === false &&
                      <td className='table-center'>Uploading {data.progress}%</td>
                      }
                      {data.urlExist === true &&
                        <td className='download-table table-center'><DownloadButton url={data.url}/></td>                      }
                      <td className='table-center'>-</td>
                    </tr>
                    )
                  })
                }
             
              
              </tbody>
            </table>
            <div className="center">
                <div className="grouper-con-d2">
                    <h4 className="big-font">
                    Grouper is awesome.
                    </h4>
                    <h4 className="big-font">
                        How to use AcmeTools Grouper-
                    </h4>
                    <ol type={1} className='small-font grouper-list'>
                        <li className='grouper-li'>Export an AAF file of your synchronised sequence from Avid Media Composer - <span onClick={this.SettingsOpen} className='grouper-settings'>Click here for settings</span></li>
                        <li className='grouper-li'>Upload the AAF file, you can drag it straight to the yellow dropzone</li>
                        <li className='grouper-li'>Download the grouped AAF we have created</li>
                        <li className='grouper-li'>Import the grouped AAF into an Avid Media Composer bin</li>
                        <li className='grouper-li'> Enjoy your coffee break</li>
                    </ol></div>
  
              {/*<DropFile/>*/}
  
            </div>

            {/* //settings */}
            <Dialog
            
            open={this.state.settingsOpen}
            onClose={this.SettingsClose}
          >
          <div>
            <div className='sett-img'>
            <img width='100%' src={img1}  />
            </div>
          </div>

          </Dialog>
  
  
        </div>
  
  
      );
    }
  }
  
  export default Grouper;
  