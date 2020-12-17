import React from 'react';
import {connect} from 'react-redux';

function HeaderPanel(props) {
    return (
        <header className="fc-header-panel">
            <div>
                {props.stoneCount}
            </div>
        </header>
    )
} 

const mapStateToProps = state => {
    const app = {...state.App};
    return {
        stoneCount: app.stoneCount,
    }
}

export default connect(mapStateToProps)(HeaderPanel);