import  React, { Component } from 'react';
import './DropFile.css';
import './Grouper/grouper.css'
import ReactS3Uploader from 'react-s3-uploader';
import Client from "../api/client"
import pollUntil from 'poll-until';
import ReactDOM from 'react-dom';
import './global.css';
import DragNDropToS3 from 'react-drag-n-drop-to-s3';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
    button:{
       width:'100%',
       padding:'0px 0px 0px 0p',
    },
  
})




class S3UploadWrapper extends Component {
    state = { 
        files: {}, 
        currentFileId: '',
        signed_url: "hmm?", 
        upload_progress:0, 
        process_status: {status: "PENDING", download_url : null}, 
        fileName: "" ,
        displayLoader: false,
    };

    onUploadProgress(progress, a) {
        let data = this.state.files;
        let dataId = this.state.currentFileId;
        data[dataId].progress = progress;
        this.setState({
            files : data
         });
         this.props.fileData(this.state.files)
        }

    setProcessStatus(data){
        // console.log("SET", data);
        if (data.downloadUrl){
            this.setState({process_status: {status: "COMPLETE", download_url : data.downloadUrl}});
        }

        // this.setState({process_status: "PENDING"});
    }
    getProcessStatus(){
        return this.state.process_status;
    }


        // Client.get_task_status(task_data.task_id, function(status_data){
        //     console.log(status_data);
        // });




    onUploadFinish(data) {
        // console.log('onUploadFinish', data);
        let Currentdata = this.state.files;
        let dataId = this.state.currentFileId;
      
        const that = this;
        Client.put_aaf_process(data, function(data){
            pollUntil( function(){
                const statusState = that.getProcessStatus();
                    if (statusState && statusState.status !== 'PENDING'){
                        // console.log(statusState);
                        return true;
                    }
                    Client.get_job_status(data.jobId, (response) => {that.setProcessStatus(response);}    );
                    return false;
                }, 1000,
            function(){
                // ReactDOM.render(<DownloadButton url={that.state.process_status.download_url}/>, document.getElementById('download-files'));
                Currentdata[dataId].url = that.state.process_status.download_url;
                Currentdata[dataId].urlExist = true;
                that.setState({
                    files : Currentdata,
                    displayLoader:false,

                 });
                that.props.fileData(that.state.files)

            }
            
            );
        })
    }
    onUploadError(data){
        // console.log('onUploadError', data);
    }
    onUploadStart(file, next){
        // console.log(file);
        // ReactDOM.render(<DownloadButton url={this.state.process_status.download_url}/>, document.getElementById('download-files'));
        // console.log('onUploadStart', file);
        let currentFiles = this.state.files;
        let name = file.name
        let id = 0;
        let key;
        for (key in currentFiles) {
            if (key) {
                id++;}
        }
        let fileId = String(id+1)
        currentFiles[fileId] = {filename:file.name, size:file.size}
        currentFiles[fileId].urlExist = false;
        this.setState({
            files:currentFiles,
            currentFileId:fileId,
            displayLoader:true,
        });
        next(file);
        this.props.fileData(this.state.files)
    }

    getSignedUrl(file, callback) {

        Client.post_aaf_process(file.name, file.size).then(data => {
            callback(data);
        })
        .catch(error => {
            // console.error(error);
        });

    }

    render() {
        const { classes } = this.props;
        return (
            <section className='uplaodBtn-con'>
            <Button className={classes.button}>

                <div>
               
                    {/* ///////////////////// */}
                    <DragNDropToS3
                    dropzoneProps={{
                        
                         style:{ 
                             width:'600px',
                             padding:'0px',
                             cursor: 'pointer',
                         },
                     
                    }}
                    s3UploaderProps={{

                        id:'grouper-upload',
                        // signingUrl="/api/v1/upload_url",
                        getSignedUrl:(file, callback) => this.getSignedUrl(file, callback),

                        signingUrlMethod:"GET",
                        accept:"*",
//                        s3path="/input/",
                        preprocess:(file, next) => this.onUploadStart(file, next),
                        onProgress:(data) => this.onUploadProgress(data),
                        onError:this.onUploadError,
                        onFinish:(data) =>  this.onUploadFinish(data),
                        // signingUrlHeaders={{ additional: headers }},
                        // signingUrlQueryParams={{ additional: query-params }},
                        // signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
                        uploadRequestHeaders:{ 'Content-Type': 'application/octet-stream' }, // this is the default
                        contentDisposition:"auto",
                        // scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                        // server="https://api.acmetools.tv"
                        // inputRef={cmp => this.uploadInput = cmp}
                        autoUpload:true,

                    }}
                >
                    {({ acceptedFiles }) => (
                    <div className='upload-text-con'>
                    {this.state.displayLoader === false &&
                        <p className='big-font' style={{fontSize:'36pt', lineHeight:'45px'}}>Drag Files here<br /><span style={{fontSize:'24pt',}}>or click to choose a file</span></p>
                    }
                   
                    </div>
                    )}
                </DragNDropToS3>

                    {/* ////////////////////// */}
                </div>
                {/* <span className='filename'>{this.state.fileName}</span>
                <div style={{display: this.state.upload_progress < 100 && this.state.upload_progress > 0 ?  'block' : 'none' }}>
                    <span className='big-font' style={{marginBottom:'10px'}}> upload progress {this.state.upload_progress}</span>
                  
                    <LinearProgress variant="determinate" value={this.state.upload_progress} />

                </div>
                <div className='big-font' style={{display: this.state.upload_progress === 100 && this.state.process_status.status === "PENDING" ?  'block' : 'none' }}>
                    Processing...
                </div>
                <div id='download-files'></div> */}
                </Button>
                {this.state.displayLoader === true &&
                    <div>
 <CircularProgress className={classes.progress} size={40} />               
      </div>}
            </section>
        );
    }
}


S3UploadWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(S3UploadWrapper);
