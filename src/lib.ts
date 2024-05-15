import fs from 'fs';
import axios from 'axios';

// Indica quante volte una parola deve ripetersi 
const doppioni: number = 10;

// Funzione asincrona per leggere il contenuto di un file dato un percorso
async function readFileContent(path: string): Promise<string> {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    const response = await axios.get(path);
    return response.data;
  } else {
    return fs.readFileSync(path, 'utf8');
  }
}

// Funzione per analizzare il testo
function analyzeText(text: string) {
    const wordCount = text.split(/\s+/).length;
    const letterCount = text.replace(/\s+/g, '').length;
    const spaceCount = (text.match(/\s/g) || []).length;
  
    // Memorizza la frequenza delle parole
    const wordFrequency: { [key: string]: number } = {};
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    words.forEach(word => {
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });
  
    // Trova le parole ripetute più di doppioni volte
    const repeatedWords = Object.entries(wordFrequency)
      .filter(([word, count]) => count > doppioni)
      .map(([word, count]) => ({ word, count }));
  
    return { wordCount, letterCount, spaceCount, repeatedWords };
}

// Funzione asincrona per analizzare il contenuto di un URL o di un file
async function analyze(url: string) {
  const text: string = await readFileContent(url);
  const result = analyzeText(text);
  return result;
}

export default analyze;
