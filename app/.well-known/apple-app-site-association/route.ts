import { NextResponse } from 'next/server';

export async function GET() {
  const teamId = "CV294W9LH5";
  const bundleId = "com.wiqiapp.ios";
  
  const data = {

 
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "CV294W9LH5.com.wiqiapp.ios",
        "paths": [
          "*"
        ]
      }
    ]
  }


  };

  return NextResponse.json(data);
}
