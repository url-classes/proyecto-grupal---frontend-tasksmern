import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PreviewProyecto = ({ proyecto }) => {


  const { nombre, _id, cliente } = proyecto;

  return (
    <div className='border-b p-5 flex '>
      <p className='flex-1 text-sm'>
      {nombre}

      <span className='text-sm text-gray-600 uppercase'>
        {''} {cliente}
      </span>
      </p>

      <Link to={`${_id}`}
      className="text-gray-700 hover:text-gray-900 uppercase
      text-sm font-black"> Ver Proyecto
      </Link>
    </div>
  );
};

export default PreviewProyecto;
