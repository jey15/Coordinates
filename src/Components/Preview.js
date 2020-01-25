import React from 'react';
import {Innerbox} from './Innerbox';

class Preview extends React.Component {

    render() {
        const inputs = this.props.inputs;
        return(
            <div className="parent preview">
                <header className="box-header">
                    PREVIEW
                </header>
                <div className="outer-box">
                    <Innerbox 
                        height = {inputs.height}
                        width = {inputs.width}
                        x = {inputs.xCoordinate}
                        y = {inputs.yCoordinate}
                    />
                </div>
            </div>
        );
    }
}

export default Preview;