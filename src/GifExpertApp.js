import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['SNK'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            category={category} 
                            key = {category}
                        />
                    )
                }
            </ol>
        </div>
    )
} 
