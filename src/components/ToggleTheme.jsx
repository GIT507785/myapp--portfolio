import React, { useEffect } from 'react'
import sun_Icon from '../assets/sun_icon.svg'
import moon_Icon from '../assets/moon_icon.svg'

const ToggleTheme = ({theme , setTheme}) => {

  
 const preferDarkMode =  window.matchMedia('(prefer-color-scheme:dark)').matches
    setTheme(theme || (preferDarkMode ? 'dark' : 'light') )

 useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme' , theme)
 },[theme])


  return (
    <div>
        {theme === 'dark' ? (
            <div  onClick={()=>setTheme('light')} className='h-10 flex text-blue-700  
            items-center cursor-pointer justify-center w-10 rounded-full border-2 ' >
                <img src={sun_Icon} alt="" />
            </div>
            
        ):( 
            <div onClick={()=>setTheme('dark')} className='h-10 w-10 rounded-full cursor-pointer flex items-center justify-center bg-white text-gray-500' >
                <img src={moon_Icon} alt="" />
            </div>
        )}
    </div>
  )
}

export default ToggleTheme