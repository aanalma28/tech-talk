'use server'
import { NextResponse } from "next/server"
import User from '../../../../../lib/models/users'

export async function POST(request){
    if(request.method == 'POST'){
        try{
            const data = await request.formData()

            console.log(data)
            const username = data.get('username')
            const email = data.get('email')
            const password = data.get('password')

            if(!username || !email || !password){
                return NextResponse.json(
                    {                        
                        message: 'All fields are required.',
                        success: false
                    },
                )            
            }

            const query = User.where({ username, email, password })
            const user = await query.findOne()

            if(user){
                return NextResponse.json(
                    {                        
                        message: `User ${username} already exists`,
                        success: false
                    }                    
                )
            }

            const userCreate = new User({
                username,
                email,
                password
            })

            await userCreate.save()

            return NextResponse.json(
                {                    
                    message: 'Registration Successful !',                
                    info: {
                        username,
                        email,
                        password
                    },
                    success: true
                }
            )            
        }
        catch(e){
            return NextResponse.json({errors: e});
        }
    }
}