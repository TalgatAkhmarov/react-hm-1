import './Ul.css'


export const Ul = (props) => {
    const names = ['Nastya', 'Petya', 'Vova']
  return (
    <ul>
     {names.map(name =>{
        return(
            <li className='names'>{name}</li>
        )
     })}
    </ul>
  )
}

export default Ul
