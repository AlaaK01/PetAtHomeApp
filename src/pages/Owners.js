import React, {useState} from 'react'
import OwnersCollection from '../ui-components/OwnersCollection';
import OwnerCreateForm from '../ui-components/OwnerCreateForm';
import NavBarOwners from '../ui-components/NavBarOwners';
import AsideOwner from '../pages/AsideOwner';

const Owners = () => {
    const [showCreateModel, setShowCreateModel] = useState(false);
   

  return (
    <>
    <AsideOwner />
    <NavBarOwners width='100%' backgroundColor='hsl(190, 95%, 30%)'
      overrides={{Badge: {onClick: () => setShowCreateModel(true)}}}
    />
     <div className='container'>
     <OwnersCollection  />
    </div>
   
    <div className='model' style={{display: showCreateModel === false && 'none'}}>
      <OwnerCreateForm overrides={{SubmitButton: {as: `button`, onClick: () => setShowCreateModel(false)}}}/>
    </div>
    
    </>
  )
}

export default Owners
