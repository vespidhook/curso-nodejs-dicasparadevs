const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), (error) => {
    if (error) {
        return console.log('Error:', error);
    }

    console.log('Pasta criada com sucesso');
});

fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello Nodejs!', (error) => {
    if (error) {
        return console.log('Error:', error);
    }

    console.log('Arquivo criado com sucesso');
    

    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), '\nHello World!', (error) => {
        if (error) {
            return console.log('Error:', error);
        }
    
        console.log('Arquivo modificado com sucesso');
        }
    );

    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf-8', (error, data) => {
        if (error) {
            return console.log('Error:', error);
        }
    
        console.log(data);
        }
    );
});
   
    

