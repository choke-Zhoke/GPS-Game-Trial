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
  wrongPenalty = 20,
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
  radiusMeters: 27,

  // เพิ่มหรือลบรายการ makeCheckpoint(...) เพื่อเปลี่ยนจำนวนคำถาม
  checkpoints: [
  

    makeCheckpoint("จุดที่ 1", 13.733240, 100.541452, "บริษัท SDS ก่่อตั้งวันที่เท่าไร?", [
      { id: "a", label: "14 กุมภาพันธ์" },
      { id: "b", label: "27 พฤษภาคม" },
      { id: "c", label: "21 พฤษจิกายน" },
      { id: "d", label: "1 เมษายน" }
    ], "b"),

  

{

  ...makeCheckpoint("จุดที่ 2", 13.734013, 100.539481, "มีพนักงานที่ยังทำงานจนถึงปัจจุบันกี่คน ?", [

    { id: "a", label: "2" },
    { id: "b", label: "3" },
    { id: "c", label: "4" },
    { id: "d", label: "5" }
  ], "b"),

  image: "./images/question-2.jpg",
  imageAlt: "ภาพคำถามข้อ 2"
},
    
    
    
    makeCheckpoint("จุดที่ 3", 13.730357, 100.538598, "บริษัทของเราไม่เคยอยู่ที่ตึกอะไร?", [
      { id: "a", label: "ปานะวงศ์" },
      { id: "b", label: "สินธร" },
      { id: "c", label: "ธนกิจ" },
      { id: "d", label: "บุญชัย" }
    ], "d"),



    {

   ...makeCheckpoint("จุดที่ 4", 13.727276, 100.544167, "คนนี้คือใคร ?", [

    { id: "a", label: "Kobori san" },
    { id: "b", label: "Saitama san" },
    { id: "c", label: "Isobe san" },
    { id: "d", label: "Kurilin san" }
  ], "c"),

  image: "./images/question-4.jpg",
  imageAlt: "ภาพคำถามข้อ 4"

},


{

  ...makeCheckpoint("จุดที่ 5", 13.731422, 100.545149, "สองคนนี้เล่นกีฬาอะไร ตอนเป็นนักศีกษา ?", [

    { id: "a", label: "ปิงปอง" },
    { id: "b", label: "ฟุตบอล" },
    { id: "c", label: "กระโดดสูง" },
    { id: "d", label: "เป่ากบ" }
  ], "b"),

  image: "./images/question-5.jpg",
  imageAlt: "ภาพคำถามข้อ 5"
},
  
  
    
    makeCheckpoint("จุดที่ 6", 13.732072, 100.543435, "ชื่อไหนไม่ใช่ชื่อ บริษัทของเรา?", [
      { id: "a", label: "SDS International Group" },
      { id: "b", label: "Siam Denki Shoji" },
      { id: "c", label: "Siam Densho" },
      { id: "d", label: "SDS Trading" }
    ], "b"),



    
    makeCheckpoint("จุดที่ 7", 13.733895, 100.539029, "รู้มั้ย บริษัทเราเคยเรียกกันด้้วย Code Name เป็นตัวอักษรภาษาอังกฤษ ตัวอะไร?", [
      { id: "a", label: "H" },
      { id: "b", label: "I" },
      { id: "c", label: "J" },
      { id: "d", label: "K" }
    ], "d"),




    {

  ...makeCheckpoint("จุดที่ 8", 13.731719, 100.538764, "มีพนักงานที่ยังทำงานจนถึงปัจจุบันกี่คน ?", [

    { id: "a", label: "2" },
    { id: "b", label: "3" },
    { id: "c", label: "4" },
    { id: "d", label: "5" }
  ], "a"),

  image: "./images/question-8.jpg",
  imageAlt: "ภาพคำถามข้อ 8"
},



 makeCheckpoint("จุดที่ 9", 13.729317, 100.539780, "บริษัทของเรามีทั้งหมดกี่สาขา?", [
      { id: "a", label: "4" },
      { id: "b", label: "5" },
      { id: "c", label: "6" },
      { id: "d", label: "7" }
    ], "c"),



    
 makeCheckpoint("จุดที่ 10", 13.727487, 100.542831, "นับไทยเป็นสาขาที่1, สาขาที่3 ของบริษัทเราอยู่ที่ประเทศอะไร?", [
      { id: "a", label: "Singapore" },
      { id: "b", label: "Indonesia" },
      { id: "c", label: "Japan" },
      { id: "d", label: "Vietnam" }
    ], "a"),

 


    {

  ...makeCheckpoint("จุดที่ 11", 13.729316, 100.544788, "นักร้องที่นายห้าง Kato ชื่นชอบคือใคร?", [

    { id: "a", label: "นันทิดา" },
    { id: "b", label: "มาวีวัลย์" },
    { id: "c", label: "มาช่า" },
    { id: "d", label: "รวิวรรณ" }
  ], "b"),

  image: "./images/question-11.jpg",
  imageAlt: "ภาพคำถามข้อ 11"
},



   {

  ...makeCheckpoint("จุดที่ 12", 13.732377, 100.544644, "มีพนักงานที่ยังทำงานจนถึงปัจจุบันกี่คน ?", [

    { id: "a", label: "2" },
    { id: "b", label: "3" },
    { id: "c", label: "4" },
    { id: "d", label: "5" }
  ], "a"),

  image: "./images/question-12.jpg",
  imageAlt: "ภาพคำถามข้อ 12"
},



    {

  ...makeCheckpoint("จุดที่ 13", 13.731806, 100.541534, "มีคนที่ไม่ได้ทำงานที่ SDS กี่คน?", [

        { id: "a", label: "3" },
      { id: "b", label: "5" },
      { id: "c", label: "7" },
      { id: "d", label: "9" }

  ], "b"),

  image: "./images/question-13.jpg",
  imageAlt: "ภาพคำถามข้อ 13"
}

   
  ]
};
