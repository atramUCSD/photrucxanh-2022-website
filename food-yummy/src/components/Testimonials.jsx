import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/Avatar1.png";
import avatar2 from "../assets/Avatar2.png";
import avatar3 from "../assets/Avatar3.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1 style={{textAlign:"center"}}>
            <span>What</span> Customers Say (from <span style={{color:"red"}}>Yelp</span>)
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <p>
            DELICIOUS. I am so glad I got a recommendation to try this place out from a friend. Not only is the
            service INCREDIBLE, but the food is delicious. The portions are huge (and worth the price), and it is
            healthy as well as filling.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="" />
            </div>
            <p>
              
            The food and service are top tier. The staff are all very friendly and personable, they&#39;ll treat you like
            family! Will 100% be coming back when I am around the area! 11/10 would recommend to anyone
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar3} alt="" />
            </div>
            <p>
            Outstanding food and even more outstanding staff. Kindest family seems to operate the restaurant with
            a humbling mentality that all customers are dignified guests and old friends at the same time. They
            check in with every table and eagerly make sure you feel at home and are getting everything you need...
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #358D51, #97A54E, #358D51);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: #fdf3e2;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: #fdf3e2;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
