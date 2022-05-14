import React, { useState } from 'react'
import styled from 'styled-components'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Liste = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Deroulant = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    width: 85%;
    background-color: #FF6060;    
    border-radius: 8px;
    & h3 {
        padding-left: 20px;
        color: white;
        font-size: 24px;
    }
    & svg {
        color: white;
        font-size: 32px;
        cursor: pointer;
    }
`

const Button = styled.button`
    border: none;
    background-color: #FF6060;
`

const Texte = styled.div`
    background-color: #F6F6F6;
    width: 100%;
    padding: 20px;
    border-radius: 0 0 8px 8px;
    font-size: 24px;
    color: #FF6060;
`

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const openOrCloseCollapse = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <Liste
      className={isOpen ? 'collapse collapseOpen' : 'collapse collapseClose'}
    >
      <Deroulant className="title">
        <h3>{title}</h3>
        <Button
          className={isOpen ? 'btReverse' : 'bt'}
          type="button"
          onClick={openOrCloseCollapse}
          name={isOpen ? 'close' : 'open'}
        >
            <FontAwesomeIcon icon={faAngleDown}/>
        </Button>
      </Deroulant>
      <ul className={isOpen ? 'content contentOpen' : 'content contentClose'}>
        {typeof content === 'string' ? (
          <Texte>{content}</Texte>
        ) : (
          content.map((elm,index) => 
          <li key={index}>{elm}</li>
          )
        )}
      </ul>
    </Liste>
  )
}

export default Collapse