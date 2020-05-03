import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import { StyledDragonsList } from '../styles/StyledDragonsList';
import { StyledDragonContainer } from '../styles/StyledDragonContainer';
import Options from './Options';

//TODO create interface for adding, editing and deleting dragons
//TODO add better styles to the data
let renderDragons = (dragons) => {
  //Sorting dragons by alphabetical order
  const sortedDragons = dragons.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));

  //Rendering the dragon list if the data is found
  return sortedDragons.map((dragon, index) => {
    const { id, name, type, createdAt, history, histories } = dragon;

    //Converting date to format 02/12/2012.  
    const formattedDate = format(new Date(createdAt), 'dd/MM/yyyy hh:mm:ss');

    return (
      <StyledDragonContainer key={index}>
        <div className="dragon-item">
          <h2>{`${id}. ${name}`}</h2>
          <h4>Type: {type}</h4>

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
  if (dragons) {
    return (
      <StyledDragonsList>
        {renderDragons(dragons)}
      </StyledDragonsList>)
  }

  return null;
};

//Mapping current list of dragons state to props
const mapStateToProps = state => ({
  dragons: state.dragons,
});

export default connect(mapStateToProps, null)(DragonsList);
