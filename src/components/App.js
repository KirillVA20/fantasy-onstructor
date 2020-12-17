import React, {useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import GridField from './GridField/GridField';
import SidebarPanel from './SidebarPanel/SidebarPanel';
import {connect} from 'react-redux';
import {SetFieldGridCount} from '../store/actions/App';
import HeaderPanel from './HeaderPanel/HeaderPanel';

function App(props) {
    const [centerFactory, setCenterFactory] = useState(false);

    const createFantasyHandler = () => {
        setCenterFactory(true);
        props.SetFieldGridCount(3);
    };

    const renderContent = () => {
        let content;
        if (centerFactory) {
            content = <GridField />;

            return content;
        }
        content = <button className="fc-createFantasy"
                          onClick={createFantasyHandler}  
                  >
                        <PlusOutlined />
                    </button>
        return content;
    }

    return (
        <section className="fantasy-constructor">
            { (centerFactory) 
                    ? <React.Fragment>
                        <HeaderPanel /><SidebarPanel />
                      </React.Fragment> 
                    : ""
            }
            <div className="fc-field">
                {renderContent()}
            </div>
            <div className="fc-addModal"></div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        SetFieldGridCount: (count) => dispatch(SetFieldGridCount(count)),
    }
}

export default connect(null, mapDispatchToProps)(App);
