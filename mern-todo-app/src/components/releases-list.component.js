import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Release = props => (
    <tr>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_title}</td>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_band}</td>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_format}</td>
        <td className={props.release.release_listened ? 'listened' : ''}>{props.release.release_year}</td>
        <td>
            <Link to={"/edit/"+props.release._id}>Edit</Link>
        </td>
        <td className={props.release.release_listened ? 'listened' : 'true'}>LISTENED!!</td>
    </tr>
)

export default class ReleasesList extends Component {

    constructor(props) {
        super(props);
        this.state = {releases: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/releases/')
            .then(response => {
                this.setState({ releases: response.data });
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
                        <th>Title</th>
                        <th>Band</th>
                        <th>Year</th>
                        <th>Format</th>
                        <th>Action</th>
                        <th>Listened</th>
                    </tr>
                </thead>
                <tbody>
                    { this.releaseList() }
                </tbody>
            </table>
        </div>
        )
    }
      /*
     
    */
}