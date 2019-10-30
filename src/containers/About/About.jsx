import React, { Component } from 'react';
import './about.css';
import '../global.css';


class About extends Component {
    render() {
        return (
            <div className="About-con big-font">
            <div className='about-d1'>
            <h2 className="big-font main-about">Our Vision</h2>
            <p className="small-font about-p about-p2">Acmetools was founded with the goal of making an easier post production process by providing
            a suite of tools that automates some of the tedious technical tasks of digitizing, syncing, and
            grouping.</p>
            <p className="small-font about-p about-p2">AcmetoolsGrouper is a tool for creating grouped sequences in Avid Media Composer. All you
            need to do is upload an AAF file of your synchronised sequence, and seconds later you will get
            a fully grouped AAF file for Avid Media Composer</p>
            </div>

            <div className='about-d2'>
            <h2 className="big-font main-about">FAQ</h2>
            <h3 className='small-font norm-font'>What does the AcmeTools Grouper do?</h3>
            <p className="small-font about-p">
            AcmeTools grouper is an automatic process that creates a sequence of grouped clips for editing
            software. We take a synced sequence (or syncmap) and return a grouped sequence, this
            process which is accurate and fast will save you time and mistakes that are done in the manual
            process of creating these clips. We have built and tested this product on reality television
            productions, where grouping and sorting of the media becomes a very complex process.
            </p>

            <h3 className='small-font norm-font'>Why should I use AcmeTools Grouper?</h3>
            <p className="small-font about-p">
            Creating group clips and splicing them onto a sequence, is both time consuming and mistake
            prone, even though this process is completely technical. Using AcmeTools Grouper will free up
            Assistant Editors time to more important tasks in order to get more value from your money.
            </p>

            <h3 className='small-font norm-font'>What is required for AcmeTools Grouper to do its job?</h3>
            <p className="small-font about-p">
            We require the metadata of your synchronised sequence (or syncmap). We use the open
            source AAF file format for receiving this data, and you will receive an AAF file containing the
            grouped sequence.
            </p>

            <h3 className='small-font norm-font'>How do I export my timeline/sequence to an AAF file?</h3>
            <p className="small-font about-p">
            In your Avid editing software, export to an AAF file with the following settings -
            [ add image of avid media composer AAF export settings ]
            </p>

            <h3 className='small-font norm-font'>How does this work if I’m not sending you any video/audio files?</h3>
            <p className="small-font about-p">
            We make sure to keep all metadata exactly the same as we found it in the sequence you upload
            to us. This ensures that when you open the AAF back in your Avid system, all clips will relink to
            their media files with no problem, and will cause no hitches down the line when relinking your
            final sequence to online media. Any user added metadata will be in these clips in exactly the
            same way you have sent us.
            </p>

            <h3 className='small-font norm-font'>What if my Avid station does not have an internet connection?</h3>
            <p className="small-font about-p">
            Since we return clips with the exact same metadata as you have sent us, the avid station does
            not need to be physically connected to the internet, just export your AAF, upload/download it
            from any computer, and take the file back to your Avid station.
            </p>

            <h3 className='small-font norm-font'>How do I set the grouping order?</h3>
            <p className="small-font about-p">
            Simple! AcmeTools Grouper uses the sequence tracks in numerical order for the grouping
            order. Audio only devices are always first (from lowest Audio track to highest Audio track), and
            after that cameras will be added from lowest video track to highest track video track, e.g. if you
            have tracks V2 and V5 on your sync map, the camera on V2 will be first in your grouping order
            </p>

            <h3 className='small-font norm-font'>How does AcmeTools grouper handle clips that do not need grouping?</h3>
            <p className="small-font about-p">
            For “nongroup” clips, or clips that do not overlap with any other clip. We add these clips at the
            position you have placed them.
            </p>

            <h3 className='small-font norm-font'>How does AcmeTools grouper handle subclips/autosyncs?</h3>
            <p className="small-font about-p">
            For subclips and autosyncs we will use the subclip/autosync that has been created. We also
            create new subclips for any masterclip that has been shortened on the sequence, this way you
            create your syncmap sequence with all your daily media, cut away anything you don’t want, and
            we will finalize the work for you.
            </p>
            </div>
            </div>
        );
    }
}

export default About;