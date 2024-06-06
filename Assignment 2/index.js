// Q1
// [
//   {
//     userid: 2, name:  "Velen", role: "Mage"
//   },
//   {
//     userid: 44, name:  "Cenarius", role: null
//   },
//   ...
// ]
const names = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
];
const roles = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
];
const result = names.map((name) => {
  const role = roles.find((role) => role.userid === name.userid);
  return {
    userid: name.userid,
    name: name.name,
    role: role ? role.role : null,
  };
});
console.log(result);

// Q2

const callback1 = (a) => a + 2; // 6
const callback2 = (b) => b * 2; // 12
const callback3 = (c) => c - 2; // 10
function runAll(initNum) {
  return function (...args) {
    let result = initNum;
    for (let i = 0; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  };
}
console.log(runAll(4)(callback1, callback2, callback3)); // 10

// Q3
source = [
  ["Foley", "Chemicals", "CHEM"],
  ["Foley", "Chemicals", "CTO"],
  ["Foley", "Chemicals", "LK"],
  ["Foley", "Chemicals", "R8"],
  ["Foley", "Chemicals", "WT"],
  ["Foley", "Finishing", "LB2"],
  ["Foley", "Finishing", "LB4"],
  ["Foley", "Finishing", "RW1"],
  ["Foley", "Finishing", "RW2"],
  ["Foley", "Line 3", "LN3"],
  ["Foley", "Line 3", "Production Process"],
  ["Foley", "Line 4", "LN4"],
  ["Foley", "Line 4", "Prod Process"],
  ["Foley", "Mill General", "Wastewater Treatment"],
  ["Foley", "Powerhouse", "BB1"],
  ["Foley", "Powerhouse", "BB2"],
  ["Foley", "Powerhouse", "EV5"],
  ["Foley", "Powerhouse", "FWE"],
  ["Foley", "Powerhouse", "PB1"],
  ["Foley", "Powerhouse", "PB2"],
  ["Foley", "Powerhouse", "RB2"],
  ["Foley", "Powerhouse", "RB3"],
  ["Foley", "Powerhouse", "RB4"],
  ["Foley", "Powerhouse", "TG2"],
  ["Foley", "Powerhouse", "TG3"],
  ["Foley", "Powerhouse", "TG4"],
];

// [['Foley', 'Powerhouse', 'TG3', 'Bright']...] --->
// [{
//   name:'Foley',
//   children: [
//     {
//       name: 'Powerhouse',
//       children: [
//         {
//           name: 'TG3',
//           children: [
//             {name: 'Bright', children: []}
//           ]
//         }
//       ]
//     }
//   ]
// },
// ...]

function buildTree(source) {
  const root = [];

  function findOrCreateNode(name, children) {
    let node = children.find((child) => child.name === name);
    if (!node) {
      node = { name, children: [] };
      children.push(node);
    }
    return node;
  }

  source.forEach((path) => {
    let currentLevel = root;
    path.forEach((name) => {
      const node = findOrCreateNode(name, currentLevel);
      currentLevel = node.children;
    });
  });

  return root;
}

const tree = buildTree(source);

console.log(tree);
