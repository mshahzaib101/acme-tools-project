import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './global.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    button:{
   padding:'0px 0px 0px 0px',
   margin:'0px 0px 0px 0px',
}
})




class DownloadButton extends Component {
    download() {
        const url = this.props.url;

        // fake server request, getting the file url as response
        setTimeout(() => {
            const response = {
                file: url,
            };
            // server sent the url to the file!
            // now, let's download:
            window.location.href = response.file;
            // you could also do:
            // window.open(response.file);
        }, 100);
    }
    render() {
        const { classes } = this.props;
        return(
            <Button className={classes.button} onClick={() => this.download()}><span className='big-font'>Download file</span> </Button>
        );
    }
}
DownloadButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(DownloadButton);