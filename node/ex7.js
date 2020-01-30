var os = require("os");
console.log("호스트명 : "+os.hostname());
console.log("운영체제의 종류 : "+os.type());
console.log("운영체제의 플렛폼 : "+os.platform());
console.log("아키텍처(비트수) : "+os.arch());
console.log("운영체제의 버전 : "+os.release());
console.log("로드에버리지 정보: "+os.update());
console.log("총메모리사용공간: "+os.loadavg());
console.log("사용 가능한 메모리 공간: "+os.freemem());
console.log("사용중인 cpu 정보: "+os.cpus();
console.log("네트워크 인터페이스 정보 :"+os.getNetworkInterfaces);