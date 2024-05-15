# Text Analyzer

Text Analyzer è un'applicazione web scritta in TypeScript  per l'analisi del testo. L'applicazione prende in ingresso un URL o la path di un file, analizza il testo e restituisce il numero di caratteri, spazi, parole e tutte le parole che vengono ripetute più di 10 volte.

## Come funziona

L'applicazione analizza il testo fornito tramite un URL o un file locale e restituisce:
- Numero di caratteri
- Numero di spazi
- Numero di parole
- Parole ripetute più di 10 volte

## Come avviare l'applicazione

Per avviare l'applicazione, segui questi passaggi:

1. **Clonare la repository**
   ```bash
   git clone https://github.com/mauromarano/nodejs-text-analyzer.git
   ```

2. **Costruire l'immagine Docker**
   ```bash
   docker build -t textanalyzer ./
   ```

3. **Avviare il container**
   ```bash
   docker run --rm -v ./data:/app/data -p 3000:3000 textanalyzer
   ```

4. **Aprire il browser**
   Puntare il browser su [http://localhost:3000](http://localhost:3000)

## Utilizzo dell'applicazione

Una volta avviata l'applicazione, puoi inserire un URL o la path di un file nella web UI. Nota che per analizzare i file locali, i file devono essere inseriti nella cartella `./data` presente nella directory principale del progetto. Il volume `./data` viene montato all'interno del container alla path `/app/data`.

### Esempio

Se vuoi analizzare il file `documento.txt`, segui questi passaggi:

1. Inserisci il file `documento.txt` nella cartella `./data`:
   ```bash
   mv percorso/al/documento.txt ./data/
   ```

2. Nella web UI, referenzia il file con la path completa:
   ```
   /app/data/documento.txt
   ```

## Logica dell'applicazione

Tutta la logica dell'applicazione si trova in `./src/lib.ts`

## Contributi

Sono benvenuti contributi e suggerimenti! Sentiti libero di aprire issue e pull request.

