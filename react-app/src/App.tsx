import React, {useState, useEffect} from 'react';
import './App.css';
import { Table } from 'antd';
import {Route} from './sharedTypes/Routes'
import axios from 'axios';


function App() {
  const [dataSource, setDataSource] = useState<Route[]>();


  useEffect(() => {
    axios.get('http://localhost:3000/routes').then((res) => {
      const data = res.data.map((route: Route) => {
        return {
          title: route.title,
          startPosition: `lat:${route.startPosition.lat} lng:${route.endPosition.lng}`,
          endPosition: `lat:${route.endPosition.lat} lng:${route.endPosition.lng}`
        }
      })
      
      setDataSource(data)
    })
  }, [])
  
  const columns = [
    {
      title: 'Título da rota',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Posição Inicial',
      dataIndex: 'startPosition',
      key: 'startPosition',
    },
    {
      title: 'Posição Final',
      dataIndex: 'endPosition',
      key: 'endPosition',
    },
  ];
  return (
    <div className="App">
      <div className="app-container">
        <p>Desafio 2 - Imersão Full Stack Full Cycle </p>
        <Table rowKey={(record) => record.title} dataSource={dataSource} columns={columns}  pagination={false}   />
      </div>
    </div>
  );
}

export default App;
