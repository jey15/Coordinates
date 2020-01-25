import React from 'react';

class Input extends React.Component {

    render() {
        const inputs = this.props.inputs;
        return(
            <div className="parent">
                <header className="box-header">
                    INPUT
                </header>
                {Object.keys(inputs).map((item) => {
                    return(
                        <div className="input-row">
                            <div className="input-row-title">
                                {item}
                            </div>
                            <div className="input-row-value">
                                <input 
                                    className="input-value" 
                                    // devalue = {inputs.item}
                                    onChange = {(e) => this.props.valueChanged(item, e.target.value)}
                                >
                                    
                                </input>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Input;