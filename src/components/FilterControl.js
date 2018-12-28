import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// import './components/FilterControl.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zip: ''
        }
    }
    render() {
        return (
            <div className="filter-control">
                <form noValidate autoComplete="off">
                    <TextField
                        id="zip-code"
                        label="ZipCode"
                        value={this.state.zip}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                    />
                </form>
            </div>
        )
    }
}

export default App
