import {readdirSync, statSync, readFileSync, writeFileSync} from "fs";
import {join, extname} from "path";

function processMarkdownFiles(directory, order) {
  const files = readdirSync(directory);

  for (const file of files) {
    const filePath = join(directory, file);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      processMarkdownFiles(filePath, order);
    } else if (extname(file) === ".md") {
      processMarkdownFile(filePath, order);
      order++;
    }
  }
}

function processMarkdownFile(filePath, order) {
  const content = readFileSync(filePath, "utf8");
  const match = /<a name="([^"]+)"><\/a>/i.exec(content);

  if (match) {
    const title = match[1];
    const newContent = `---
title: ${title}
sidebar:
  order: ${order}
---

${content.replace(/<a name="([^"]+)"><\/a>/i, "")}`;

    writeFileSync(filePath, newContent);
  }
}

const rootDirectory = "./data";
let order = 1;
processMarkdownFiles(rootDirectory, order);
