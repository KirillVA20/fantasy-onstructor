import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {BankOutlined} from '@ant-design/icons';
import {SetStoneCount} from '../../../store/actions/App';
import {switchOpenModal} from '../../../store/actions/Sidebar';

function MainFactory(props) {
    const generateStounAction = () => {
        const count = props.stoneCount + props.stoneIncriment;
        props.SetStoneCount(count);
    };

    const openSidebarHandler = () => {
        props.switchOpenModal(!props.open);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            generateStounAction();
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <div className="fc-centerFactory"
             style={{"gridColumn" : `${props.fieldGridCount - 1}`,"gridRow" : `${props.fieldGridCount - 1}` }}
             onClick={openSidebarHandler}
        >
            <BankOutlined />
        </div>
    )
}

const mapStateToProps = state => {
    const app = {...state.App};
    const sidebar = {...state.Sidebar};
    return {
        stoneCount: app.stoneCount,
        stoneIncriment: app.stoneIncriment,
        open: sidebar.open,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetStoneCount: (count) => dispatch(SetStoneCount(count)),
        switchOpenModal: (mode) => dispatch(switchOpenModal(mode)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFactory);