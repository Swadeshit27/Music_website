/*==========================Scroll music left or right==========================*/
let left = document.getElementsByClassName("fa-arrow-circle-left");
for (let i = 0; i < left.length; i++) {
  left[i].addEventListener("click", () => {
    document.getElementsByClassName("songItems")[i].scrollLeft -= 300;
  });
}
let right = document.getElementsByClassName("fa-arrow-circle-right");
for (let i = 0; i < right.length; i++) {
  right[i].addEventListener("click", () => {
    document.getElementsByClassName("songItems")[i].scrollLeft += 300;
  });
}
// /*========================== End ==========================*/

/*====================== music control =======================*/
let songs = [
  {
    id: "1",
    songname: "Agomonir Gaan (আগমনীর গান)",
    artist: "by Anupam Roy",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OVP.Cgq5rGWBZEJjnAUKI8HFZgHgFo&pid=Api&w=296&h=156&c=7&p=0",
  },
  {
    id: "2",
    songname: "Atak Gaya",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.Y1qpPr020_LW5e5jRc0x-wHaEK&pid=Api&P=0",
  },
  {
    id: "3",
    songname: "Agam - Madhurashtakam _ Adharam Madhuram",
    artist: "by unknown",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.64qLTrt1iz5UW63HEDDHHgHaFj&pid=Api&P=0",
  },
  {
    id: "4",
    songname: "Banjaara",
    artist: "by md irfan",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.G7D3Wa6aOHId26nYBM99tgHaFj&pid=Api&P=0",
  },
  {
    id: "5",
    songname: "BYE",
    artist: "by Aditya Bhardwaj",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.srahPwVhFIp2PpcupMAetAHaHa&pid=Api&P=0",
  },
  {
    id: "6",
    songname: "Hawa Banke",
    artist: "by Darshan Raval",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.o5Vu4ClxeIBl1ypRFu9jzwAAAA&pid=Api&P=0",
  },
  {
    id: "7",
    songname: "Darshana",
    artist: "by  Vineeth & Hesham",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.3s_ePgDX6o5PEa-vRJZohgAAAA&pid=Api&P=0",
  },
  {
    id: "8",
    songname: "Dekho aloy alo akash",
    artist: "by arijit singh",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.tmfrI8JYxgJ32bgtKk8W-QHaEK&pid=Api&P=0",
  },
  {
    id: "9",
    songname: "Hamdard",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.FwtDGFHq4cb6QRdz_Q91xAHaEK&pid=Api&P=0",
  },
  {
    id: "10",
    songname: "Ei Bhalo Ei Kharap",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.Bs4V39rNju6cWDA7HaNpLwHaEK&pid=Api&P=0",
  },
  {
    id: "11",
    songname: "Jimikki Ponnu",
    artist: "by  Thaman S & Vamshi Paidipally",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.iKwDmcniZWA458Y6jLwoiQAAAA&pid=Api&P=0",
  },
  {
    id: "12",
    songname: "I Love You",
    artist: "by unknown",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.LCLFANM1_n3fTxOS-xfhjQHaEK&pid=Api&P=0",
  },
  {
    id: "13",
    songname: "Jhoome Jo",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.5u9jwZATAMnC9i0RbjyVOAAAAA&pid=Api&P=0",
  },
  {
    id: "14",
    songname: "Khada Hoon Aaj Bhi Wahi",
    artist: "by local train",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.F087Ac2k2QZ585uUBWq7CwHaHa&pid=Api&P=0",
  },
  {
    id: "15",
    songname: "Murali Manohar Mohan Murari",
    artist: "by unknown",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.Q7wExSO7q1DaZOG5-3hBpwHaFj&pid=Api&P=0",
  },
  {
    id: "16",
    songname: "Malang Sajna",
    artist: "by  Sachet & Parampara ",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.ulg8J5f3lr7j0jxNqMecFQAAAA&pid=Api&P=0",
  },
  {
    id: "17",
    songname: "UFF",
    artist: "by unknown",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.Ao6Thz1t9CMxJyYqEq6SJgHaHa&pid=Api&P=0",
  },
  {
    id: "18",
    songname: "Tere Pyaar Mein",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.mLVvMCTcWkXpX3GYMymhKQHaHa&pid=Api&P=0",
  },
  {
    id: "19",
    songname: "Ureche Mon",
    artist: "by Arijit Singh ",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.gO1eRP338H14pOCebw3HeQHaEK&pid=Api&P=0",
  },
  {
    id: "20",
    songname: "Shudhu Tomari Jonyo (শুধু তোমারি জন্য)",
    artist: "by Arijit Singh & Shreya Ghoshal ",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.fidjCnvchcrOG3QUs7lkqQHaEK&pid=Api&P=0",
  },
  {
    id: "21",
    songname: "Tu Jo Mila-Raabta",
    artist: "by jubin",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.1n0d28qdV8kQZi2KzJMejwHaEK&pid=Api&P=0",
  },
  {
    id: "22",
    songname: "Pyaar Hota Kayi Baar Hai",
    artist: "by Pritam & Arijit & Amitabh",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.nsh_y39L3FiIcXw01AWL7AHaEK&pid=Api&P=0",
  },
  {
    id: "23",
    songname: "Maheroo Maheroo",
    artist: "by Shreya Ghoshal",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.bUk_4G0xPeQTJaR28Ze_VgHaFj&pid=Api&P=0",
  },
  {
    id: "24",
    songname: "Inkem Inkem",
    artist: "by Gopi Sundar",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.IBxaRc9ufKjA0e2hR8z-MwHaEK&pid=Api&P=0",
  },
  {
    id: "25",
    songname: "MITRAZ - Akhiyaan",
    artist: "by Unknown",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.X3SmTkvTFzh9SmaxcwRb4gHaHa&pid=Api&P=0",
  },
  {
    id: "26",
    songname: "MONTA RE LOOTERA",
    artist: "by unknown",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.yOoSqh16g7HRjNQR4dl7YwHaEK&pid=Api&P=0",
  },
  {
    id: "27",
    songname: "Why This Kolaveri Di",
    artist: "by Dhanush",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.7fvTbtaoo4ZRRnVc46-4pwHaEK&pid=Api&P=0",
  },
  {
    id: "28",
    songname: "Tum Tum",
    artist: "by unknown",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.BCmwqG00LDkWWfR0DCufCAAAAA&pid=Api&P=0",
  },
  {
    id: "29",
    songname: "Mera Yaar Meri Daulat",
    artist: "by unknown",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.VGkyZqdPjyGiY8GVX0lYLwHaEK&pid=Api&P=0",
  },
  {
    id: "30",
    songname: "Kashmir Main Tu Kanyakumari",
    artist: "by Arijit sing",
    coverimg:
      "https://media5.bollywoodhungama.in/wp-content/uploads/2013/09/Kashmir-Main-Tu-Kanyakumari-Chennai-Express-480x360.jpeg",
  },
  {
    id: "31",
    songname: "Tu Chale",
    artist: "by Arijit sing",
    coverimg: "https://i.ytimg.com/vi/iMuZRXsE7KI/maxresdefault.jpg",
  },
  {
    id: "32",
    songname: "Barso Re",
    artist: "by shreya ghoshal",
    coverimg: "https://i.ytimg.com/vi/xj_OHHWcPNw/maxresdefault.jpg",
  },
  {
    id: "33",
    songname: "Apna Bana Le",
    artist: "by Arijit sing",
    coverimg: "https://i.ytimg.com/vi/u2NAuswnTKs/maxresdefault.jpg",
  },
  {
    id: "34",
    songname: "Bandeya",
    artist: "by Arijit sing",
    coverimg:
      "https://c.saavncdn.com/267/Bandeya-From-Dil-Juunglee--Hindi-2018-20180222044014-500x500.jpg",
  },
  {
    id: "35",
    songname: "Barsaat Ki Dhun",
    artist: "by Jubin Nautial",
    coverimg: "https://i.ytimg.com/vi/RmltVxQCWQA/maxresdefault.jpg",
  },
  {
    id: "36",
    songname: "Chale Aao Paas Mere",
    artist: "by Arijit sing",
    coverimg: "https://i.ytimg.com/vi/BYOAsksaoPw/maxresdefault.jpg",
  },
  {
    id: "37",
    songname: "Bam Bholle",
    artist: "by unknown",
    coverimg: "https://i.ytimg.com/vi/F0SflZWxv8k/maxresdefault.jpg",
  },
  {
    id: "38",
    songname: "Dheere Dheere",
    artist: "by Honey sing",
    coverimg: "https://c.saavncdn.com/808/Dheere-Dheere-Hindi-2015-500x500.jpg",
  },
  {
    id: "39",
    songname: "Waareya",
    artist: "by Palak Muchaal",
    coverimg: "https://i.ytimg.com/vi/mJiqUu28uLM/maxresdefault.jpg",
  },
  {
    id: "40",
    songname: "Titli",
    artist: "by unknown",
    coverimg: "https://i.ytimg.com/vi/OzeQr87qmfg/maxresdefault.jpg",
  },
  {
    id: "41",
    songname: "Zindagi Bana Loon",
    artist: "by unknown",
    coverimg:
      "https://c-cl.cdn.smule.com/rs-s79/arr/dc/d7/2378a898-91d0-4385-85f9-9ae43a64af01_1024.jpg",
  },
  {
    id: "42",
    songname: "Raanjhana Ve",
    artist: "by Antara Mitra & Soham Naik",
    coverimg: "https://i.ytimg.com/vi/9fJTssABZSY/maxresdefault.jpg",
  },
  {
    id: "43",
    songname: "Tu Aake Dekhle",
    artist: "by king",
    coverimg: "https://i.ytimg.com/vi/Umo6fDbLows/hqdefault.jpg",
  },
  {
    id: "44",
    songname: "Tue maan neri jaan",
    artist: "by king",
    coverimg: "https://i.ytimg.com/vi/VuG7ge_8I2Y/maxresdefault.jpg",
  },
  {
    id: "45",
    songname: "Yaad Na Aaye",
    artist: "by Angel Rai",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.6KEYd6yRmZOl2QHTVEdTYQHaEK&pid=Api&P=0",
  },
  {
    id: "46",
    songname: "JAANA VE",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.zWEFHx7GeKrYknBESKf2ngAAAA&pid=Api&P=0",
  },
  {
    id: "47",
    songname: "KABHI YAADON MEIN",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.jOMLvwHmEOD9eQwVCXLrZwHaFj&pid=Api&P=0",
  },
  {
    id: "48",
    songname: "Saware",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.AqWBgMdUd9rXkPHOTLJEoAHaEK&pid=Api&P=0",
  },
  {
    id: "49",
    songname: "Humraah",
    artist: "by Unknown",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.D313vfLmErlA7bTBee1z9wEsCo&pid=Api&P=0",
  },
  {
    id: "50",
    songname: "Meri Zindagi Hai Tu",
    artist: "by Jubin & Neeti",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.5Kt6rZhPjFt9uisraqVg0AHaEK&pid=Api&P=0",
  },
  {
    id: "51",
    songname: "KAUN TUJHE",
    artist: "by Amaal Mallik & Palak ",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.WjxrppjOYg5ssy3JSMG2uAHaHa&pid=Api&P=0",
  },
  {
    id: "52",
    songname: "Samjhawan",
    artist: "by Arijit Singh & Shreya Ghoshal ",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.UUrzlH-DR05iyrMtSsHWRQHaHa&pid=Api&P=0",
  },
  {
    id: "53",
    songname: "Suna Hai  Sanak",
    artist: "by Jubin Nautiyal",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.npeIeqMRABwkVmdO8KtuUAHaEK&pid=Api&P=0",
  },
  {
    id: "54",
    songname: "Ritviz",
    artist: "by unknown",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.uUpE7cM_J14D5C_Tvb26MQHaHa&pid=Api&P=0",
  },
  {
    id: "55",
    songname: "jab tak",
    artist: "by unknown",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.ve5tLy_b_HCAWrqbXcWRTAAAAA&pid=Api&P=0",
  },
  {
    id: "56",
    songname: "GUCCI",
    artist: "by Aroob Khan",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP._jCauM8tOZmPbaYJPdQtewHaEZ&pid=Api&P=0",
  },
  {
    id: "57",
    songname: "Aabaad Barbaad",
    artist: "by Arijit singh",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.BwBWWqE_USaygDY6mh4L2wHaHa&pid=Api&P=0",
  },
  {
    id: "58",
    songname: "Aaja We Mahiya",
    artist: "by Imran Khan",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.APSQMPHNXMNjztq9b-ZG9AHaFj&pid=Api&P=0",
  },
  {
    id: "59",
    songname: "Chaka Chak",
    artist: "by unknown",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.cnHFxHzx9gVulACKr4qhhQHaHa&pid=Api&P=0",
  },
  {
    id: "60",
    songname: "Dil Ko Karaar Aaya",
    artist: "by neha kakkar",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.G5h5RHbSSETjXPVQTbl52wHaHa&pid=Api&P=0",
  },
  {
    id: "61",
    songname: "Mon Re Mon Re Krisikaj janena",
    artist: "by Arijit sing",
    coverimg: "https://i.ytimg.com/vi/NWKDbecvheo/maxresdefault.jpg",
  },
  {
    id: "62",
    songname: "Amar Bhindeshi Tara",
    artist: "by Chondrobindu Band",
    coverimg:
      "https://i1.sndcdn.com/artworks-ZGKd8WgA9XDZmcWh-DrkyoA-t500x500.jpg",
  },
  {
    id: "63",
    songname: "Aro Ekber cholo fire jai ",
    artist: "by Rupam Islam",
    coverimg: "https://i.ytimg.com/vi/Jz2WVoc1lOg/maxresdefault.jpg",
  },
  {
    id: "64",
    songname: "Behaya (বেহায়া)",
    artist: "by Lagnajita",
    coverimg: "https://i.ytimg.com/vi/n8lq7tF40jk/maxresdefault.jpg",
  },
  {
    id: "65",
    songname: "ভালবাসার মরশুম",
    artist: "by Shreya Ghoshal",
    coverimg:
      "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-90794115/90794115.jpg",
  },
  {
    id: "66",
    songname: "Bhalobashi Bole Dao",
    artist: "by Apurba & Tanjin Tisha",
    coverimg: "https://i.ytimg.com/vi/Ot3BZcYCeZE/maxresdefault.jpg",
  },
  {
    id: "67",
    songname: "দেখেছি রূপসাগরে",
    artist: "by  Ditipriya Dibyojyoti & Mahtim Shakib",
    coverimg: "https://i.ytimg.com/vi/ReBHEyAd2zk/mqdefault.jpg",
  },
  {
    id: "68",
    songname: "ডুবে ডুবে",
    artist: "by Tanjib Sarowar",
    coverimg: "https://i.ytimg.com/vi/oJcfdIJ36xE/maxresdefault.jpg",
  },
  {
    id: "69",
    songname: "Ek Shohor Bhalobasha",
    artist: "by Tanjib Sarowar",
    coverimg: "https://i1.sndcdn.com/artworks-000612562589-tbjlb0-t500x500.jpg",
  },
  {
    id: "70",
    songname: "এখন অনেক রাত",
    artist: "by Anupam Roy",
    coverimg: "https://i.ytimg.com/vi/PxoxzvOCKwI/maxresdefault.jpg",
  },
  {
    id: "71",
    songname: "Hrid Majhare",
    artist: "by unknown",
    coverimg:
      "https://c.saavncdn.com/976/Hrid-Majhare-Rakhbo-Bengali-2022-20220422023740-500x500.jpg",
  },
  {
    id: "72",
    songname: "Jawl Phoring জল ফড়িং",
    artist: "by Anupam Roy",
    coverimg:
      "https://i2.cinestaan.com/image-bank/640-360/180001-181000/180925.jpeg",
  },
  {
    id: "73",
    songname: "MAJHEY MAJHEY TOBO",
    artist: "by MAHTIM SHAKIB",
    coverimg:
      "https://c.saavncdn.com/282/Majhe-Majhe-Tobo-Bengali-2020-20201003174706-500x500.jpg",
  },
  {
    id: "74",
    songname: "Keu Kotha Rakheni",
    artist: "by Minar Rahman",
    coverimg: "https://i.ytimg.com/vi/gviAd_TlhIQ/maxresdefault.jpg",
  },
  {
    id: "75",
    songname: "মনটা অবাধ্য",
    artist: "by Mahtim Shakib",
    coverimg:
      "https://cdns-images.dzcdn.net/images/cover/ce43790a26c5d90dfea3bd3c62d2bff1/500x500.jpg",
  },
  {
    id: "76",
    songname: "নাম না জানা পাখি",
    artist: "by Arijit Singh & Shreya Ghoshal",
    coverimg: "https://i.ytimg.com/vi/JiV8MLQjJsw/maxresdefault.jpg",
  },
  {
    id: "77",
    songname: "নতুন প্রেমের গান",
    artist: "by Anirban & Debraj",
    coverimg: "https://i.ytimg.com/vi/PCrKhsRHjkg/maxresdefault.jpg",
  },
  {
    id: "78",
    songname: "অবশেষে",
    artist: "by Arijit Singh",
    coverimg:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiG-aD1GP2JEviyODxfDAMhUfAsDxo3DsuGEwk6UMQipmCmY_KJyOrG8Hz2cwlSKzAfc1hwmi5nIwQvXpf9XABcP0aOOUJfq3Ikr6LPNzMLWTutsXgvoyywrJxeL06ERjklf90Yd9SV39P0Gbiym-2wJ5hVY9m310Sa_URrz21uph1TAlvnF0VpIOSU/s540/Oboseshe-Lyrics-by-Arijit-Singh-from-Kishmish.jpg",
  },
  {
    id: "79",
    songname: "OLIRO KOTHA SHUNE",
    artist: "by Hemanta Mukherjee",
    coverimg: "https://i.ytimg.com/vi/XpYWLmtvvII/maxresdefault.jpg",
  },
  {
    id: "80",
    songname: "অভিমান",
    artist: "by Piran Khan & Jovan & Mehazabien",
    coverimg:
      "https://i1.sndcdn.com/artworks-FmWhbGT0IbEv0EuQ-0DEkAg-t500x500.jpg",
  },
  {
    id: "81",
    songname: "Rupkothar Jogote",
    artist: "by Unknown",
    coverimg:
      "https://1.bp.blogspot.com/-vh1mEMOZ0hg/YS4FEb2C3DI/AAAAAAAARD8/rMGOIjRgBS4HeF4apr_0Hr1-lwNPN2AvACLcBGAsYHQ/s540/Rupkothar-Jogote-Lyrics-from-Networker-Baire-Movie-Song.jpg",
  },
  {
    id: "82",
    songname: "Takey Olpo Kachhe Dakchhi",
    artist: "by Mahtim Shakib & Soumya & Susmita",
    coverimg:
      "https://i.scdn.co/image/ab67616d0000b27304e34dd6eb8bf7bbf6185536",
  },
  {
    id: "83",
    songname: "Tomake _ তোমাকে",
    artist: "by Shreya Ghoshal",
    coverimg: "https://i.ibb.co/F3gDSKb/maxresdefault-13.jpg",
  },
  {
    id: "84",
    songname: "Tomake Na Lekha Chithita",
    artist: "by Rupak Tiary",
    coverimg: "https://i.ytimg.com/vi/-kfyvQkQoXw/maxresdefault.jpg",
  },
  {
    id: "85",
    songname: "Tomar Pichu Charbo Na",
    artist: "by Unknown",
    coverimg: "https://i.ytimg.com/vi/u2UHKKiqqOA/maxresdefault.jpg",
  },
  {
    id: "86",
    songname: "Tomake Chai (তোমাকে চাই )",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.521w3D2VvGB2_Kk1qPiC0QHaEK&pid=Api&P=0",
  },
  {
    id: "87",
    songname: "Mon Amar Kemon Kemon Kore",
    artist: "by Snigdhajit Bhowmik",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.qpuPDviB258PCDzlawokYwHaEK&pid=Api&P=0",
  },
  {
    id: "88",
    songname: "Ghum Bhanga",
    artist: "by Minar Rahman",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.aeT6BHLSI4qsYFNe7OI6SwHaEK&pid=Api&P=0",
  },
  {
    id: "89",
    songname: "Egiye de",
    artist: "by Arijit Singh",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.p2_IEi-EeXBYgpjp_0Hh_gHaHa&pid=Api&P=0",
  },
  {
    id: "90",
    songname: "Age Ki Sundor din kataitam",
    artist: "by Abdul karim",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.OsHpCVHmpL1K0WXtuFt0KgHaEO&pid=Api&P=0",
  },

  {
    id: "91",
    songname: "Arijit Singh All Bengali Song",
    artist: "by Arijit sing",
    coverimg: "https://static.toiimg.com/photo/msid-94067454/94067454.jpg",
  },
  {
    id: "92",
    songname: "Arijit Singh Romantic Hindi Songs",
    artist: "by Arijit sing",
    coverimg:
      "https://reservemystar.com/wp-content/uploads/2022/05/Arijit-e1555936095637.jpg",
  },
  {
    id: "93",
    songname: "Best of palak muchhal",
    artist: "by palak muchhal ",
    coverimg:
      "https://wikibio.in/wp-content/uploads/2022/11/Palak-Muchhal-Image.jpg",
  },
  {
    id: "94",
    songname: "Jubin Nautiyal New Bhakti Songs",
    artist: "by Jubin Nautiyal",
    coverimg:
      "https://filmfare.wwmindia.com/thumb/content/2022/jun/toptensongsofjubinnautiyalyoumustlistentoonhisbirthday11655189119.jpg?width=1200&height=900",
  },
  {
    id: "95",
    songname: "Shreya Ghoshal Hit Songs",
    artist: "by Shreya Ghoshal",
    coverimg:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1669033779/ds4bbdue5v8qcakdth4c.jpg",
  },
  {
    id: "96",
    songname: "Mohammed Irfan _ Top Hindi Songs",
    artist: "by Mohammed Irfan",
    coverimg:
      "https://tse2.mm.bing.net/th?id=OIP.tIbYSFooG9DDqzHg21QeBgHaHa&pid=Api&P=0",
  },
  {
    id: "97",
    songname:
      "Armaan Malik Top 10 Song _ Cover Jukebox _ Armaan Malik _ BEST SONGS COLLECTION",
    artist: "by Armaan Malik",
    coverimg:
      "https://tse1.mm.bing.net/th?id=OIP.9HoREFWIDidmBDZawuyaOwHaHa&pid=Api&P=0",
  },
  {
    id: "98",
    songname: "best of Monali thakur top 10",
    artist: "by Monali thakur",
    coverimg:
      "https://tse4.mm.bing.net/th?id=OIP.eP3VfI89klc-gsAydU5K5gHaEK&pid=Api&P=0",
  },
  {
    id: "99",
    songname: "Atif Aslam_s Doorie",
    artist: "by Atif Aslam",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.VHxs6KxqQCPpfg9JTx_iaAHaFZ&pid=Api&P=0",
  },
  {
    id: "100",
    songname: "Best of darshan raval",
    artist: "by darshan raval",
    coverimg:
      "https://tse3.mm.bing.net/th?id=OIP.z6vT9hD1y9pE2AFA6NgKNQHaF7&pid=Api&P=0",
  },
];

