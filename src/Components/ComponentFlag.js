import React, {Component} from "react";
import './flag.css'

export default class ComponentFlag extends Component {

    constructor(props) {
        super(props);
    }


    render = () => {

        return (
                <div key={this.props.index} index={this.props.index} className={'flag'}>
                    <img
                        src={'images/Semi-Final' + this.props.semifinaldatanumber + '/' + this.props.countryName + ".png"}/>
                    <span>{this.props.countryName}</span>
                </div>
        )

    }
}

