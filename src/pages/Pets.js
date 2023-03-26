import React, {useState} from 'react'
import PetFormCollection from '../ui-components/PetFormCollection';
import PetCreateForm from '../ui-components/PetCreateForm';
import PetUpdateForm from '../ui-components/PetUpdateForm';
import NavBarPets from '../ui-components/NavBarPets';
import AsidePet from '../pages/AsidePet';

const Cats = () => {
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [UpdatePet, setUpdatePet] = useState();

  return (
    <>
    <AsidePet />
    <NavBarPets width='100%' backgroundColor='hsl(190, 95%, 30%)'
      overrides={{Badge: {onClick: () => setShowCreateModel(true)}}}
    />
     <div className='container'>
     <PetFormCollection overrideItems={({item, idx}) => {return{
          overrides: {EditMark: {
            as: `button`, onClick: () => 
            {setShowUpdateModel(true)
            setUpdatePet(item)}
          }}
        }}} />
    </div>
   
    <div className='model' style={{display: showCreateModel === false && 'none'}}>
      <PetCreateForm overrides={{SubmitButton: {as: `button`, onClick: () => setShowCreateModel(false)}}}/>
    </div>
    <div className='model'style={{ display: showUpdateModel === false && 'none'}}>
        <PetUpdateForm pet={UpdatePet} overrides={{
          SubmitButton: { as: `button`, onClick: () => setShowUpdateModel(false)}        }} />
    </div>
    </>
  )
}

export default Cats