// ********************* Main audio section************************************
let audioElement = new Audio("songs/Agomonir Gaan (আগমনীর গান).mp3");
// ******************************************************************************

// ****************************** Functions *************************************************
const updateall = () => {
  audioElement.src = `songs/${songs[songindex - 1].songname}.mp3`;
  // console.log(songs[songindex-1].songpath);
  $(".song_img").attr("src", songs[songindex - 1].coverimg);
  $(".currSongName").text(songs[songindex - 1].songname);
  $(".currArtistName").text(songs[songindex - 1].artist);
  $("#rotation").addClass("rotate");
  audioElement.currentTime = 0;
  audioElement.play();
  document.getElementsByClassName("dis_animated_img")[0].style.opacity = "1"; 
  $("#play_btn").removeClass("fa-circle-play");
  $("#play_btn").addClass("fa-circle-pause");
};

/*---------------- handel play/pause button End --------------*/
$(".dis_paly_btn").click(() => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    $("#play_btn").removeClass("fa-circle-play");
    $("#play_btn").addClass("fa-circle-pause");
    $("#rotation").addClass("rotate");
  } else {
    audioElement.pause();
    $("#play_btn").addClass("fa-circle-play");
    $("#play_btn").removeClass("fa-circle-pause");
    $("#rotation").removeClass("rotate");
  }
});

