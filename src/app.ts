import fs from 'fs';
import axios from 'axios';

const url:string = 'https://pastebin.com/raw/rWNZiGG5'

async function readFileContent(path: string): Promise<string> {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    const response = await axios.get(path);
    return response.data;
  } else {
    return fs.readFileSync(path, 'utf8');
  }
}




async function main() {
  console.log(await readFileContent(url));
}

main();
