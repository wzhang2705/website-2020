import "./modal.scss";
import images from "../../../assets/icons/modal";
import React, { Component, useEffect, useState } from "react";
import ModalHeader from '../ModalHeader/index';
import ModalContact from '../ModalContact/index';
import ModalBasicInfo from '../ModalBasicInfo/index';
import ModalApplicationInfo from '../ModalApplicationInfo';
import { useParams } from 'react-router-dom';
import { getApplication } from '../../../utils/API/index.js';
import LoadingSpinner from "../../LoadingSpinner";

const ModalDisplay = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    let [ id ] = useState(useParams().id);
    let [ name, setName ] = useState();
    let [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getApplication(id,
            (response) => {
                console.log(response);
                setName(response.first_name + ' ' + response.last_name);
                setLoading(false);
            }, () => {
                console.log("FAILURE");
                setLoading(false);
            }
        );
    });

    if (loading) {
        return (<LoadingSpinner />)
    } else {
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <ModalHeader handleClose={handleClose} name={name}/>
                <div className="info-display">
                    <div className="info-column left">
                        <ModalContact />
                        <ModalBasicInfo />
                    </div>
                    <div className="info-column right">
                        <ModalApplicationInfo />
                    </div>
                </div>
                {/*children*/}
            </section>
        </div>
    );
    }
};

export default ModalDisplay
