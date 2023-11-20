import React from 'react'
import { HomePage } from '../components/HomePage'
import FooterPart from '../components/FooterPart'
import HomePageContent from './homepage'
import Image from 'next/image'
const page = () => {
  return (<div>

    <header><HomePage/></header>
    <div><HomePageContent/></div>
    <footer><FooterPart/></footer>

    </div>
  )
}

export default page