import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addDragon, editDragon, deleteDragon } from '../actions';
import { StyledOptions } from '../styles/StyledOptions';
import { StyledButton } from '../styles/StyledButton';
import AddDragonModal from './AddDragonModal';
import EditDragonModal from './EditDragonModal';

//Button to call the action.
//TODO use icons instead of the action name
const Options = (props) => {
    const { dragon, deleteDragon } = props;
    const [addModal, setAddModal] = useState(false);
    const toggleAddModal = () => setAddModal(!addModal);

    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = () => setEditModal(!editModal);

    return (
        <StyledOptions>
            <div className="button-wrapper">
                <StyledButton
                    className="options"
                    onClick={toggleAddModal} title="ADD">
                    ADD
                </StyledButton>
                <AddDragonModal isOpen={addModal} toggle={toggleAddModal} />

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
    addDragon,
    editDragon,
    deleteDragon
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);