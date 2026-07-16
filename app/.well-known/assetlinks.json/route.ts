import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.wiqi.app",
        sha256_cert_fingerprints: [
          "0e:68:53:9f:3a:53:11:8d:2b:40:53:d7:f7:ad:5f:be:35:61:b4:0d:b0:28:31:4e:42:21:b6:1a:db:6a:f6:f5",
          "b0:22:b8:85:5c:3d:31:15:a0:05:5d:0b:35:70:99:80:d8:f8:f6:6a:8b:f1:d6:84:9e:de:bd:d9:0a:7b:e2:55",
          "a9:22:42:6d:fb:49:50:68:fb:97:a3:0a:77:f0:3c:15:5d:8e:19:26:8f:8b:87:a8:7e:2e:36:b4:12:62:60:63"
        ]
      }
    }
  ];

  return NextResponse.json(data);
}
