import { NextResponse } from 'next/server';

export async function GET() {
  const teamId = "CV294W9LH5";
  const bundleId = "com.wiqiapp.ios";
  
  const data = {

  "applinks": {
    "details": [
      {
        "appIDs": [
          "CV294W9LH5.com.wiqiapp.ios"
        ],
        "components": [
          {
            "/": "/*"
          }
        ]
      }
    ]
  }

  };

  return NextResponse.json(data);
}
