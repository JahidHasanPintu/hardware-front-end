import axios from 'axios';
import React, { useState } from 'react';

const Categories = () => {
    const [categories,setCategories]=useState();
    axios.get('fakeCategry.json')
    .then(function(response){
      setCategories(response);
    })
    return (
        <div>
            <div className='grid my-5'>
                <div className='grid grid-cols-8 w-8/12 mx-auto'>
                {
                        categories?.data?.map(category => <div className="w-28  shadow-md dark:bg-gray-900 dark:text-gray-50 bg-base-100"
                        key={category.id}
                        category={category}
                        >
                        <img src={category.image} className='w-24 h-24' alt='cat'/>
                        <h3>{category.name}</h3>
                    </div>                                      
                        )
                    }
                    
                </div> 
            </div>  
        </div>
    );
};

export default Categories;