// ********************* song play function*******************

/*----------- Intialisation song Index ----------*/
let songindex = 1;
/* --------------- declaration veriable ----------------------*/

Array.from($(".play_btn")).forEach((element) => {
  element.addEventListener("click", (e) => {
    songindex = parseInt(e.target.id);
    updateall();
  });
});
/*--------------------- Eng ---------------------*/

/*------------- all songs image and name update -----------*/
let songItems = Array.from(document.getElementsByClassName("rest"));
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverimg;
  element.getElementsByClassName("musicName")[0].innerText = songs[i].songname;
  element.getElementsByClassName("artist")[0].innerText = songs[i].artist;
});
/*--------------------- Eng ---------------------*/

// /*------------- previous & next button -----------------*/
$(".next").click(() => {
  console.log("i am click");
  if (songindex == songs.length) {
    songindex = 1;
  } else {
    songindex += 1;
  }
  updateall();
});

$(".previous").click(() => {
  if (songindex <= 1) {
    songindex = songs.length;
  } else {
    songindex -= 1;
  }
  updateall();
});
// /*-------------search result output class ---------------------*/

let search_result = document.getElementsByClassName("search_result")[0];
songs.forEach((element) => {
  const { id, songname, artist, coverimg } = element;
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  // card.id = id;
  card.innerHTML = `
    <img src="${coverimg}" alt="">
                <div class="search-detail">
                  <h4 class="search_music_name">${songname}</h4>
                  <p>${artist}</p>
                </div>
    `;
  search_result.appendChild(card);
  // console.log(card);
});

