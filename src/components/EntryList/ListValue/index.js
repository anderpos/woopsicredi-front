import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import service from '../../../services/service';
import './styles.scss';

const ListValue = ({id, name, type, createdAt}) => {
  const [expanded, setExpanded] = useState(false);
  let history = useHistory();

  function deleteEntry(){
    const deleteData = async () => {
      try {
        await service.delete(`/${id}`,{name, type} );
        alert('Dragão excluído');
        history.push("/list");
      } catch (e) {
        console.log(e);
      }
    }

    if (window.confirm('Confirma excluir este dragão?')) {
      deleteData();
    }
  }

  return (
    <div className="list-value">
      <span className="entry-name">{name}</span>
      <div className="controls">
        <img 
          alt="Visualizar os detalhes" 
          src={`${process.env.PUBLIC_URL}/img/view.png`} 
          onClick={() => setExpanded(!expanded)}
        />
        <Link to={`/edit/${id}`}>
          <img alt="Editar este registro" src={`${process.env.PUBLIC_URL}/img/edit.png`} />
        </Link>
        <img alt="Excluir este registro" src={`${process.env.PUBLIC_URL}/img/delete.png`} onClick={deleteEntry} />
      </div>

      {expanded ? 
        <div className="expanded">
          <span>Tipo: {type}</span>
          <br/>
          <span>Data de criação: {createdAt}</span>
        </div>
        : '' 
      }
      
    </div>
    
  );
}

export default ListValue;