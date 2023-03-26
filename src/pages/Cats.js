import React, {useState} from 'react'
import CatFormCollection from '../ui-components/CatFormCollection';
import CatCreateForm from '../ui-components/CatCreateForm';
import CatUpdateForm from '../ui-components/CatUpdateForm';
import NavBarCats from '../ui-components/NavBarCats';
import AsideCat from '../pages/AsideCate';

const Cats = () => {
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [UpdateCat, setUpdateCat] = useState();

  return (
    <>
    <AsideCat />
    <NavBarCats width='100%' backgroundColor='hsl(190, 95%, 30%)'
      overrides={{Badge: {onClick: () => setShowCreateModel(true)}}}
    />
     <div className='container'>
     <CatFormCollection overrideItems={({item, idx}) => {return{
          overrides: {EditMark: {
            as: `button`, onClick: () => 
            {setShowUpdateModel(true)
            setUpdateCat(item)}
          }}
        }}} />
    </div>
   
    <div className='model' style={{display: showCreateModel === false && 'none'}}>
      <CatCreateForm overrides={{SubmitButton: {as: `button`, onClick: () => setShowCreateModel(false)}}}/>
    </div>
    <div className='model'style={{ display: showUpdateModel === false && 'none'}}>
        <CatUpdateForm cat={UpdateCat} overrides={{
          SubmitButton: { as: `button`, onClick: () => setShowUpdateModel(false)}        }} />
    </div>
    </>
  )
}

export default Cats





