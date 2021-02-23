const chance = require("chance").Chance();
const fs = require("fs");
const validator = require("validator");

function generateRandom() {
  let randomValue;
  let randomType = Math.floor(Math.random() * 4) + 1;

  switch (randomType) {
    case 1: {
      randomValue = chance.string({ pool: "abcdefghijklmnopqrstuvwxyz" });
      break;
    }
    case 2: {
      randomValue = chance.floating();
      break;
    }
    case 3: {
      randomValue = chance.integer();
      break;
    }
    case 4: {
      randomValue = chance.string({
        pool: "abcdefghijklmnopqrstuvwxyz0123456789",
      });
    }
    default:
      break;
  }

  return randomValue;
}

function generateRandomValue() {
  return new Promise((resolve, reject) => {
    let size = 0;
    const randoms = [];
    const timestamp = Date.now();
    const OUTPUT_DIR = `./files/${timestamp}.txt`;

    if (!fs.existsSync(OUTPUT_DIR)) fs.writeFileSync(OUTPUT_DIR, "", () => {});

    while (size < 2097152) {
      const random = generateRandom().toString();
      randoms.push(random);
      const randomSize = random.split("").length + 1; // add 1 byte because of comma
      size += randomSize;
    }

    fs.writeFile(OUTPUT_DIR, randoms.join(","), (err) => {
      if (err) return reject(err);
      resolve(timestamp);
    });
  });
}

function getRandomsReport(filename) {
  return new Promise((resolve, reject) => {
    let alphabeticalCount = 0,
      alphanumericCount = 0,
      floatCount = 0,
      intCount = 0;
    const DIR = `./files/${filename}.txt`;

    fs.readFile(DIR, "UTF-8", (err, data) => {
      if (err) return reject(err);

      const values = data.split(",");

      values.forEach((value) => {
        if (validator.isInt(value)) {
          intCount++;
        } else if (validator.isFloat(value)) {
          floatCount++;
        } else if (validator.isAlpha(value)) {
          alphabeticalCount++;
        } else if (validator.isAlphanumeric(value)) {
          alphanumericCount++;
        }
      });

      resolve({ alphabeticalCount, alphanumericCount, floatCount, intCount });
    });
  });
}

module.exports = {
  generateRandomValue,
  getRandomsReport,
};
