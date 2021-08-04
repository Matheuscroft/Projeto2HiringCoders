import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';
import carolines from '../../assets/CAROLINES.png'
import salmao from '../../assets/salmao.png'

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    const productStorage = JSON.stringify(data[index])
    localStorage.setItem(`@Produto-${index}`, productStorage)
    
  }

  return (
    <Container>
      <div >
        <img src={carolines} alt="logo" className="logo"/>
      </div>
      <div className="div-titulo">
        <h2 className="titulo">Roupas da coleção Inverno-Primavera</h2>
      </div>
      <section className="produtos">
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="roupa" width="200" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h5>R$ {prod.price}</h5>
            <button className="botao" onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
      <section className="footer">
        <h2 className="text-footer">Carolines Roupas Femininas — 2021</h2>
      </section>
    </Container>
  );
}

export default Home;