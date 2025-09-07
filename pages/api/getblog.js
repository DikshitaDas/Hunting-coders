import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf8", (err, data) => {
    if (err) {
      return res.status(404).json({ error: "blog not found" });
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
