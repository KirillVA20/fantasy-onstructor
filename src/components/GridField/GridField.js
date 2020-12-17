import React from "react";
import MainFactory from '../Factories/MainFactory/MainFactory';
import { connect } from "react-redux";

function GridField(props) {
    console.log(props);
    const fieldGridCount = props.fieldGridCount;
    const mainFactoryCount = fieldGridCount - 2;

    const renderField = () => {
        let blockList = [];

        for (let i = 0; i < fieldGridCount; i++) {
            for (let j = 0; j < fieldGridCount; j++) {
                const blockId = `${i}_${j}`;
                if (i === mainFactoryCount && j === mainFactoryCount) {
                    blockList.push(<MainFactory key={blockId} fieldGridCount={fieldGridCount} />);
                } else {
                    blockList.push(<div className="fc-grid-item" key={blockId}></div>);
                }
            }
        }
        return blockList;
    };

    const fieldClass = `fc-grid-field grid-${fieldGridCount}`;

    return (
        <div className={fieldClass}>
            {renderField()}
        </div>
    )
}

const mapStateToProps = state => {
    const App = {...state.App};
    return {
        fieldGridCount: App.fieldGridCount,
    }
}

export default connect(mapStateToProps)(GridField);