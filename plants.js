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
    AKANE: "akane",
    ABURANA: "aburana",
    AYAME: "ayame",
    KIKYOU: "kikyou",
    KESHI: "keshi",
    TADE: "tade",
    DOKUDAMI: "dokudami",
    NASU: "nasu",
    HAEDOKUSOU: "haedokusou",
    HIMAWARI: "himawari",
    FUUROSOU: "fuurosou",
    MURASAKI: "murasaki"
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
    [FAMILY.AKANE]: {
        name: "アカネ科"
    },
    [FAMILY.ABURANA]: {
        name: "アブラナ科"
    },
    [FAMILY.AYAME]: {
        name: "アヤメ科"
    },
    [FAMILY.KIKYOU]: {
        name: "キキョウ科"
    },
    [FAMILY.KESHI]: {
        name: "ケシ科"
    },
    [FAMILY.TADE]: {
        name: "タデ科"
    },
    [FAMILY.DOKUDAMI]: {
        name: "ドクダミ科"
    },
    [FAMILY.NASU]: {
        name: "ナス科"
    },
    [FAMILY.HAEDOKUSOU]: {
        name: "ハエドクソウ科"
    },
    [FAMILY.HIMAWARI]: {
        name: "ヒマワリ科"
    },
    [FAMILY.FUUROSOU]: {
        name: "フウロソウ科"
    },
    [FAMILY.MURASAKI]: {
        name: "ムラサキ科"
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
        id: "tanpopo",
        species: "タンポポ",
        color: "#ffec3d",
        strokeColor: "#666",
        pointCount: 0
    }
];