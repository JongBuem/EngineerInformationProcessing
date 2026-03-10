/**
 * problems.js — 문제 목록 데이터
 *
 * 파일명 규칙: YYYY_회차_문제번호_언어.html
 *   YYYY  : 연도 (예: 2024, 2025)
 *   회차  : 01, 02, 03 …
 *   문제번호: 01–20
 *   언어  : J = Java, C = C언어, P = Python
 *
 * type 필드:
 *   "programming" — 프로그래밍 출력값 추적
 *   "essay"       — 서술형 (추후 추가)
 *   "short"       — 단답형 (추후 추가)
 *
 * 새 문제 추가 방법:
 *   아래 PROBLEMS 배열에 한 줄 추가 후 해당 HTML 파일을 같은 폴더에 저장.
 */
const PROBLEMS = [
  // ── 2024년 2회차 ──
  { file: "2024_02_01_J.html", year: 2024, round: 2, num:  1, lang: "J", type: "programming" },
  { file: "2024_02_08_P.html", year: 2024, round: 2, num:  8, lang: "P", type: "programming" },
  { file: "2024_02_10_C.html", year: 2024, round: 2, num: 10, lang: "C", type: "programming" },
  { file: "2024_02_11_C.html", year: 2024, round: 2, num: 11, lang: "C", type: "programming" },
  { file: "2024_02_12_J.html", year: 2024, round: 2, num: 12, lang: "J", type: "programming" },
  { file: "2024_02_15_C.html", year: 2024, round: 2, num: 15, lang: "C", type: "programming" },
  { file: "2024_02_17_J.html", year: 2024, round: 2, num: 17, lang: "J", type: "programming" },
  { file: "2024_02_19_C.html", year: 2024, round: 2, num: 19, lang: "C", type: "programming" },
  { file: "2024_02_20_J.html", year: 2024, round: 2, num: 20, lang: "J", type: "programming" },

  // ── 2024년 3회차 ──
  { file: "2024_03_01_J.html", year: 2024, round: 3, num:  1, lang: "J", type: "programming" },
  { file: "2024_03_02_P.html", year: 2024, round: 3, num:  2, lang: "P", type: "programming" },
  { file: "2024_03_06_C.html", year: 2024, round: 3, num:  6, lang: "C", type: "programming" },
  { file: "2024_03_12_C.html", year: 2024, round: 3, num: 12, lang: "C", type: "programming" },
  { file: "2024_03_14_P.html", year: 2024, round: 3, num: 14, lang: "P", type: "programming" },
  { file: "2024_03_16_J.html", year: 2024, round: 3, num: 16, lang: "J", type: "programming" },
  { file: "2024_03_17_J.html", year: 2024, round: 3, num: 17, lang: "J", type: "programming" },
  { file: "2024_03_18_J.html", year: 2024, round: 3, num: 18, lang: "J", type: "programming" },

  // ── 2025년 1회차 ──
  { file: "2025_01_05_J.html", year: 2025, round: 1, num:  5, lang: "J", type: "programming" },
  { file: "2025_01_10_C.html", year: 2025, round: 1, num: 10, lang: "C", type: "programming" },
  { file: "2025_01_11_C.html", year: 2025, round: 1, num: 11, lang: "C", type: "programming" },
  { file: "2025_01_13_J.html", year: 2025, round: 1, num: 13, lang: "J", type: "programming" },
  { file: "2025_01_16_J.html", year: 2025, round: 1, num: 16, lang: "J", type: "programming" },
  { file: "2025_01_17_P.html", year: 2025, round: 1, num: 17, lang: "P", type: "programming" },
  { file: "2025_01_18_C.html", year: 2025, round: 1, num: 18, lang: "C", type: "programming" },
  { file: "2025_01_19_C.html", year: 2025, round: 1, num: 19, lang: "C", type: "programming" },
  { file: "2025_01_20_J.html", year: 2025, round: 1, num: 20, lang: "J", type: "programming" },

  // ── 2025년 2회차 ──
  { file: "2025_02_05_J.html", year: 2025, round: 2, num:  5, lang: "J", type: "programming" },
  { file: "2025_02_09_J.html", year: 2025, round: 2, num:  9, lang: "J", type: "programming" },
  { file: "2025_02_10_J.html", year: 2025, round: 2, num: 10, lang: "J", type: "programming" },
  { file: "2025_02_12_C.html", year: 2025, round: 2, num: 12, lang: "C", type: "programming" },
  { file: "2025_02_14_C.html", year: 2025, round: 2, num: 14, lang: "C", type: "programming" },
  { file: "2025_02_15_J.html", year: 2025, round: 2, num: 15, lang: "J", type: "programming" },
  { file: "2025_02_16_C.html", year: 2025, round: 2, num: 16, lang: "C", type: "programming" },
  { file: "2025_02_17_P.html", year: 2025, round: 2, num: 17, lang: "P", type: "programming" },
  { file: "2025_02_18_C.html", year: 2025, round: 2, num: 18, lang: "C", type: "programming" },

  // ── 2025년 3회차 ──
  { file: "2025_03_05_C.html", year: 2025, round: 3, num:  5, lang: "C", type: "programming" },
  { file: "2025_03_06_C.html", year: 2025, round: 3, num:  6, lang: "C", type: "programming" },
  { file: "2025_03_07_C.html", year: 2025, round: 3, num:  7, lang: "C", type: "programming" },
  { file: "2025_03_08_J.html", year: 2025, round: 3, num:  8, lang: "J", type: "programming" },
  { file: "2025_03_09_P.html", year: 2025, round: 3, num:  9, lang: "P", type: "programming" },
  { file: "2025_03_12_J.html", year: 2025, round: 3, num: 12, lang: "J", type: "programming" },
  { file: "2025_03_15_C.html", year: 2025, round: 3, num: 15, lang: "C", type: "programming" },
  { file: "2025_03_17_J.html", year: 2025, round: 3, num: 17, lang: "J", type: "programming" },
];
