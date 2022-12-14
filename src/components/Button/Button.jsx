import './Button.css'

const Button = (props) => {
    console.log('props', props);
    const {color, onClick, children, size, } = props
    return(
        <button style={{backgroundColor: color }}
         onClick={onClick}
         className={`button ${size},`}>

         {children}
         </button>
    ) 
} 

export default Button