// ****************** search button *******************

let input = document.getElementsByTagName("input")[0];
document.getElementsByClassName("search_result")[0].style.height = "0";
input.addEventListener("change", () => {
  document.getElementsByClassName("search_result")[0].style.height = "18rem";
});
input.addEventListener("keyup", () => {
  // document.getElementsByClassName('search_result')[0].style.display='flex'
  document.getElementsByClassName("search_result")[0].style.height = "18rem";
  let input_value = input.value.toUpperCase();
  let items = search_result.getElementsByTagName("a");
  // ****************** search result render *******************
  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("search_music_name")[0];
    let text_value = as.innerHTML || as.innerText;
    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
      document
        .getElementsByClassName("card")
        [index].addEventListener("click", (e) => {
          document.getElementsByClassName("search_result")[0].style.display =
            "none";

          input.value = "";
          // console.log(e);
        });
    } else {
      items[index].style.display = "none";
    }
    if (input.value == 0) {
      search_result.style.display = "none";
    } else {
      search_result.style.display = "";
    }
  }
});

// /* ---------------- upadate songs after ended --------------------*/
let repeat_btn = document.getElementById("repeat");
audioElement.addEventListener("ended", () => {
  switch (repeat_btn.classList[1]) {
    case "fa-music":
      next_music();
      break;
    case "fa-repeat":
      repeat_music();
      break;
    case "fa-shuffle":
      shuffle_music();
      break;
  }
});
/*------------ if music play serially --------------*/
const next_music = () => {
  if (songindex >= songs.length) {
    songindex = 0;
  }
  songindex++;
  updateall();
};

