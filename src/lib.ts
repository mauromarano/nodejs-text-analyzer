import fs from 'fs';
import axios from 'axios';

// const url:string = 'https://pastebin.com/raw/gvXmL4yU'

async function readFileContent(path: string): Promise<string> {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    const response = await axios.get(path);
    return response.data;
  } else {
    return fs.readFileSync(path, 'utf8');
  }
}

function analyzeText(text: string) {
    const wordCount = text.split(/\s+/).length;
    const letterCount = text.replace(/\s+/g, '').length;
    const spaceCount = (text.match(/\s/g) || []).length;
  
    const wordFrequency: { [key: string]: number } = {};
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    words.forEach(word => {
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });
  
    const repeatedWords = Object.entries(wordFrequency)
      .filter(([word, count]) => count > 10)
      .map(([word, count]) => ({ word, count }));
  
    return { wordCount, letterCount, spaceCount, repeatedWords };
  }
  


async function analyze(url:string) {

  const text:string = await readFileContent(url);

  const result = analyzeText(text);
  return result;
}

export default analyze;
