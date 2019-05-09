import React, { Component } from 'react';
import axios from 'axios';

export default class EditRelease extends Component {

    constructor(props) {
        super(props);

        this.onChangeReleaseTitle = this.onChangeReleaseTitle.bind(this);
        this.onChangeReleaseBand = this.onChangeReleaseBand.bind(this);
        this.onChangeReleaseYear = this.onChangeReleaseYear.bind(this);
        this.onChangeReleaseFormat = this.onChangeReleaseFormat.bind(this);
        this.onChangeReleaseListened = this.onChangeReleaseListened.bind(this);
        this.onChangeReleaseimguri = this.onChangeReleaseimguri.bind(this);
        this.onChangeReleasecountryBand = this.onChangeReleasecountryBand.bind(this);
        this.onChangeReleasemainStyle = this.onChangeReleasemainStyle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            release_title: '',
            release_band: '',
            release_year: '',
            release_format: '',
            release_listened : true,
            release_bandCountry: '',
            release_mainStyle: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/releases/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    release_title: response.data.release_title,
                    release_band: response.data.release_band,
                    release_format: response.data.release_format,
                    release_year: response.data.release_year,
                    release_listened: response.data.release_listened,
                    release_bandCountry: response.data.release_bandCountry,
                    release_mainStyle: response.data.release_mainStyle
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeReleaseTitle(e) {
        this.setState({
            release_title: e.target.value
        });
    }

    onChangeReleaseBand(e) {
        this.setState({
            release_band: e.target.value
        });
    }

    onChangeReleaseFormat(e) {
        this.setState({
            release_format: e.target.value
        });
    }

    onChangeReleaseimguri(e) {
        this.setState({
            release_imguri: e.target.value
        });
    }

    onChangeReleaseYear(e) {
        this.setState({
            release_year: e.target.value
        });
    }

    onChangeReleaseListened(e) {
        this.setState({
            release_listened: !this.state.release_listened
        });
    }

    onChangeReleasecountryBand(e) {
        this.setState({
            release_bandCountry: e.target.value
        });
    }

    onChangeReleasemainStyle(e) {
        this.setState({
            release_mainStyle: e.target.value
        });
    }
        

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            release_title: this.state.release_title,
            release_band: this.state.release_band,
            release_format: this.state.release_format,
            release_year: this.state.release_year,
            release_listened: this.state.release_listened,
            release_bandCountry: this.state.release_bandCountry,
            release_mainStyle: this.state.release_mainStyle,
        };
        console.log(obj);
        axios.post('http://localhost:4000/releases/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Release</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.release_title}
                                onChange={this.onChangeReleaseTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Band: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.release_band}
                                onChange={this.onChangeReleaseBand}
                                />
                    </div>
                    <div className="form-group">
                        <label>Year: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.release_year}
                                onChange={this.onChangeReleaseYear}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    value="Cd"
                                    checked={this.state.release_format==='Cd'} 
                                    onChange={this.onChangeReleaseFormat}
                                    />
                            <label className="form-check-label">Cd</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    value="Vinyl" 
                                    checked={this.state.release_format==='Vinyl'} 
                                    onChange={this.onChangeReleaseFormat}
                                    />
                            <label className="form-check-label">Vinyl</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    value="K7" 
                                    checked={this.state.release_format==='K7'} 
                                    onChange={this.onChangeReleaseFormat}
                                    />
                            <label className="form-check-label">K7</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    value="Black Metal"
                                    checked={this.state.release_mainStyle==='Black Metal'} 
                                    onChange={this.onChangeReleasemainStyle}
                                    />
                            <label className="form-check-label">Black Metal</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    value="Death Metal" 
                                    checked={this.state.release_mainStyle==='Death Metal'} 
                                    onChange={this.onChangeReleasemainStyle}
                                    />
                            <label className="form-check-label">Death Metal</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    value="Thrash Metal" 
                                    checked={this.state.release_mainStyle==='Thrash Metal'} 
                                    onChange={this.onChangeReleasemainStyle}
                                    />
                            <label className="form-check-label">Thrash Metal</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeReleaseListened}
                                checked={this.state.release_listened}
                                value={this.onChangeReleaseListened}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Listened
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Release" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}