import './Input.css'

export const Input = (props) => {
    const {borderRadius, borderColor} = props
  return (
         
        <input style={{borderRadius, borderColor}} 
        className={`input ${borderRadius},`}
        placeholder='enter the name' type="text" />
    
  )
}

export default Input