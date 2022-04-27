import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

//img

import heart from "../assets/heart.png"
import like from "../assets/like.png"
import orangeLike from "../assets/orangeLike.png"
import whiteLike from "../assets/whiteLike.png"
import redLike from "../assets/redLike.png"


import shrekHighlight from "../assets/shrekHighlight.png"
import hojeHighlight from "../assets/hojeHighlight.png"
import spidermanHighlight from "../assets/spidermanHighlight.png"
import sonhoHighlight from "../assets/sonhoHighlight.png"
import quehorasHighlight from "../assets/quehorasHighlight.png"
import chickenRun from "../assets/chickenRun.png"
import rocketman from "../assets/rocketman.png"
import amareloEmicida from "../assets/amareloEmicida.jpg"

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}
`;

const Heading = styled.h1`
font-weight: 500;
margin-left: 3vw;
margin-top: 7vh;
`;


const DivMaster = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  margin-top: 2.5rem;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 20px;

`;
const DivKey = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 290px;
  height: 320px;
`;
const Pics = styled.div`
  position: relative;
  margin-top: 30px;
  width: 70px;
  height: 90x;
  
`;
const Poster = styled.img`
  width: 18.2rem;
  border-radius: 4px;
  position: relative;
  margin: -4vh;
  margin-left: 1px;
  cursor: pointer;

`;

const BoxInfo = styled.div`
  width: 16.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;

  p {
font-size: 0.9rem;
margin-top: 13px;
}

  h2 {
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-size: 18px;
margin-top: 20px;
}
`;

const DIV = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 15px;
`;

const Fav = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: -1.1rem;
  left: 16.3rem;
`;


const Icon = styled.img`
  height: 1.2rem;
  margin-top: 13px;
`;



 export default class Todos extends Component{

  
  state = {
    List: [
      {
        poster: shrekHighlight,
        favorite: heart,
        rate: "4/5",
        Like: like,
        title: "Shrek",
        overview:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."

      },
      {
        poster:
        hojeHighlight,
        favorite: heart,
        Like: whiteLike,
        rate: "-",
        title: "Hoje Eu Quero Voltar Sozinho",
        overview:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        poster:
        spidermanHighlight,
        favorite: heart,
        Like: orangeLike,
        rate: "3/5",
        title: "Spider-man",
        overview:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        poster: sonhoHighlight,
        favorite: heart,
        Like: like,
        rate: "4/5",
        title: "Um Sonho de Liberdade",
        overview:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      },
      {
        poster: quehorasHighlight,
        favorite: heart,
        Like: orangeLike,
        rate: "-",
        title: "Que Horas Ela Volta?",
        overview:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },
      {
        poster: chickenRun,
        favorite: heart,
        Like: redLike,
        rate: "2/5",
        title: "A Fuga das Galinhas",
        overview:
          "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
      },
      {
        poster: amareloEmicida,
        favorite: heart,
        Like: like,
        rate: "5/5",
        title: "AmarElo",
        overview:
          "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
      },
      {
        poster: rocketman,
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


    render(){
        return(
            <div>
                <GlobalStyle />


                <DivMaster>
                  
                <Heading>Todos</Heading>

                <Box>
                    {this.state.List.map((item, poster) => (
                        <DivKey key= {poster}>

                            <Pics>

                            <Poster src={item.poster} />
                            <Fav src={heart} alt="" />

                            </Pics>


                            <BoxInfo>

                           <Title>
                           <h2> {item.title} </h2>

                           <DIV>

                           <p>{item.rate}</p>
                           <Icon src={item.Like} alt="" />

                           </DIV>
                            </Title>  

                            <Paragraph> {item.overview} </Paragraph>

                            </BoxInfo>
                        </DivKey>
                    )
                    )}
                </Box>

        </DivMaster>
            </div>

        )
    }
}