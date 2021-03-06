import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "nuka-carousel";

//img

import posterCap from "../assets/posterCap.png"
import heart from "../assets/heart.png"
import like from "../assets/like.png"
import orangeLike from "../assets/orangeLike.png"
import whiteLike from "../assets/whiteLike.png"


import shrekHighlight from "../assets/shrekHighlight.png"
import hojeHighlight from "../assets/hojeHighlight.png"
import spidermanHighlight from "../assets/spidermanHighlight.png"
import sonhoHighlight from "../assets/sonhoHighlight.png"
import quehorasHighlight from "../assets/quehorasHighlight.png"

const GlobalStyle = createGlobalStyle`
   *{
       padding: 0;
       margin: 0;
       box-sizing: border-box;
   }
    `;

    const Cap = styled.img`
    width: 30vw;
    height: 36vh;
    display: flex;
    margin-left: 75px;
    margin-top: 100px;
    border-radius: 10px;
    cursor: pointer;
    `;

    const HeartMain = styled.img`
    display: flex;
    margin-left: 5vw;
    margin-top: 100px;
    cursor: pointer;
    `;

    const Section = styled.section`
    width: 950px;
    height: 350px;
    position: relative;
    display: flex;
    left: 3%; 
    `;

    const Recently = styled.p`
    margin-top: 137px;
    margin-left: 556px;
    position: absolute;
    font-weight: bold;
    `;

    const Title = styled.h2`
    margin-top: 157px;
    margin-left: 556px;
    position: absolute;
    font-size: 36px;
   `;

   const Paragraph = styled.p`
    margin-top: 215px;
    margin-left: 556px;
    position: absolute;
    font-size: 14px;
   `;

   const ParagraphNumber = styled.p`
    margin-top: 305px;
    margin-left: 556px;
    position: absolute;
    font-size: 14px;
    font-weight: bold;
   `;

   const LikeButton = styled.img`
    margin-top: 305px;
    margin-left: 590px;
    position: absolute;
    cursor: pointer;
   `;

   const Highlight = styled.h1`
   font-size: 34px;
   margin-left: 50px;
   margin-top: 35px;
   margin: 30px;
   `;
   
   const DIV = styled.div`
   background-color: ;
   width: 310px;
   height: 370px;
   margin-left: 4vw;
   margin-top: 40px;
   `;

   const Container = styled.div`
     display: inline;
     justify-content: center;
     align-items: center;
     margin-top: 3vw;

     img {
       padding: 1vw;
       width: 338px;
       height: 210px;
       margin-left: -1vw;
       border-radius: 20px;
       cursor: pointer;
     }

     
     h2 {
       color: white;
       margin-left: 6px;
       font-weight: 600;
       font-size: 20px;
     }

     h3 {
       font-size: 14px;
       padding: -1vw;
       color: #fff;
       margin-left: 245px;
     }

     p {
         margin-left: 5px;
         margin-top: 30px;
     }

     h2 {
       margin-top: -1.9vw;
     }

     .favorite {
         width: 50px;
         height: 50px;
         position: absolute;
         margin-top: -210px;
         margin-left: 270px;
         cursor: pointer;
     }
     .like{
         width: 46px;
         height: 46px;
         margin-left: 260px;
         position: absolute;
         margin-top: -2.5vh;
         cursor: pointer;

     }
   `;
   

export default class Home extends Component{
    state = {
        listMovies: [
          {
            poster: shrekHighlight,
            favorite: heart,
            rate: "4/5",
            like: like,
            title: "Shrek",
            overview:
              "Para resgatar uma princesa das garras de um drag??o que cospe fogo, o ogro Shrek se une a um companheiro improv??vel: um burro brincalh??o."
    
          },
          {
            poster:
            hojeHighlight,
            favorite: heart,
            like: whiteLike,
            rate: "-",
            title: "Hoje Eu Quero Voltar...",
            overview:
              "Um novo colega de sala transforma a vida do estudante Leonardo, que tamb??m ?? cego, e complica sua amizade com sua melhor amiga."
          },
          {
            poster:
            spidermanHighlight,
            favorite: heart,
            like: orangeLike,
            rate: "3/5",
            title: "Spider-man",
            overview:
              "Ap??s ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lan??ar teias com seus parceiros de um universo alternativo."
          },
          {
            poster: sonhoHighlight,
            favorite: heart,
            like: like,
            rate: "4/5",
            title: "Um Sonho de Liberdade",
            overview:
              "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega ?? esperan??a e ?? amizade com um detento chamado Red para sobreviver ?? pris??o."
          },
          {
            poster: quehorasHighlight,
            favorite: heart,
            like: orangeLike,
            rate: "-",
            title: "Que Horas Ela Volta?",
            overview:
              "Val ?? a fiel empregada domestica de uma fam??lia rica. Mas a chegada de sua filha gera tens??o na casa e faz com que ela comece a questionar esse papel."
          }
        ]
      };


    render(){
        return(
            <div>
                <GlobalStyle />

                <Section>
                    
                <div className="Captain">
                    <Cap src={posterCap} alt="poster do filme Capit??o Fant??stico"/>
                </div> 
                <div>
                <HeartMain src={heart} alt="bot??o com cora????o"/>
                </div>

                <Recently>Visto recentemente</Recently>
                <Title>Capit??o Fant??stico</Title>
                <Paragraph>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civiliza????o, em uma r??gida rotina de aventuras. Ele ?? for??ado a deixar o isolamento e leva sua fam??lia para encarar o mundo, desafiando sua ideia do que significa ser pai.</Paragraph>
                <ParagraphNumber>4/5</ParagraphNumber>

                <LikeButton src={like} alt="bot??o de like"/> 
                </Section>

                <Highlight>Destaques</Highlight>

            <div>

        <Container>
          <Carousel wrapAround={true} slidesToShow={4}>

            {this.state.listMovies.map((item) => (
              <DIV>
                <img src={item.poster} />
                <img className="favorite" src={item.favorite} />
                <img className="like" src={item.like} />
                <h3>{item.rate}</h3>

                <div>
                  <h2> {item.title} </h2>
                  <p> {item.overview} </p>
                </div>
              </DIV>
            ))}
          </Carousel>
        </Container>
            </div>


            </div>
            
        )
    }
}