/*------------ if Repeat btn click ---------------*/
const repeat_music = () => {
  songindex;
  updateall();
};
/*----------- if shuffle btn click ---------------*/
const shuffle_music = () => {
  if (songindex >= songs.length) {
    songindex = 1;
  }
  songindex = Math.floor(Math.random() * songs.length + 1);
  updateall();
};

// /*--------- click event on repeat ,shuffle button-----------*/

let cnt = 0;
$("#repeat").click(() => {
  cnt++;
  if (cnt >= 3) {
    cnt = 0;
    $("#repeat").addClass("fa-music");
    $("#repeat").removeClass("fa-shuffle");
  } else if (cnt == 1) {
    $("#repeat").addClass("fa-repeat");
    $("#repeat").removeClass("fa-music");
  } else {
    $("#repeat").addClass("fa-shuffle");
    $("#repeat").removeClass("fa-repeat");
  }
});

/*----------------- update progress bar ------------------*/
let myprogressbar = document.getElementById("mybar");

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

// /*-------------- update time ------------*/
let currTime = document.getElementsByClassName("currtime");
let totalTime = document.getElementsByClassName("totaltime");
// let vol = document.getElementById("vol");
audioElement.addEventListener("timeupdate", () => {
  let music_curr_time = audioElement.currentTime;
  let music_total_time = audioElement.duration;
  let min1 = Math.floor(music_total_time / 60);
  let sec1 = Math.floor(music_total_time % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  totalTime[0].innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr_time / 60);
  let sec2 = Math.floor(music_curr_time % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currTime[0].innerText = `${min2}:${sec2}`;
  // console.log(`${min1} : ${sec1}`);
  // console.log(`${min2} : ${sec2}`);

  let seekbar = myprogressbar.value;
  document.getElementsByClassName("bar2")[0].style.width = `${seekbar}%`;
  document.getElementsByClassName("dot")[0].style.left = `${seekbar}%`;
});

/*------------ sound update--------------*/
let vol_icon = document.getElementById("vol_icon");
const vol = document.getElementById("vol");
document.getElementsByClassName("bar3")[0].style.width = `${vol.value}%`;
document.getElementsByClassName("dot1")[0].style.left = `${vol.value}%`;
audioElement.volume = vol.value / 100;
vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("fa-volume-high");
    vol_icon.classList.remove("fa-volume-low");
    vol_icon.classList.add("fa-volume-xmark");
  } else if (vol.value > 0 && vol.value <= 50) {
    vol_icon.classList.remove("fa-volume-high");
    vol_icon.classList.remove("fa-volume-xmark");
    vol_icon.classList.add("fa-volume-low");
  } else if (vol.value > 50) {
    vol_icon.classList.add("fa-volume-high");
    vol_icon.classList.remove("fa-volume-xmark");
    vol_icon.classList.remove("fa-volume-low");
  }
  document.getElementsByClassName("bar3")[0].style.width = `${vol.value}%`;
  document.getElementsByClassName("dot1")[0].style.left = `${vol.value}%`;
  audioElement.volume = vol.value / 100;
});

