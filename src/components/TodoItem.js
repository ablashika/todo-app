import React,{useState}from 'react'

export default function TodoItem({user,handleClick}) {

    const [isActive, setIsActive] = useState(false)
    const [isDecorative, setDecorative] = useState(false)
  return (
 
        <div className='item'>
             <div className='icon-circle'
             style={{
              backgroundImage: isActive ? `linear-gradient(243deg, rgb(6, 126, 237) 0%, rgb(157, 24, 177) 76%, rgb(0, 208, 250) 100%)` : '',
               color: isActive ? 'white' : '',
              }}
              onClick={()=>{
                  setIsActive(!isActive);
                  setDecorative(!isDecorative);
                  handleClick(user);
              }}
             >
             <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
              </div>
                <p style={{
                  textDecoration: isDecorative?'line-through': ""
                }}>{user.note}</p>
              
              </div>
    

  

  )
}
