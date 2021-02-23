const express = require("express");
const { generateRandomValue, getRandomsReport } = require("../helpers/utils");
const fs = require("fs");

function routes() {
  const router = express.Router();

  router.route("/generate").get(async (req, res) => {
    try {
      const filename = await generateRandomValue();
      res.status(201).json({
        success: true,
        body: { filename, downloadLink: `/download/${filename}` },
      });
    } catch (ex) {
      res.status(500).json({ success: false, error: ex.message });
    }
  });

  router.route("/report/:filename").get(async (req, res) => {
    try {
      const report = await getRandomsReport(req.params.filename);
      res.status(200).json({ success: true, body: report });
    } catch (ex) {
      res.status(404).json({ success: false, error: ex.message });
    }
  });

  router.route("/download/:filename").get((req, res) => {
    const DOWNLOAD_DIR = `./files/${req.params.filename}.txt`;
    fs.access(DOWNLOAD_DIR, fs.constants.F_OK, (err) => {
      if (err)
        return res.status(404).json({
          success: false,
          error: err.message,
        });
      res.download(DOWNLOAD_DIR);
    });
  });

  return router;
}

module.exports = routes;
