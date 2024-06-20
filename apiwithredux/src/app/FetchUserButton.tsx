import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiUsers } from '../features/apiSlice';
import { log } from 'console';

const FetchUserButton = () => {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data :any)=>data.userData.apiUsers);
    console.log(apiUserData);

  useEffect(() => {
      dispatch(fetchApiUsers());
  },[])

  return (
    // <button onClick={() => dispatch(fetchApiUsers())}>Get User</button>
    <div>
        <h1 className='text-3xl'>User list From Api</h1>
        {
            apiUserData.map((item :any)=>(
                <div key={item.id}>
                    <h2> User Name : {item.name}</h2>
                    <p className='text-green-600'>Email : {item.email}</p>
                </div>
            ))
        }

    </div>
  );
};
 
export default FetchUserButton;