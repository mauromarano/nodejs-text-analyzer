async function analyzeText() {
  const input = document.getElementById("textInput").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML =
    '<div class="text-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h2a10 10 0 00-20 0h2z"></path></svg>Caricamento...</div>';

  const response = await fetch("/api", {
    method: "POST", // *GET, POST, PUT, DELETE, ecc.

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input), // body data type must match "Content-Type" header
  });

  let result = await response.json();

  resultsDiv.innerHTML = `
    <p>Numero totale di parole: ${result["wordCount"]}</p>
                <p>Numero totale di caratteri: ${result["letterCount"]}</p>
                <p>Numero totale di spazi: ${result["spaceCount"]}</p>
                <p>Parole frequenti:</p>
                <ul>
                    ${result["repeatedWords"]
                      .map((fw) => `<li>${fw.word}: ${fw.count} volte</li>`)
                      .join("")}
                </ul>`;
}
