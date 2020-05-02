import React from 'react';
import { connect } from 'react-redux';

//Adding styles
//TODO adapt this to styled-components
const articleStyle = {
  display: 'flex',
  width: '50%',
  margin: '0 auto',
  color: 'olive',
  alignItems: 'flex-start'
};

//TODO create interface for adding, editing and deleting dragons
//TODO add better styles to the data
let DragonsList = ({ dragons }) => {
  //Rendering the dragon list if the data is found
  if (dragons) {
    return dragons.map((dragon, index) => {
      const { id, name, type, createdAt, history, histories } = dragon;

      return (
        <article style={articleStyle} key={index}>
          <div>
            <h1>{`${id}. ${name}`}</h1>
            <h2>{type}</h2>

            {/* TODO use momentjs to format the date */}
            <p>Created at: {createdAt}</p>

            {/* TODO verify variations of history/histories data */}
            {<h4>{history}</h4>}
            {<h4>{histories}</h4>}
          </div>
        </article>
      )
    });
  }

  //TODO guarantee that a message is returned if no dragons are found
  return null;
}

//Mapping current list of dragons state to props
const mapStateToProps = state => ({
  dragons: state.dragons,
});

export default connect(mapStateToProps, null)(DragonsList);
