import { NextRequest, NextResponse } from "next/server";


export function GET(req : NextRequest){

    return NextResponse.json({
        message : "success",
        countOfUsers : 5, 
        users: [
            { id : 10 , username : "ismail" , age : 30},
            { id : 10 , username : "ismail" , age : 30},
            { id : 10 , username : "ismail" , age : 30},
            { id : 10 , username : "ismail" , age : 30},
            { id : 10 , username : "ismail" , age : 30}
        ]
    })
}