import React from 'react'
import { Search as  SearchIcon} from 'lucide-react'
import style from "./style.module.css"


export const Search = ({value, onChange}) => {
    
  return (
    <label className={style.search}>
        <SearchIcon size={16}/>
        <input onChange={(e) => onChange(e.target.value)}
          className={style.input} 
          type="text" 
          placeholder='Поиск...' 
          value={value} 
        />
    </label>
  )
}
