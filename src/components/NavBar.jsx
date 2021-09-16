import React from 'react';
import AvocadoIcon from '../assets/avo-icon'
import BasketIcon from '../assets/basket-icon'
import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    background: #fff;
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    top: 0;
    display: flex;
    justify-content: center;

` 
const ActionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-height: 100%;
    width: 50%;

`
const Link = styled(LinkRouter)`
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px;
    text-decoration: none;
    color: rgba(0,0,0,0.95);
    &:hover {
        background-color: rgba(0,0,0,.03);
    }
`
const LinkHome = styled(Link)`
    background-color: ${props=>props.basketIconActive? '': 'rgba(0,0,0,0.03)'};
    ${props=>props.basketIconActive? '': `
        &::after {
            position: absolute;
            content: "";
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
            background: rgb(247, 247, 247);
            margin: .5px 0 0;
            width: .57142857em;
            height: .57142857em;
            border: 1px solid #d4d4d5;
            border-top: none;
            border-left: none;
            z-index: 2;
            transition: background .1s ease;
        }    
    `};

`
const LinkBasket = styled(Link)`
    background-color: ${props=>props.basketIconActive? 'rgba(0,0,0,0.03)': ''};
    ${props=>props.basketIconActive? `
        &::after {
            position: absolute;
            content: "";
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
            background: rgb(247, 247, 247);
            margin: .5px 0 0;
            width: .57142857em;
            height: .57142857em;
            border: 1px solid #d4d4d5;
            border-top: none;
            border-left: none;
            z-index: 2;
            transition: background .1s ease;
        }
    
    `: ''};

`


const NavBar = (props) => {
    const { basketIconActive } = props
    return (
        <Header>
            <ActionContainer>
                <LinkHome to="/" basketIconActive={basketIconActive}>
                    <AvocadoIcon />
                    Home
                </LinkHome>
                <LinkBasket to="/basket" basketIconActive={basketIconActive}>
                    <BasketIcon />
                    Basket(0)
                </LinkBasket>
            </ActionContainer>
        </Header>
    )
}
export default NavBar;