import { Link } from 'react-router-dom'

function UserCard(props) {
    return (
        <>
            <Link to={`/Usuarios/${props.user.id}`} className="user-cart">
                <p className="user-name">{props.user.name}</p>
                <img key={props.index} src={`http://localhost:3030${props.imagen}`} alt={`Imagen ${props.index + 1}`} width={100}/>
                <p className='email' >{props.user.email}</p>
            </Link>
        </>
    )
}
export default UserCard;