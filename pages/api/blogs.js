import * as fs from "fs";

export default async function handler(req, res) {
  try {
    const files = await fs.promises.readdir("blogdata");

    let allBlogs = [];

    for (const file of files) {
      const fileData = await fs.promises.readFile(`blogdata/${file}`, "utf8");
      const blog = JSON.parse(fileData);

      blog.slug = file.replace(".json", "");

      allBlogs.push(blog);
    }


    res.status(200).json(allBlogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load blogs" });
  }
}
