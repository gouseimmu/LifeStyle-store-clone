import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./FilterSort.css"

const FilterSort = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [sortBy, setSortBy] = useState(searchParams.getAll('sortBy') || "")

    console.log(searchParams.getAll("category"))

    const [categoryType, setCategoryType] = useState(searchParams.getAll("category") || [])

    const[genderType,setGenderType] = useState(searchParams.getAll("gender") || [])


    const handleGenderFilter = (e)=>{
        
        const genderOption = e.target.value;
        // console.log(genderOption)

        let newGenderType = [...genderType];
      
        if(newGenderType.includes(genderOption)){
            newGenderType.splice(newGenderType.indexOf(genderOption),1)
        }else{
            newGenderType.push(genderOption)
        }
       
        setGenderType(newGenderType)
    }

    const handleFilter = (e) => {

        const option = e.target.value;

        let newCategory = [...categoryType];
        if (newCategory.includes(option)) {
            newCategory.splice(newCategory.indexOf(option), 1)
        } else {
            newCategory.push(option)
        }

        setCategoryType(newCategory)
    }
    // console.log(categoryType)

    const handleSortBy = (e) => {
        setSortBy((e.target.value))
    }
    useEffect(() => {
        const params = {};
        categoryType && (params.category = categoryType);
        genderType && (params.gender = genderType) 
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params)

    }, [categoryType, setSearchParams, sortBy,genderType])

    return (
        <div>
        <div className='filter'>

            <div className='filter-1'>
                  <h4>Categories</h4>


                <div className='filter-2'>
                    <input type="checkbox" value="Kurtas and Kurtis" defaultChecked={categoryType.includes("Kurtas and Kurtis")} onChange={handleFilter} />
                    <label>Kurtas and Kurtis</label>
                </div>

                <div className='filter-2'>
                    <input type="checkbox" value="Dresses and Jumpsuits" defaultChecked={categoryType.includes("Dresses and Jumpsuits")} onChange={handleFilter} />
                    <label>Dresses and Jumpsuits</label>
                </div>
            </div>

            <div className='filter-1'>
            <h4>Price</h4>
            <div onChange={handleSortBy}>
                <div className='filter-2'>
                    <input type="radio" name="sortBy" value="asc" defaultChecked={sortBy === 'asc'} />
                    <label>Low - High</label>
                </div>

                <div className='filter-2'>
                    <input type="radio" name="sortBy" value="desc" defaultChecked={sortBy === 'desc'} />
                    <label>High - Low</label>
                </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default FilterSort;