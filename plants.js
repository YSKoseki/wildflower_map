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
		color: "#F39C12",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIKU,
		id: "tanpopo",
		species: "タンポポ",
		color: "#FFD600",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIKU,
		id: "chichikogusamodoki",
		species: "チチコグサモドキ",
		color: "#B89F2A",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIKU,
		id: "himejyoon",
		species: "ヒメジョオン",
		color: "#FFF3A3",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIKU,
		id: "hakidamegiku",
		species: "ハキダメギク",
		color: "#D4B000",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIKU,
		id: "nogeshi",
		species: "ノゲシ",
		color: "#FFC107",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIKU,
		id: "kanshirogiku",
		species: "カンシロギク",
		color: "#FFF8D6",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.NADESHIKO,
		id: "tsumekusa",
		species: "ツメクサ",
		color: "#F48FB1",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.NADESHIKO,
		id: "orandamiminagusa",
		species: "オランダミミナグサ",
		color: "#F8F8F8",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KATABAMI,
		id: "murasakikatabami",
		species: "ムラサキカタバミ",
		color: "#BA68C8",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KATABAMI,
		id: "katabami",
		species: "カタバミ",
		color: "#FFEB3B",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KATABAMI,
		id: "akakatabami",
		species: "アカカタバミ",
		color: "#D84315",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.OOBAKO,
		id: "tsutabaunran",
		species: "ツタバウンラン",
		color: "#5C6BC0",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.OOBAKO,
		id: "matsubaunran",
		species: "マツバウンラン",
		color: "#7E57C2",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIJIKAKUSHI,
		id: "orizururan",
		species: "オリヅルラン",
		color: "#81C784",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.NASU,
		id: "inuhoozuki",
		species: "イヌホオズキ",
		color: "#512DA8",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.DOKUDAMI,
		id: "dokudami",
		species: "ドクダミ",
		color: "#FFFFFF",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KIKYOU,
		id: "kikyousou",
		species: "キキョウソウ",
		color: "#3949AB",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.KESHI,
		id: "nagamihinageshi",
		species: "ナガミヒナゲシ",
		color: "#F4511E",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.MURASAKI,
		id: "kyuurigusa",
		species: "キュウリグサ",
		color: "#29B6F6",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.ABURANA,
		id: "nazuna",
		species: "ナズナ",
		color: "#FFFDE7",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.TADE,
		id: "himetsurusoba",
		species: "ヒメツルソバ",
		color: "#EC407A",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.HAEDOKUSOU,
		id: "tokiwahaze",
		species: "トキワハゼ",
		color: "#9575CD",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.AYAME,
		id: "himehiougi",
		species: "ヒメヒオウギ",
		color: "#D81B60",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.HIMAWARI,
		id: "mamekamitsure",
		species: "マメカミツレ",
		color: "#FFF176",
		strokeColor: "#333333",
		pointCount: 0
	},
	{
		familyId: FAMILY.FUUROSOU,
		id: "amerikafuuro",
		species: "アメリカフウロ",
		color: "#E91E63",
		strokeColor: "#333333",
		pointCount: 0
	}
];