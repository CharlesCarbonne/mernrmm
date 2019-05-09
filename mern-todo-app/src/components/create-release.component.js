import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRelease extends Component {

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
            release_listened: e.target.value
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
        
     
        const newRelease = {
            release_title: this.state.release_title,
            release_band: this.state.release_band,
            release_year: this.state.release_year,
            release_format: this.state.release_format,
            release_listened: this.state.release_listened,
            release_imguri: ('http://localhost/images/'+this.state.release_band+'_'+this.state.release_title+'.jpg').replace(/\s+/g, ''),
            release_bandCountry: this.state.release_bandCountry,
            release_mainStyle: this.state.release_mainStyle,
        };

        axios.post('http://localhost:4000/releases/add', newRelease)
            .then(res => console.log(res.data));

        this.setState({
            release_title: '',
            release_band: '',
            release_year: '',
            release_format: '',
            release_listened: false,
            release_imguri: ('http://localhost/images/'+this.state.release_band+'_'+this.state.release_title+'.jpg').replace(/\s+/g, ''),
            release_bandCountry: this.state.release_bandCountry,
            release_mainStyle: this.state.release_mainStyle,
        })
    
        console.log(`Form submitted:`);
        console.log(`Release Title ${this.state.release_title}`);
        console.log(`Release Band: ${this.state.release_band}`);
        console.log(`Release Year: ${this.state.release_format}`);
        console.log(`Release Format: ${this.state.release_format}`);
        console.log(`Release Listened: ${this.state.release_listened}`);
        console.log(`Release imguri: ${this.state.release_imguri}`);
    
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Release</h3>
                <form onSubmit={this.onSubmit}>
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
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.release_title}
                                onChange={this.onChangeReleaseTitle}
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
                        <label>countryBand: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.release_bandCountry}
                                onChange={this.onChangeReleasecountryBand}
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

                    <div className="form-group">
                        <input type="submit" value="Create Release" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}