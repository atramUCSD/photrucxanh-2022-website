import React from "react";
import styled from "styled-components";
import logo from "../assets/FoodYummy.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img style={{width:"10rem", height:"5.5rem"}} src={logo} alt="" /> 
          <p>
            Check out our Social Media!
          </p>
          <ul>
            <li>
              <AiFillInstagram onClick={() => window.open("https://www.instagram.com/pho_trucxanh/?hl=en","_blank")} />
            </li>
            <li>
              <FaFacebookF onClick={() => window.open("https://www.facebook.com/photrucxanh2012","_blank")}/>
            </li>
            {/*
            <li>
            <BsTwitter />
            </li>
            */}
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.9629351812118!2d-117.22017120530954!3d33.16357293258265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc75ab3f348e53%3A0x6c50410eb45f49bd!2s770%20Sycamore%20Ave%2C%20Vista%2C%20CA%2092083!5e0!3m2!1sen!2sus!4v1661773280511!5m2!1sen!2sus" width="700vw" height="500vw" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p> 770 Sycamore Ave, Vista, CA, 92083 </p>
          </div>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>(760)-489-8201</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          <span> Phở Trúc Xanh </span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #358D51, #97A54E);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  
  iframe {
    @media only screen and (max-width: 1024px){
      display: none;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    text-align: center;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 0vw; 
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      margin-right:auto;
      margin-left:auto;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #358D51;
        font-size: 2rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
  
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
      text-align:center;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #358D51;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
