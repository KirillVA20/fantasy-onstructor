import React from 'react';
import {connect} from 'react-redux';

const SidebarPanel = (props) => {
    console.log(props);
    let sidebarClassList = `fc-siderbar ${(props.open) ? 'open' : 'closed'}`;
    return (
        <div className={sidebarClassList}>

        </div>
    )
};

const mapStateToProps = state => {
    const sidebar = {...state.Sidebar};
    console.log(state);
    return {
        open: sidebar.open,
    };

};

export default connect(mapStateToProps)(SidebarPanel);
