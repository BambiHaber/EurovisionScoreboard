import React, {Component} from "react";
import ComponentFlag from './ComponentFlag';

export default class ComponentBoxDisplay extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let countries = this.props.semifinaldata.data.filter(e => e.isVoter);

        return (

            <div>
                <h2 className='votingCountries'>Voting Countries</h2>
                <div className={'tritableContainer'}>
                    {[...countries].map((i, idx) => {
                        return (
                            <div key={idx} className={'flagContainer'}>
                                <ComponentFlag key={idx} semifinaldatanumber={this.props.semifinaldata.semifinal}
                                               countryName={i.name} index={idx}/>
                            </div>


                        )
                    })}
                </div>
            </div>

        )
    }
}