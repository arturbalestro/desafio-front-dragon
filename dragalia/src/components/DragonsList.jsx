import React, { useState } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import { StyledDragonsList } from '../styles/StyledDragonsList';
import { StyledDragonContainer } from '../styles/StyledDragonContainer';
import { StyledButton } from '../styles/StyledButton';
import AddDragonModal from './AddDragonModal';
import Options from './Options';

//TODO create interface for adding, editing and deleting dragons
//TODO add better styles to the data
let renderDragons = (dragons) => {
  //Sorting dragons by alphabetical order
  const sortedDragons = dragons.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));

  //Rendering the dragon list if the data is found
  return sortedDragons.map((dragon, index) => {
    const { name, type, createdAt, history, histories } = dragon;

    //Converting date to format 02/12/2012.  
    const formattedDate = format(new Date(createdAt), 'dd/MM/yyyy hh:mm:ss');

    return (
      <StyledDragonContainer key={index}>
        <div className="dragon-item">
          <h2>{name}</h2>
          <p><b>Type:</b> {type}</p>

          <p><b>Created at:</b> {formattedDate}</p>

          {history &&
            <p><b>History:</b> {history}</p>
          }

          {/* TODO improve validation of the type of histories data */}
          {histories && histories.length > 0 &&
            <p><b>Histories:</b> {histories}</p>
          }
        </div>
        <Options dragon={dragon} />
      </StyledDragonContainer>
    )
  });
}

const DragonsList = ({ dragons }) => {
  const [addModal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!addModal);

  if (dragons) {
    return (
      <StyledDragonsList>
        {renderDragons(dragons)}
        <StyledButton
          className="options"
          onClick={toggleAddModal} title="ADD">
          ADD A NEW DRAGON
        </StyledButton>
        <AddDragonModal isOpen={addModal} toggle={toggleAddModal} />
      </StyledDragonsList>)
  }

  return null;
};

//Mapping current list of dragons state to props
const mapStateToProps = state => ({
  dragons: state.dragons,
});

export default connect(mapStateToProps, null)(DragonsList);
