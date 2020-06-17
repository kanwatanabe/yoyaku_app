import React from 'react'
import axios from 'axios'
import FacilitysContainer from './FacilitysContainer'


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            facilities: [] ,
            title: 'Hospital Index'
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/facility')
            .then((results) => {
                console.log(results)
                this.setState({ facilities: results.data })
            })
            .catch((data) => {
                console.log(data)
            })
    }

    render() {
        return (
            <div className='app-main'>
                <h1 className='title mt-5'>{this.state.title}</h1>
                <FacilitysContainer facilityData={this.state.facilities} />
            </div>
        );
    }
}
    export default MainContainer