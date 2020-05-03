import React from 'react';
import { connect } from 'react-redux';
import { addDragon, editDragon, deleteDragon } from '../actions';
import { StyledOptions } from '../styles/StyledOptions';
import { StyledButton } from '../styles/StyledButton';

//Button to call the action.
//TODO use icons instead of the action name
const Options = (props) => {
    const { dragon, addDragon, editDragon, deleteDragon } = props;

    return (
        <StyledOptions>
            <div className="button-wrapper">
                <StyledButton
                    className="options"
                    onClick={addDragon} title="ADD">
                    ADD
            </StyledButton>
                <StyledButton
                    className="options"
                    onClick={() => editDragon(dragon.id)} title="EDIT">
                    EDIT
            </StyledButton>
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