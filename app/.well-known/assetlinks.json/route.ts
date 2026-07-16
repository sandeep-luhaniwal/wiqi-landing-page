import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.wiqi.app",
        sha256_cert_fingerprints:[
        "0E:68:53:9F:3A:53:11:8D:2B:40:53:D7:F7:AD:5F:BE:35:61:B4:0D:B0:28:31:4E:42:21:B6:1A:DB:6A:F6:F5",
        "B0:22:B8:85:5C:3D:31:15:A0:05:5D:0B:35:70:99:80:D8:F8:F6:6A:8B:F1:D6:84:9E:DE:BD:D9:0A:7B:E2:55",
        "A9:22:42:6D:FB:49:50:68:FB:97:A3:0A:77:F0:3C:15:5D:8E:19:26:8F:8B:87:A8:7E:2E:36:B4:12:62:60:63"
      ]
      }
    }
  ];

  return NextResponse.json(data);
}
