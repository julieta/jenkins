const pruebajson = require("./reports/my_new_report.json");
const fs = require("fs");
module.exports = pruebajson;

let testsTotales = 0;
let testPasados = 0;
let testsFallados = 0;
let testsSkipped = 0;
let data = "";

console.log(`Reporte JLR de los tests`);

pruebajson.results[0].suites.forEach((suit, idSuite) => {
    console.log(`SUITE ${idSuite + 1}-${suit.title}`);
    data += `SUITE ${idSuite + 1}-${suit.title} \n`;

    suit.tests.forEach((test, idTests) => {
        console.log(
            `TEST ${idTests + 1}-${test.title} su estado es **${test.state}**`
        );
        data += `TEST ${idTests + 1}-${test.title} su estado es **${test.state
            }** \n`;

        switch (test.state) {
            case "passed":
                testPasados++;
                break;
            case "failed":
                testsFallados++;
                break;
            case "pending":
                testsSkipped++;
                break;
        }
    });
});

testsTotales = testPasados + testsFallados + testsSkipped;

console.log(`TESTS TOTALES:${testsTotales} \n`);
console.log(`TESTS PASADOS: ${testPasados} \n`);
console.log(`TESTS FALLADOS: ${testsFallados} \n`);
console.log(`TESTS NO EJECUTADOS: ${testsSkipped} \n`);

data += `TESTS TOTALES:${testsTotales} \n`;
data += `TESTS PASADOS: ${testPasados} \n`;
data += `TESTS FALLADOS: ${testsFallados} \n`;
data += `TESTS NO EJECUTADOS: ${testsSkipped} \n`;

fs.writeFileSync("reports/programming.txt", data);

const lines = data.split("\n");
for (const line of lines) {
    console.log(line);
}