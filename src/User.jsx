import React from 'react'

const User = (propc) => {
  return (
    <div className='conteiner'>
     <button>
     <h3>Users:</h3>
       <div>Name:{propc.name}</div>
    <div>Sure-Name:{propc.sureName}</div>
   <div>Age:{propc.age}</div>
     </button>
    </div>
  )
}
export default User