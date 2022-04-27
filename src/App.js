import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "../src/pages/Home"
import Todos from "../src/pages/Todos"
import Favoritos from "../src/pages/Favoritos"
import Vistos from "./pages/Vistos"
import Adicionados from "../src/pages/Adicionados"

//img 

import heart from "./assets/heart.png"
import like from "./assets/like.png"
import orangeLike from "./assets/orangeLike.png"
import whiteLike from "./assets/whiteLike.png"
import redLike from "./assets/redLike.png"


import shrekHighlight from "./assets/shrekHighlight.png"
import hojeHighlight from "./assets/hojeHighlight.png"
import spidermanHighlight from "./assets/spidermanHighlight.png"
import sonhoHighlight from "./assets/sonhoHighlight.png"
import quehorasHighlight from "./assets/quehorasHighlight.png"
import chickenRun from "./assets/chickenRun.png"
import rocketman from "./assets/rocketman.png"
import amareloEmicida from "./assets/amareloEmicida.jpg"

import logo from "../src/assets/logo.png"
import down from "../src/assets/down.png"
import search from "../src/assets/search.png"
import icon from "../src/assets/icon.png"


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    color: #fff;
    background-color: #000;
  }
`;

const Logo = styled.img`
height: 8.7vh;
margin-top: 17px;
`;

const Nav = styled.nav`
  font-size: 16px;
  text-align: center;
  width: 100vw;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div`
  width: 35vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const TopRight = styled.div`
  width: 48vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Dropbox = styled.ul`
  font-family: "Poppins", sans-serif;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 10vw;
  margin-top: 15px;
`;

const LinkRouter = styled(Link)`
  color: #D3D3D3;
  text-decoration: none;

  &:hover{
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 15.7px;
  }

`;

const DropdownList = styled.ul`
  font-family: "Poppins", sans-serif;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  display: none;
  position: relative;
  padding-left: 0;
  visibility: hidden;
  opacity: 0;
  background: black;
`;

const Itens = styled.li`
  width: 9vw;
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  color: #D3D3D3;

  &:hover{
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 15.7px;
  }

  &:hover ${DropdownList} {
    width: 6vw;
    text-align: center;
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 7.2vh;
    background: black;
  }
`;

const DropdownCategory = styled.div`
  width: 10vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DropdownButton = styled.button`
  width: 10vh;
  height: 8vh;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  border: none;
  margin-right: 5vh;
  background-repeat: no-repeat;
  outline: none;
  background-color: transparent;
  margin-top: 2vh;
`;

const AddButton = styled.button`
  color: #fff;
  width: 9vw;
  margin-top: 1vh;
  height: 5vh;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: #e71b27;
  margin-left: 30px;

  &:hover {
    cursor: pointer;
  }
`;


const SearchBox = styled.label`
  width: 25vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  margin-top: 1vh;
  align-items: center;
  border-radius: 3px;
  background-color: #2c2c2c;
`;

const SearchButton = styled.button`
width: 5vw;
height: 5.8vh;
overflow: hidden;
border: none;
border-radius: 50%;
outline: none;
background-color: transparent;
background-repeat: no-repeat;
`;

const Search = styled.input`
  color: #fff;
  width: 28vw;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 16.7px;
`;

const Filter = styled.div`
display: flex;
margin-left: 50vh;
flex-direction: column;

p {
  font-size: 25px;
  font-weight: 500;
  margin-top: 2vh;
  margin-left: 18vh;
}

img {
  margin-left: 17vh;
  margin-top: 7vh;
  width: 25vw;
`;

const ProfileContainer = styled.div`
  margin-left: 1vh;
  margin-top: 1vh;
  width: 2.5vw;
  height: 5vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #981884;
`;

export default class Todoflix extends React.Component {

  
  state = {
    list: [
      {
        Poster: shrekHighlight,
        favorite: heart,
        rate: "4/5",
        Like: like,
        title: "Shrek",
        overview:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."

      },
      {
        Poster:
        hojeHighlight,
        favorite: heart,
        Like: whiteLike,
        rate: "-",
        title: "Hoje Eu Quero Voltar Sozinho",
        overview:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        Poster:
        spidermanHighlight,
        favorite: heart,
        Like: orangeLike,
        rate: "3/5",
        title: "Spider-man",
        overview:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        Poster: sonhoHighlight,
        favorite: heart,
        Like: like,
        rate: "4/5",
        title: "Um Sonho de Liberdade",
        overview:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      },
      {
        Poster: quehorasHighlight,
        favorite: heart,
        Like: orangeLike,
        rate: "-",
        title: "Que Horas Ela Volta?",
        overview:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },
      {
        Poster: chickenRun,
        favorite: heart,
        Like: redLike,
        rate: "2/5",
        title: "A Fuga das Galinhas",
        overview:
          "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
      },
      {
        Poster: amareloEmicida,
        favorite: heart,
        Like: like,
        rate: "5/5",
        title: "AmarElo",
        overview:
          "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
      },
      {
        Poster: rocketman,
        favorite: heart,
        Like: whiteLike,
        rate: "-",
        title: "Rocketman",
        overview:
          "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."
      }
    ],
    resultMovies: []
  };


  handleChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        resultMovies: this.state.list.filter((item) => {
          if (
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            return true;
          }
        })
      });
    } else {
      this.setState({
        resultMovies: []
      });
    }
  };



  render() {
    return (
      <div>
        <GlobalStyle />

        <Router>

          <Nav>
            <TopLeft>
              <Logo src={logo} alt="logo Todoflix" />
              <Dropbox>
                <Itens>
                  <LinkRouter to="/">Início</LinkRouter>
                </Itens>

                <DropdownCategory>
                  <Itens>
                    Categorias
                    <DropdownList>
                      <Itens>
                        <LinkRouter to="Todos">Todos</LinkRouter>
                      </Itens>

                      <Itens>
                        <LinkRouter to="Favoritos">Favoritos</LinkRouter>
                      </Itens>

                      <Itens>
                        <LinkRouter to="Vistos">Vistos</LinkRouter>
                      </Itens>

                      <Itens>
                        <LinkRouter to="Adicionados">Adicionados</LinkRouter>
                      </Itens>
                    </DropdownList>
                  </Itens>
                  
                </DropdownCategory>
              </Dropbox>

              <DropdownButton>
              <img src={down} alt="seta indicando para baixo" />
            </DropdownButton>

            </TopLeft>

            <TopRight>
              <AddButton>Adicionar Filmes</AddButton>

              <SearchBox>
                <SearchButton>
                  <img src={search} alt="ícone de botão de pesquisar" />
                </SearchButton>
                <Search  onChange={this.handleChange} type={'text'} placeholder="Pesquisar"></Search>

            
              </SearchBox>

             
              <ProfileContainer>
                  <img src={icon} alt="ícone de usuário" />
              </ProfileContainer>

            <DropdownButton>
              <img src={down} alt="seta indicando para baixo" />
            </DropdownButton>
              

            </TopRight>
          </Nav>

          {this.state.resultMovies.map ((item) => (
              <Filter>
                <img src={item.Poster} alt = ""/>
              <p> {item.title} </p>
              </Filter>
            ))}

          <Routes>
            <Route path="/" element={<Home />}>
              Início
            </Route>
            <Route path="Todos" element={<Todos />}>
              Todos
            </Route>
            <Route path="Favoritos" element={<Favoritos />}>
              Favoritos
            </Route>
            <Route path="Vistos" element={<Vistos />}>
              Vistos
            </Route>
            <Route path="Adicionados" element={<Adicionados />}>
              Adicionados
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}