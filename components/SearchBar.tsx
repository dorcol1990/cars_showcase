"use client";

import Image from "next/image";
import { SearchManufacturer } from "./";
import {useState} from 'react';

const SearchButton = ({otherClasses}: {otherClasses: string})=>(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
     src="/magnifying-glass.svg"
     alt="magnifying glass"
     height={40}
     width={40}
     className="object-contain"
    />
  </button>
)

const SearchBar = () => {

const [manufacturer, setManuFacturer] = useState('');
const [model, setModel] = useState('');
const handleSearch = ()=>{}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <div className="searchbar__item">
        <Image 
         src="/model-icon.png"
         alt="model icon"
         height={25}
         width={25}
         className="absolute w-[20px] h-[20px] ml-4"
        />
        <input 
        value={model}
        type="text" 
        name="model"
        onChange={(e)=> setModel(e.target.value)}
        placeholder="Tiguain"
        className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar