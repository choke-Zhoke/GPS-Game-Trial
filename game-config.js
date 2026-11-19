window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCtho7Qk4Q7Oknia6qtZegAkEfc2nAjXrQ",
  authDomain: "test-sds-quest.firebaseapp.com",
  databaseURL: "https://test-sds-quest-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-sds-quest",
  appId: "1:1001770130052:web:5ea20d8e205da75f7f40d1"
};

const makeCheckpoint = (
  name,
  lat,
  lng,
  question,
  options,
  answer,
  points = 100,
  wrongPenalty = 10,
  image = "",
  imageAlt = ""
) => ({
  id: name.toLowerCase().replace(/\s+/g, "-"),
  name,
  lat,
  lng,
  question,
  options,
  answer,
  points,
  wrongPenalty,
  image,
  imageAlt
});

window.GAME_CONFIG = {
  gameId: "sds-quest-trial",
  title: "SDS Quest",
  radiusMeters: 25,

  // เพิ่มหรือลบรายการ makeCheckpoint(...) เพื่อเปลี่ยนจำนวนคำถาม
  checkpoints: [
    
{

  ...makeCheckpoint("จุดที่ 1", 13.7359, 100.5444, "นี้คือตัวอะไร ?", [

    { id: "a", label: "จระเข้" },
    { id: "b", label: "ปลาโลมา" },
    { id: "c", label: "เต่า" },
    { id: "d", label: "กบ" }
  ], "b"),

  image: "./images/question-1.jpg",
  imageAlt: "ภาพสัตว์ในคำถามข้อ 1"
},
    
    
    makeCheckpoint("จุดที่ 2", 13.7356, 100.5450, "เมืองหลวงของประเทศไทยคือข้อใด?", [
      { id: "a", label: "เชียงใหม่" },
      { id: "b", label: "กรุงเทพมหานคร" },
      { id: "c", label: "ภูเก็ต" },
      { id: "d", label: "ขอนแก่น" }
    ], "b"),

    
    makeCheckpoint("จุดที่ 3", 13.7355, 100.5456, "1 กิโลเมตรเท่ากับกี่เมตร?", [
      { id: "a", label: "10 เมตร" },
      { id: "b", label: "100 เมตร" },
      { id: "c", label: "1,000 เมตร" },
      { id: "d", label: "10,000 เมตร" }
    ], "c"),


    {

  ...makeCheckpoint("จุดที่ 4", 13.7356, 100.5453, "Who is This?", [

    { id: "a", label: "พี่ณเดช" },
    { id: "b", label: "พี่กฤษ" },
    { id: "c", label: "พี่เซียวจ้าน" },
    { id: "d", label: "พี่หมาก ปริญ" }
  ], "b"),

  image: "./images/question-4.jpg",
  imageAlt: "ภาพคำถามข้อ 4"
}

   
  ]
};