// decoration
const heart = document.getElementsByClassName("fa-heart")[1];
heart.addEventListener("click", () => (heart.style.color = "red"));
heart.addEventListener("doubleClick", () => (heart.style.color = "white"));

// ********************************* display all songs ********************************************
songs.forEach((e) => {
  const { id, songname, artist, coverimg } = e;
  // console.log(id, songname, artist);
  const song_card = document.createElement("a");
  song_card.classList.add("song_card");
  song_card.href = "#" + id;
  song_card.innerHTML = `
                <img src=${coverimg} alt="">
                <div class="songs_details">
                  <h4 class="songs_name">${songname}</h4>
                  <p>${artist}</p>
                </div>
              <i class="fa-solid fa-circle-play song_palyer_btn" id=${id}></i>`;
  document.getElementsByClassName("allsongs")[0].appendChild(song_card);
});
let previous_song = -1;
let song_palyer_btn = document.getElementsByClassName("song_palyer_btn");
$(".song_palyer_btn").click((e, i) => {
  if (previous_song != -1) {
    song_palyer_btn[previous_song - 1].classList.add("fa-circle-play");
    song_palyer_btn[previous_song - 1].classList.remove("fa-circle-pause");
  }
  const indx = e.target.id;
  console.log(indx);
  songindex = e.target.id;
  previous_song = e.target.id;
  updateall();
  song_palyer_btn[indx - 1].classList.remove("fa-circle-play");
  song_palyer_btn[indx - 1].classList.add("fa-circle-pause");
  // song_palyer_btn[indx - 1].addEventListener("click", () => {
  //   console.log('iasfdgsdfds')
  //   audioElement.pause();
  //   song_palyer_btn[indx - 1].classList.remove("fa-circle-pause");
  //   song_palyer_btn[indx - 1].classList.add("fa-circle-pause");
  // });
  // console.log(document.getElementsByClassName("song_palyer_btn")[indx]);
});

