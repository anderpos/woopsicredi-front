import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import service from '../../services/service';
import ListValue from './ListValue';

const EntryList = () => {
  const [data, setData] = useState({ entries: [], isLoading: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.get('/');
        setData({ entries: response.data, isLoading: false });
      } catch (e) {
        console.log(e);
        setData({ entries: [], isLoading: false });
      }
    };
    fetchData();
  }, []);

  const entriesList = data.entries.map(({id, name, type, createdAt}) => {
    return(
      <ListValue 
        key={id} 
        id={id}
        name={name}
        type={type}
        createdAt={createdAt} />
    )
  })
  return (
    <>
      <div className='list-container'>
        <h3>Dragons List</h3>
        <Link to={`/create`}>
          <img className="add-entry" alt="Adicionar registro" src={`${process.env.PUBLIC_URL}/img/add.png`}/>
        </Link>
        {data.isLoading ? "Loading..." : entriesList}
      </div>
    </>
  );
}

export default EntryList;