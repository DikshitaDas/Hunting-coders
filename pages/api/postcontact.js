import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    //console.log(req.body);
    let data= await fs.promises.readdir("contactdata");
    fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body), (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ success: true, message: "Contact saved!" });


  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
