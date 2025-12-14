const pi = 3.14159;

const sayilar = [
  45, 856, 12.5, 63, 0.02, 154, 2, 54, 78, 61.7, 654, 26, 12.5, 63, 969, 152,
  32, 31, 14, 74, 32, 365.9, 5.2, 45, 76, 20, 27.4, 562, 12.15, 365.85, 45.87,
  22, 88, 56.4, 96.45, 23, 56, 332, 361, 713, 321, 258.3, 10, 974.8, 275, 570,
  707, 814, 326, 596, 626, 494, 546, 724.8, 359, 231.4, 883.1, 379.1, 691, 990,
  815.9, 937.1, 837.3, 859, 476, 370.8, 480, 860, 221.1, 78.8, 255, 613, 958,
  973.7, 209, 470.6, 157, 13, 314, 269.6, 885, 507.9, 383, 276, 636, 268.8,
  558.1, 114.7, 336, 311.7, 340, 403.2, 356.9, 529.5, 932.5, 17, 756.5, 771.6,
  415, 523.1, 736, 187.8, 680, 618.6, 945, 105, 712, 696.7, 217, 68, 500.7, 28,
];

function CemberinCevresi(yaricap) {
  return 2 * pi * yaricap;
}

function CemberinAlani(yaricap, pi) {
  return pi * yaricap * yaricap;
}

// 3a
let enbuyuk = sayilar[0];
let enkucuk = sayilar[0];

for (let i = 1; i < sayilar.length; i++) {
  if (sayilar[i] > enbuyuk) enbuyuk = sayilar[i];
  if (sayilar[i] < enkucuk) enkucuk = sayilar[i];
}

// 3b
let ucetambolunenler = [];
sayilar.forEach((sayi) => {
  if (Number.isInteger(sayi) && sayi % 3 === 0) {
    ucetambolunenler.push(sayi);
  }
});

// 3c
let ucebolunenlerintoplami = ucetambolunenler.reduce(
  (toplam, sayi) => toplam + sayi,
  0
);

// 3d
let besyuzdenkucuksayilar = sayilar.filter((sayi) => sayi < 500);

// 3e
let siralisayilar = [...besyuzdenkucuksayilar].sort((a, b) => a - b);

// 3f
let tekraredensayilar = [];
let tekrarObj = {};

sayilar.forEach((sayi) => {
  tekrarObj[sayi] = (tekrarObj[sayi] || 0) + 1;
});

Object.keys(tekrarObj)
  .map(Number)
  .sort((a, b) => a - b)
  .forEach((sayi) => {
    if (tekrarObj[sayi] > 1) {
      tekraredensayilar.push(
        `${sayi} sayısı ${tekrarObj[sayi]} kere tekrar edilmiştir`
      );
    }
  });


sayilar.forEach((sayi) => {
  tekrarObj[sayi] = (tekrarObj[sayi] || 0) + 1;
});

for (let sayi in tekrarObj) {
  if (tekrarObj[sayi] > 1) {
    tekraredensayilar.push(
      `${sayi} sayısı ${tekrarObj[sayi]} kere tekrar edilmiştir`
    );
  }
}

function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}

sa();

export default {
  sa,
  CemberinCevresi,
  CemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};
