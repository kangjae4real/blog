const commander = require("commander");
const { Command } = commander;
const fs = require("fs");
const dayjs = require("dayjs")

const program = new Command();

interface Options {
  filePath?: string;
  fileName?: string;
  title: string;
  date?: string;
  tags?: string[];
}

program
  .option("-f, --filePath <path>", "file path")
  .option("-fn, --fileName <name>", "file name")
  .requiredOption("-t, --title <title>", `you must add "title" field.`)
  .option("-d, --date <date>", "date")
  .option("-tg, --tags <tags...>");

program.parse();

const { filePath, fileName, title, date, tags } = program.opts() as Options;

const getTags = (tags: Options["tags"]) => {
  if (!tags) {
    return "";
  }

  const tagsTemplate = tags.map((tag, index) => `${index ? "\t" : "\r\t"}- ${tag}`).join("\n");

  return `tags: ${tagsTemplate}`;
}

const getFilePathWithFileName = (filePath: Options["filePath"], fileName: Options["fileName"]) => {
  const name = fileName ?? "index.mdx";

  if (!filePath) {
    return `./content/posts/${name}`
  }

  return `./content/posts/${filePath}/${fileName ?? "index.mdx"}`;
}

const getDate = (date: Options["date"]) => {
  const now = dayjs().format("YYYY-MM-DD");

  if (!date) {
    return now;
  }

  return dayjs(date).format("YYYY-MM-DD");
}

const template = `---
title: ${title}
date: ${getDate(date)}
${getTags(tags)}
---`;

if (filePath) {
  fs.mkdirSync(`./content/posts/${filePath}`, { recursive: true });
}

fs.writeFileSync(getFilePathWithFileName(filePath, fileName), template);