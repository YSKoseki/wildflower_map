/**
 * @fileoverview JavaScript file for defining data for the wildflower map.
 *
 * @version 1.0.0
 * @date 2026-07-10
 * @author Koseki, Yusuke
 *
 * @license
 * Copyright (c) 2026 Koseki, Yusuke
 * Released under the MIT license
 * https://opensource.org
 */

window.FAMILY = {
    KIKU: "kiku",
    NADESHIKO: "nadeshiko",
    KATABAMI: "katabami",
    OOBAKO: "oobako",
    KIJIKAKUSHI: "kijikakushi",
    NASU: "nasu",
    DOKUDAMI: "dokudami",
    KIKYOU: "kikyou",
    KESHI: "keshi",
    MURASAKI: "murasaki",
    ABURANA: "aburana",
    TADE: "tade",
    HAEDOKUSOU: "haedokusou",
    AKANE: "akane",
    AYAME: "ayame",
    HIMAWARI: "himawari",
    FUUROSOU: "fuurosou"
};

window.FAMILIES = {
    [FAMILY.KIKU]: {
        name: "キク科"
    },
    [FAMILY.NADESHIKO]: {
        name: "ナデシコ科"
    },
    [FAMILY.KATABAMI]: {
        name: "カタバミ科"
    },
    [FAMILY.OOBAKO]: {
        name: "オオバコ科"
    },
    [FAMILY.KIJIKAKUSHI]: {
        name: "キジカクシ科"
    },
    [FAMILY.NASU]: {
        name: "ナス科"
    },
    [FAMILY.DOKUDAMI]: {
        name: "ドクダミ科"
    },
    [FAMILY.KIKYOU]: {
        name: "キキョウ科"
    },
    [FAMILY.KESHI]: {
        name: "ケシ科"
    },
    [FAMILY.MURASAKI]: {
        name: "ムラサキ科"
    },
    [FAMILY.ABURANA]: {
        name: "アブラナ科"
    },
    [FAMILY.TADE]: {
        name: "タデ科"
    },
    [FAMILY.HAEDOKUSOU]: {
        name: "ハエドクソウ科"
    },
    [FAMILY.AKANE]: {
        name: "アカネ科"
    },
    [FAMILY.AYAME]: {
        name: "アヤメ科"
    },
    [FAMILY.HIMAWARI]: {
        name: "ヒマワリ科"
    },
    [FAMILY.FUUROSOU]: {
        name: "フウロソウ科"
    }
};

window.PLANTS = [
    {
        familyId: FAMILY.KIKU,
        id: "onitabirako",
        species: "オニタビラコ",
        color: "#ffa502",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKU,
        id: "harujion",
        species: "ハルジオン",
        color: "#F4D03F",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKU,
        id: "tanpopo",
        species: "タンポポ",
        color: "#FFD400",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKU,
        id: "chichikogusamodoki",
        species: "チチコグサモドキ",
        color: "#C5A000",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKU,
        id: "himejyoon",
        species: "ヒメジョオン",
        color: "#F7DC6F",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKU,
        id: "hakidamegiku",
        species: "ハキダメギク",
        color: "#D4AC0D",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKU,
        id: "nogeshi",
        species: "ノゲシ",
        color: "#DFAF2B",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKU,
        id: "kanshirogiku",
        species: "カンシロギク",
        color: "#F8E287",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.NADESHIKO,
        id: "tsumekusa",
        species: "ツメクサ",
        color: "#F3C6D3",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.NADESHIKO,
        id: "hakobe",
        species: "ハコベ",
        color: "#F8BBD0",
        strokeColor: "#444",
        pointCount: 0
    },
    {
        familyId: FAMILY.NADESHIKO,
        id: "araitotsumekusa",
        species: "アライトツメクサ",
        color: "#F48FB1",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.NADESHIKO,
        id: "orandamiminagusa",
        species: "オランダミミナグサ",
        color: "#FCE4EC",
        strokeColor: "#444",
        pointCount: 0
    },
    {
        familyId: FAMILY.KATABAMI,
        id: "murasakikatabami",
        species: "ムラサキカタバミ",
        color: "#E67E22",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KATABAMI,
        id: "katabami",
        species: "カタバミ",
        color: "#F1C40F",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KATABAMI,
        id: "akakatabami",
        species: "アカカタバミ",
        color: "#F39C12",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.OOBAKO,
        id: "tsutabaunran",
        species: "ツタバウンラン",
        color: "#5E35B1",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.OOBAKO,
        id: "matsubaunran",
        species: "マツバウンラン",
        color: "#7E57C2",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIJIKAKUSHI,
        id: "ooamana",
        species: "オオアマナ",
        color: "#FFFFFF",
        strokeColor: "#444",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIJIKAKUSHI,
        id: "orizururan",
        species: "オリヅルラン",
        color: "#7BBF6A",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.NASU,
        id: "inuhoozuki",
        species: "イヌホオズキ",
        color: "#4527A0",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.DOKUDAMI,
        id: "dokudami",
        species: "ドクダミ",
        color: "#F8F8F4",
        strokeColor: "#444",
        pointCount: 0
    },
    {
        familyId: FAMILY.KIKYOU,
        id: "kikyousou",
        species: "キキョウソウ",
        color: "#5E60CE",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.KESHI,
        id: "nagamihinageshi",
        species: "ナガミヒナゲシ",
        color: "#F4511E",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.MURASAKI,
        id: "kyuurigusa",
        species: "キュウリグサ",
        color: "#4FC3F7",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.ABURANA,
        id: "nazuna",
        species: "ナズナ",
        color: "#FFF8E1",
        strokeColor: "#444",
        pointCount: 0
    },
    {
        familyId: FAMILY.TADE,
        id: "himetsurusoba",
        species: "ヒメツルソバ",
        color: "#EC407A",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.HAEDOKUSOU,
        id: "tokiwahaze",
        species: "トキワハゼ",
        color: "#9575CD",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.AKANE,
        id: "himeyotsubamugura",
        species: "ヒメヨツバムグラ",
        color: "#66BB6A",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.AYAME,
        id: "himehiougi",
        species: "ヒメヒオウギ",
        color: "#C2185B",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.HIMAWARI,
        id: "mamekamitsure",
        species: "マメカミツレ",
        color: "#E1C542",
        strokeColor: "#666",
        pointCount: 0
    },
    {
        familyId: FAMILY.FUUROSOU,
        id: "amerikafuuro",
        species: "アメリカフウロ",
        color: "#D81B60",
        strokeColor: "#666",
        pointCount: 0
    }
];