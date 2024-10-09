import { DiceSystem } from '../dice-so-nice/api.js';

console.log("DSN Import Complete!")
const mySystem = new DiceSystem("ta-dice", "Triangle Agency", "preferred", "Triangle Man");
dice3d.addSystem(mySystem)

// add d4, d6, d8, d10, d20
dice3d.addDicePreset({
    type: "d4",
    labels: [
      "", "", "3", ""
    ],
    system: "ta-dice"
})

dice3d.addDicePreset({
    type: "d6",
    labels: [
      "1", "2", "3", "4", "5", "6"
    ],
    system: "ta-dice"
})

dice3d.addDicePreset({
    type: "d8",
    labels: [
      "1", "2", "3", "4", "5", "6", "7", "8"
    ],
    system: "ta-dice"
})

dice3d.addDicePreset({
    type: "d10",
    labels: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
    ],
    system: "ta-dice"
})

dice3d.addDicePreset({
    type: "d20",
    labels: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"
    ],
    system: "ta-dice"
})