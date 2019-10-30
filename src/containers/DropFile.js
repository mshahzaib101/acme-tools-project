import React, { Component } from 'react';
import Dropzone from "react-dropzone";
import './DropFile.css';
import Client from "../api/client"
// import { UploadRequest } from '@navjobs/upload'



class DropFile extends Component {
    state = { files: [], signed_url: "hmm?" };
    // Client.



    // async uploadFiles() {
    //     let { response, error, aborted } = await UploadRequest(
    //         {
    //             request: {
    //                 url: 'blah' //same as above request object
    //             },
    //             files, //files array
    //             progress: value => console.log('progress!', value)
    //         }
    //     )
    //     //do something with response
    // }


    onDrop(files) {
        Client.get_signed_url(url_obj => {
            this.setState({
                signed_url: url_obj.signed_url
            });
        });
        this.setState({
            files
        });
    }

    render() {
        return (
            <section className="align-center">
                <div>
                    <Dropzone onDrop={this.onDrop.bind(this)}
                        className="dropzone" >
                        <p>Auxiliary Timecode manipulator</p>
                        <p>Drag your files here</p>
                        <p>{this.state.signed_url}</p>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Dropped files</h2>
                    <ul>
                        {
                            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </section>
        );
    }
}

export default DropFile;