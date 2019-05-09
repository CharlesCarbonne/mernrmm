import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import checked from '../images/check.svg' // relative path to image  
import axios from 'axios';

const Release = props => (

    <tr>
        <td className={props.release.release_listened ? 'listened' : ''}  width="20%" height="20%"><img src={props.release.release_imguri} width="70%" height="70%" alt={props.release.release_imguri}></img></td>        
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_band}</td>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_title}</td>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_year}</td>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_format}</td>
        <td>
            <Link to={"/edit/"+props.release._id}>Edit</Link>
        </td>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_listened? <img src={checked} width="15%" height="15%" alt="check"></img> : ''}</td>

    </tr>
)

export default class ReleasesList extends Component {

    constructor(props) {
        super(props);
        this.state = {releases: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/releases/k7')
            .then(response => {
                this.setState({ releases: response.data });
                console.log(response.data)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    releaseList() {
        return this.state.releases.map(function(currentRelease, i){
            return <Release release={currentRelease} key={i} />;
        })
    }

    render() {
        return (
            <div>
            <h3>Releases List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Band</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Format</th>
                        <th>Action</th>
                        <th>Listened</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        this.releaseList()
                    }
                </tbody>
            </table>
        </div>
        )
    }
      /*
     
    */
}