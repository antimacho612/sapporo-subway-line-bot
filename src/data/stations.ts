import * as utils from "../utils";

export type Station = {
  id: string;
  lineId: "N" | "T" | "H";
  officialName: string;
  commonNames: string[];
};

const STATIONS: Station[] = [
  {
    id: "N01",
    lineId: "N",
    officialName: "麻生駅",
    commonNames: ["麻生", "あさぶ", "あざぶ"],
  },
  {
    id: "N02",
    lineId: "N",
    officialName: "北34条駅",
    commonNames: [
      "北34条",
      "北三十四条",
      "きた34じょう",
      "きたさんじゅうよじょう",
      "きたさんじゅうよんじょう",
      "北34",
      "北三十四",
      "きた34",
      "きたさんじゅうよん",
    ],
  },
  {
    id: "N03",
    lineId: "N",
    officialName: "北24条駅",
    commonNames: [
      "北24条",
      "北二十四条",
      "きた24じょう",
      "きたにじゅうよじょう",
      "きたにじゅうよんじょう",
      "北24",
      "北二十四",
      "きた24",
      "きたにじゅうよん",
      "にーよん",
    ],
  },
  {
    id: "N04",
    lineId: "N",
    officialName: "北18条駅",
    commonNames: [
      "北18条",
      "北十八条",
      "きた18じょう",
      "きたじゅうはちじょう",
      "北18",
      "北十八",
      "きた18",
      "きたじゅうはち",
    ],
  },
  {
    id: "N05",
    lineId: "N",
    officialName: "北12条駅",
    commonNames: [
      "北12条",
      "北十二条",
      "きた12じょう",
      "きたじゅうにじょう",
      "北12",
      "北十二",
      "きた12",
      "きたじゅうに",
    ],
  },
  {
    id: "N06",
    lineId: "N",
    officialName: "さっぽろ駅",
    commonNames: ["さっぽろ", "札幌", "札駅", "さつ"],
  },
  {
    id: "N07",
    lineId: "N",
    officialName: "大通駅",
    commonNames: ["大通", "大通り", "おおどおり"],
  },
  {
    id: "N08",
    lineId: "N",
    officialName: "すすきの駅",
    commonNames: ["薄野", "すすきの"],
  },
  {
    id: "N09",
    lineId: "N",
    officialName: "中島公園駅",
    commonNames: ["中島公園", "なかじまこうえん"],
  },
  {
    id: "N10",
    lineId: "N",
    officialName: "幌平橋駅",
    commonNames: ["幌平橋", "ほろひらばし", "幌平", "ほろひら"],
  },
  {
    id: "N11",
    lineId: "N",
    officialName: "中の島駅",
    commonNames: ["中の島", "なかのしま"],
  },
  {
    id: "N12",
    lineId: "N",
    officialName: "平岸駅",
    commonNames: ["平岸", "ひらぎし"],
  },
  {
    id: "N13",
    lineId: "N",
    officialName: "南平岸駅",
    commonNames: ["南平岸", "みなみひらぎし", "南平", "なんぴら"],
  },
  {
    id: "N14",
    lineId: "N",
    officialName: "澄川駅",
    commonNames: ["澄川", "すみかわ"],
  },
  {
    id: "N15",
    lineId: "N",
    officialName: "自衛隊前駅",
    commonNames: ["自衛隊前", "じえいたいまえ"],
  },
  {
    id: "N16",
    lineId: "N",
    officialName: "真駒内駅",
    commonNames: ["真駒内", "まこまない"],
  },
  {
    id: "T01",
    lineId: "T",
    officialName: "宮の沢駅",
    commonNames: ["宮の沢", "みやのさわ"],
  },
  {
    id: "T02",
    lineId: "T",
    officialName: "発寒南駅",
    commonNames: ["発寒南", "はっさむみなみ"],
  },
  {
    id: "T03",
    lineId: "T",
    officialName: "琴似駅",
    commonNames: ["琴似", "ことに"],
  },
  {
    id: "T04",
    lineId: "T",
    officialName: "二十四軒駅",
    commonNames: ["二十四軒", "にじゅうよんけん", "24軒", "24けん"],
  },
  {
    id: "T05",
    lineId: "T",
    officialName: "西28丁目駅",
    commonNames: [
      "西28丁目",
      "西二十八丁目",
      "にしにじゅうはっちょうめ",
      "にし28ちょうめ",
      "西28",
      "西二十八",
      "にし28",
      "にしにじゅうはち",
    ],
  },
  {
    id: "T06",
    lineId: "T",
    officialName: "円山公園駅",
    commonNames: ["円山公園", "まるやまこうえん", "円山", "まるやま"],
  },
  {
    id: "T07",
    lineId: "T",
    officialName: "西18丁目駅",
    commonNames: [
      "西18丁目",
      "西十八丁目",
      "にしじゅうはっちょうめ",
      "にし18ちょうめ",
      "西18",
      "西十八",
      "にし18",
      "にしじゅうはち",
    ],
  },
  {
    id: "T08",
    lineId: "T",
    officialName: "西11丁目駅",
    commonNames: [
      "西11丁目",
      "西十一丁目",
      "にしじゅういっちょうめ",
      "にし11ちょうめ",
      "西11",
      "西十一",
      "にし11",
      "にしじゅういち",
    ],
  },
  {
    id: "T09",
    lineId: "T",
    officialName: "大通駅",
    commonNames: ["大通", "大通り", "おおどおり"],
  },
  {
    id: "T10",
    lineId: "T",
    officialName: "バスセンター前駅",
    commonNames: ["ばすせんたー前", "ばすせんたーまえ", "ばすせんたー"],
  },
  {
    id: "T11",
    lineId: "T",
    officialName: "菊水駅",
    commonNames: ["菊水", "きくすい"],
  },
  {
    id: "T12",
    lineId: "T",
    officialName: "東札幌駅",
    commonNames: ["東札幌", "ひがしさっぽろ"],
  },
  {
    id: "T13",
    lineId: "T",
    officialName: "白石駅",
    commonNames: ["白石", "しろいし"],
  },
  {
    id: "T14",
    lineId: "T",
    officialName: "南郷7丁目駅",
    commonNames: [
      "南郷7丁目",
      "南郷七丁目",
      "なんごう7ちょうめ",
      "なんごうななちょうめ",
      "南郷7",
      "南郷七",
      "なんごうなな",
      "南7",
      "南七",
      "なんなな",
    ],
  },
  {
    id: "T15",
    lineId: "T",
    officialName: "南郷13丁目駅",
    commonNames: [
      "南郷13丁目",
      "南郷十三丁目",
      "なんごう13ちょうめ",
      "なんごうじゅうさんちょうめ",
      "南郷13",
      "南郷十三",
      "なんごうじゅうさん",
    ],
  },
  {
    id: "T16",
    lineId: "T",
    officialName: "南郷18丁目駅",
    commonNames: [
      "南郷18丁目",
      "南郷十八丁目",
      "なんごう18ちょうめ",
      "なんごうじゅうはっちょうめ",
      "南郷18",
      "南郷十八",
      "なんごうじゅうはち",
    ],
  },
  {
    id: "T17",
    lineId: "T",
    officialName: "大谷地駅",
    commonNames: ["大谷地", "おおやち"],
  },
  {
    id: "T18",
    lineId: "T",
    officialName: "ひばりが丘駅",
    commonNames: ["ひばりが丘", "ひばりヶ丘", "ひばりがおか"],
  },
  {
    id: "T19",
    lineId: "T",
    officialName: "新さっぽろ駅",
    commonNames: ["新さっぽろ", "新札幌", "しんさっぽろ", "新札", "しんさつ"],
  },
  {
    id: "H01",
    lineId: "H",
    officialName: "栄町駅",
    commonNames: ["栄町", "さかえまち"],
  },
  {
    id: "H02",
    lineId: "H",
    officialName: "新道東駅",
    commonNames: ["新道東", "しんどうひがし"],
  },
  {
    id: "H03",
    lineId: "H",
    officialName: "元町駅",
    commonNames: ["元町", "もとまち"],
  },
  {
    id: "H04",
    lineId: "H",
    officialName: "環状通東駅",
    commonNames: [
      "環状通東",
      "かんじょうどおりひがし",
      "環状通",
      "かんじょうどおり",
    ],
  },
  {
    id: "H05",
    lineId: "H",
    officialName: "東区役所前駅",
    commonNames: [
      "東区役所前",
      "ひがしくやくしょまえ",
      "東区役所",
      "ひがしくやくしょ",
    ],
  },
  {
    id: "H06",
    lineId: "H",
    officialName: "北13条東駅",
    commonNames: [
      "北13条東",
      "北十三条東",
      "きた13じょうひがし",
      "きたじゅうさんじょうひがし",
      "北13条",
      "北十三条",
      "きた13じょう",
      "きたじゅうさんじょう",
    ],
  },
  {
    id: "H07",
    lineId: "H",
    officialName: "さっぽろ駅",
    commonNames: ["札幌", "さっぽろ", "札駅", "さつ"],
  },
  {
    id: "H08",
    lineId: "H",
    officialName: "大通駅",
    commonNames: ["大通", "大通り", "おおどおり"],
  },
  {
    id: "H09",
    lineId: "H",
    officialName: "豊水すすきの駅",
    commonNames: ["豊水すすきの", "豊水薄野", "ほうすいすすきの"],
  },
  {
    id: "H10",
    lineId: "H",
    officialName: "学園前駅",
    commonNames: ["学園前", "がくえんまえ"],
  },
  {
    id: "H11",
    lineId: "H",
    officialName: "豊平公園駅",
    commonNames: ["豊平公園", "とよひらこうえん"],
  },
  {
    id: "H12",
    lineId: "H",
    officialName: "美園駅",
    commonNames: ["美園", "みその"],
  },
  {
    id: "H13",
    lineId: "H",
    officialName: "月寒中央駅",
    commonNames: ["月寒中央", "つきさむちゅうおう"],
  },
  {
    id: "H14",
    lineId: "H",
    officialName: "福住駅",
    commonNames: ["福住", "ふくずみ"],
  },
];

/**
 * IDから時刻表を取得する駅を決定します。
 * @param id 駅のID。
 */
export const specifyStationById = (id: string) => {
  return STATIONS.find((s) => s.id === id);
};

/**
 * 指定された名前から時刻表を取得する駅を決定します。
 * @param name 判断対象となる名前（正式名称／一般名／略称など）
 */
export const specifyStationsByName = (name: string) => {
  let buf = name.trim();
  buf = utils.zenkakuNum2HankakuNum(buf);
  buf = utils.hankakuKana2Zenkakukana(buf);
  buf = utils.katakana2Hiragana(buf);
  if (buf.endsWith("駅")) {
    buf = buf.slice(0, -1);
  } else if (buf.endsWith("えき")) {
    buf = buf.slice(0, -2);
  }

  return STATIONS.filter((s) => s.commonNames.includes(buf));
};
