

export function Button({ className, onButtonClick, value }){
    return(
        <button className={className} onClick={onButtonClick}>{value}</button>
    );
}