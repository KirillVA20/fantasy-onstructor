import React, {useState} from "react";
import {PlusOutlined, BankOutlined} from "@ant-design/icons";

function App(props) {
    const [openModal, setOpenModal] = useState(false);

    const [centerFactory, setCenterFactory] = useState(false);

    const [fieldGrid, setFieldGrid] = useState(1);

    const renderContent = () => {
        let content;
        if (centerFactory) {
            content = <div className="fc-centerFactory"><BankOutlined /></div>

            return content;
        }
        content = <button className="fc-createFantasy"
                          onClick={() => setCenterFactory(true)}  
                  >
                        <PlusOutlined />
                    </button>
        return content;
    }

    return (
        <section className="fantasy-constructor">
            <div className="fc-field">
                {renderContent()}
            </div>
            <div className="fc-addModal"></div>
        </section>
    )
}

export default App;
