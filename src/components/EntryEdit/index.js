import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import service from '../../services/service';
import './styles.scss';

const EntryEdit = () => {
  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const { id } = useParams();
  const location = useLocation();
  let history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();

    const putData = async () => {
      try {
        await service.put(`/${id}`,{name, type} );
        history.push("/list");
      } catch (e) {
        console.log(e);
      }
    };

    const postData = async () => {
      try {
        await service.post(`/`,{name, type} );
        history.push("/list");
      } catch (e) {
        console.log(e);
      }
    };

    action === "edit" ?  putData() : postData();
    
    
  }

  function cancelEdit(){
    history.push("/list");
  }
  
  useEffect(() => {
    setAction(location.pathname.split("/")[1]);
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.get(`/${id}`);
        setName(response.data.name);
        setType(response.data.type);
      } catch (e) {
        console.log(e);
      }
    };
    
    if (action === "edit") fetchData();
  }, [id, action]);

  return (
    <div className='edit-container'>
      <h3>{action === "edit" ? "Editar" : "Inserir"}</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-field">
            <label htmlFor="name">Nome:</label>
            <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          
          <div className="form-field">
            <label htmlFor="type">Tipo:</label>
            <input id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} />
          </div>
          
          <div className="input-buttons">
            <input className="submit-button" type="submit" value="Confirmar"/>
            <input className="submit-button" type="button" name="cancel" value="Cancelar" onClick={cancelEdit} />
          </div>
          
        </fieldset>
      </form>
    </div>
  );
}

export default EntryEdit;