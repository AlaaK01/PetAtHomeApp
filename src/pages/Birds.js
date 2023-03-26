import React, {useState} from 'react'
import BirdFormCollection from '../ui-components/BirdFormCollection';
import BirdCreateForm from '../ui-components/BirdCreateForm';
import BirdUpdateForm from '../ui-components/BirdUpdateForm';
import NavBarBirds from '../ui-components/NavBarBirds';
import AsideBird from '../pages/AsideBird';

const Birds = () => {
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [UpdateBird, setUpdateBird] = useState();

  return (
    <>
    <AsideBird />
    <NavBarBirds width='100%' backgroundColor='hsl(190, 95%, 30%)'
      overrides={{Badge: {onClick: () => setShowCreateModel(true)}}}
    />
     <div className='container'>
     <BirdFormCollection overrideItems={({item, idx}) => {return{
          overrides: {EditMark: {
            as: `button`, onClick: () => 
            {setShowUpdateModel(true)
            setUpdateBird(item)}
          }}
        }}} />
    </div>
   
    <div className='model' style={{display: showCreateModel === false && 'none'}}>
      <BirdCreateForm overrides={{SubmitButton: {as: `button`, onClick: () => setShowCreateModel(false)}}}/>
    </div>
    <div className='model'style={{ display: showUpdateModel === false && 'none'}}>
        <BirdUpdateForm bird={UpdateBird} overrides={{
          SubmitButton: { as: `button`, onClick: () => setShowUpdateModel(false)}        }} />
    </div>
    </>
  )
}

export default Birds
