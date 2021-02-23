import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Stats from "./components/Stats";
import Button from "./components/Button";
import Link from "./components/Link";
import { generate, getReport } from "./services/api";
import { baseUrl } from "./config/config.json";
import "fontsource-roboto";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [filename, setFilename] = useState("");
  const [stats, setStats] = useState(null);

  const handleGenerate = async () => {
    const { data } = await generate();
    if (data) {
      const { downloadLink, filename } = data.body;
      setFilename(filename);
      setLink(`${baseUrl}${downloadLink}`);
    }
  };

  const handleReport = async () => {
    const { data } = await getReport(filename);
    if (data) {
      setStats(data.body);
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Card data-testid="card" style={{ width: 300, height: 300 }}>
        <CardContent data-testid="card-content">
          <Button
            label="Generate"
            testID="generate-btn"
            color="secondary"
            handler={handleGenerate}
          />
          <Link link={link} />
          <Button label="Report" testID="report-btn" handler={handleReport} />
          <Stats data={stats} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default App;
