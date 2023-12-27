import { connectTODB } from "@/lib/mongodb";

import User from "@/app/models/NewUser"
import { NextRequest ,NextResponse } from "next/server";
import bcrypt from "bcryptjs"


connectTODB()



export const POST = async(req)=>{
     connectTODB()
  const {username,email,password,credit,AccountNo,IBAN} = await req.json()
    try {
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({ message:"this user is in our database"})
        }
       
        // const hashedPassword = bcryptjs.hash(password ,10)

        const newUser = new User({
            username,
            password,
            email,
            credit,
            AccountNo,
            IBAN
        })

        await newUser.save()
       return NextResponse.json({message : "user Is succeefully registered"},{status :201})

    } catch (error) {
        return NextResponse.json({message : "there is an error while registering"},{status :500})

    }
}