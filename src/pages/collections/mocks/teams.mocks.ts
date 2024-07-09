import { Teams } from "../models";

export const TeamsMocks: Teams = {
  teams: [
    { id: 0, name: 'Akagi Gang', characters: [132, 1071] },
    { id: 1, name: 'Allied Mothers Force', characters: [41, 373, 880, 1366] },
    { id: 2, name: 'Allied Mothers Force  (Anime only)', characters: [880] },
    { id: 3, name: 'Ame Orphans', characters: [515, 684, 861, 1356] },
    {
      id: 4,
      name: 'Analysis Team',
      characters: [203, 391, 706, 948, 964, 1232, 1365, 1367],
    },
    { id: 5, name: 'A-B Combo', characters: [6, 636] },
    {
      id: 6,
      name: 'Bikōchū Search Team  (Anime only)',
      characters: [13, 29, 437, 466, 1344],
    },
    { id: 7, name: 'Byakuya Gang', characters: [292, 917, 986] },
    { id: 8, name: 'Communications Team', characters: [199, 1186] },
    { id: 9, name: 'Counter-Terrorism Division', characters: [56] },
    {
      id: 10,
      name: 'Counter-Terrorism Division  (Novel only)',
      characters: [577],
    },
    { id: 11, name: 'Cypher Division', characters: [421, 807] },
    {
      id: 12,
      name: 'Daimyō Protection Squad',
      characters: [152, 863, 1110, 1223],
    },
    {
      id: 13,
      name: 'Daimyō Protection Squad  (Anime only)',
      characters: [1196],
    },
    { id: 14, name: 'Dark Thunder Group  (Novel only)', characters: [598] },
    { id: 15, name: 'Demon Brothers', characters: [338, 779] },
    { id: 16, name: "Dotō's Three-Man-Team", characters: [258, 557, 979] },
    {
      id: 17,
      name: 'Eight Man Squad',
      characters: [13, 29, 374, 376, 437, 466, 1008, 1344, 1373],
    },
    { id: 18, name: 'Eight-Tails Subduing Team', characters: [5, 6, 251] },
    { id: 19, name: 'Enlightened Ones', characters: [297, 680, 804] },
  ],
  currentPage: 1,
  pageSize: 20,
  total: 191,
};
