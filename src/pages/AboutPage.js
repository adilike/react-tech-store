import React from "react";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/AboutPage/Info";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg}></Hero>
      <Info />
    </>
  );
}