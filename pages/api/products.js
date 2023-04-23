// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "@/helpers/initDB"
import Product from "@/models/Product"

initDB()
export default function handler(req, res) {
  Product.find().then(data=>{
    console.log(data)
    res.status(200).json(data)

  })
  
}
