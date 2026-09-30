import React from 'react'
import { pageLinks } from '../../data';

const PageLinks = ({groupClass}) => {
  return (
    <ul className={groupClass}>
        {pageLinks.map((link)=>{
                return(<li key={link.id}><a  href={link.href}>{link.text}</a></li>)
            }
        )}
    </ul> 
  )
}

export default PageLinks