// ********************************** all music rander ****************************************
document
  .getElementsByClassName("allmusic_list")[0]
  .addEventListener("click", () => {
    const allmusiclist = document.getElementsByClassName("allplayersongs")[0];
    if (allmusiclist.style.width === "20rem") {
      allmusiclist.style.width = "0px";
    } else {
      allmusiclist.style.width = "20rem";
    }
  });

/*---------------- handel play/pause button start --------------*/
$("#play_btn").click(() => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    document.getElementsByClassName("dis_animated_img")[0].style.opacity = "1";
    $("#play_btn").removeClass("fa-circle-play");
    $("#play_btn").addClass("fa-circle-pause");
    $("#rotation").addClass("rotate");
    if (previous_song != -1) {
      song_palyer_btn[previous_song - 1].classList.remove("fa-circle-play");
      song_palyer_btn[previous_song - 1].classList.add("fa-circle-pause");
    }
  } else {
    audioElement.pause();
    document.getElementsByClassName("dis_animated_img")[0].style.opacity = "0";
    $("#play_btn").addClass("fa-circle-play");
    $("#play_btn").removeClass("fa-circle-pause");
    $("#rotation").removeClass("rotate");
    if (previous_song != -1) {
      song_palyer_btn[previous_song - 1].classList.add("fa-circle-play");
      song_palyer_btn[previous_song - 1].classList.remove("fa-circle-pause");
    }
  }
});
