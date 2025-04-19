const path = require('path');

// Apenas para mostrar o nome do arquivo atual
console.log(path.basename(__filename));

// Mostra o nome do diretório atual
console.log(path.dirname(__filename));

// Mostra a extensão do arquivo atual
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));