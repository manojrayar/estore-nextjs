import Link from "next/link";
import { useEffect, useState } from "react";
// import Navbar from './Components/Navbar'

const index = (props)=>{
  return (
    <div>
      {/* <Navbar /> */}
      
    <h1> Hello to Next.js</h1>
    <Link href="/product"> Go to product page </Link>
    <h2> {props.msg} </h2>
    <style jsx>
      {
        `
        h1 {
          color:blue
        }
        `
      }
    </style>
    </div>

  )
}


export async function getStaticProps(context) {
  // const res= await fetch("http://localhost:3000/api/products")
  // const data= await res.json()
  return {
    props: {msg:"data.name"}, // will be passed to the page component as props
  }
}

export default index;