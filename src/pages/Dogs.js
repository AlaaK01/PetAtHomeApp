import React, {useState} from 'react'
import DogFormCollection from '../ui-components/DogFormCollection';
import DogCreateForm from '../ui-components/DogCreateForm';
import DogUpdateForm from '../ui-components/DogUpdateForm';
import NavBarDogs from '../ui-components/NavBarDogs';
import AsideDog from '../pages/AsideDog';

const Cats = () => {
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [updateDog, setUpdateDog] = useState();

  return (
    <>
    <AsideDog />
    <NavBarDogs width='100%' backgroundColor='hsl(190, 95%, 30%)'
      overrides={{Badge: {onClick: () => setShowCreateModel(true)}}}
    />
     <div className='container'>
     <DogFormCollection overrideItems={({item, idx}) => {return{
          overrides: {EditMark: {
            as: `button`, onClick: () => 
            {setShowUpdateModel(true)
            setUpdateDog(item)}
          }}
        }}} />
    </div>
   
    <div className='model' style={{display: showCreateModel === false && 'none'}}>
      <DogCreateForm overrides={{SubmitButton: {as: `button`, onClick: () => setShowCreateModel(false)}}}/>
    </div>
    <div className='model'style={{ display: showUpdateModel === false && 'none'}}>
        <DogUpdateForm dog={updateDog} overrides={{
          SubmitButton: { as: `button`, onClick: () => setShowUpdateModel(false)}        }} />
    </div>
    </>
  )
}

export default Cats





