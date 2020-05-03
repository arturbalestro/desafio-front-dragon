import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteDragon } from '../actions';
import { StyledOptions } from '../styles/StyledOptions';
import { StyledButton } from '../styles/StyledButton';
import EditDragonModal from './EditDragonModal';

//Button to call the action.
//TODO use icons instead of the action name
const Options = (props) => {
    const { dragon, deleteDragon } = props;
    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = () => setEditModal(!editModal);

    return (
        <StyledOptions>
            <div className="button-wrapper">
                <StyledButton
                    className="options"
                    onClick={toggleEditModal} title="EDIT">
                    EDIT
                </StyledButton>
                <EditDragonModal isOpen={editModal} toggle={toggleEditModal} currentDragon={dragon} />

                <StyledButton
                    className="options"
                    onClick={() => deleteDragon(dragon.id)} title="DELETE">
                    DELETE
                </StyledButton>
            </div>
        </StyledOptions>
    );
}

const mapStateToProps = state => {
    return {
        dragonId: state.dragonId
    }
}

//Dispatching action to get the dragons list
const mapDispatchToProps = {
    deleteDragon
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);