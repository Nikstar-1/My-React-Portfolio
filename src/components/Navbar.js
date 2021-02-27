import React, { Component } from 'react'



class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'myname':'Rekha Kumari',
            'myage':'33'
        }
    }

    render() {
        return (
            <div>
            <h1>This is my Navbar Section</h1>
            
            </div>
        )
    }
}

export default Navbar