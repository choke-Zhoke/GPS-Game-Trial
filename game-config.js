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
  radiusMeters: 15,

  // เพิ่มหรือลบรายการ makeCheckpoint(...) เพื่อเปลี่ยนจำนวนคำถาม
  checkpoints: [
    makeCheckpoint("จุดที่ 1", 13.4221, 100.2921, "เมืองหลวงของประเทศไทยคือข้อใด?", [
      { id: "a", label: "เชียงใหม่" },
      { id: "b", label: "กรุงเทพมหานคร" },
      { id: "c", label: "ภูเก็ต" },
      { id: "d", label: "ขอนแก่น" }
    ], "b"),

    makeCheckpoint("จุดที่ 2", 13.7066, 100.4899, "1 กิโลเมตรเท่ากับกี่เมตร?", [
      { id: "a", label: "10 เมตร" },
      { id: "b", label: "100 เมตร" },
      { id: "c", label: "1,000 เมตร" },
      { id: "d", label: "10,000 เมตร" }
    ], "c"),

    makeCheckpoint("จุดที่ 3", 13.7067, 100.4896, "ดาวเคราะห์ดวงใดอยู่ใกล้ดวงอาทิตย์ที่สุด?", [
      { id: "a", label: "ดาวพุธ" },
      { id: "b", label: "ดาวศุกร์" },
      { id: "c", label: "โลก" },
      { id: "d", label: "ดาวอังคาร" }
    ], "a"),

   
  ]
};
