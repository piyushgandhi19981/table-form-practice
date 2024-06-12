import "./styles.css";

import Form from "./Form";
import Table from "./Table";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Audi Pencil",
        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }, []);

  const HEADERS = ["Name", "Age", "Email"];
  const DATA = [
    ["P G", 25, "pg@example.com"],
    ["N G", 24, "ng@example.com"],
  ];

  return (
    <div className="App">
      <Form />
      <Table headers={HEADERS} data={DATA} />
    </div>
  );
}
