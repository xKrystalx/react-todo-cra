import '../../styles/decorators/card.css';
import { useState } from 'react';

export function Card({ children, showOnHover=false }){
    const [isHovering, setHover] = useState(false);

    return(
        <div 
            className={`card ${(isHovering && showOnHover) ? 'active' : ''}`}
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
        >{ children }</div>
    )

    function handleMouseEnter(){
        setHover(true);
    }
    function handleMouseLeave(e){
        setHover(false);
    }
}