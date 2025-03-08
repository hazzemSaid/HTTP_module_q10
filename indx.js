const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const path = parsedUrl.pathname;
    console.log(query);
    console.log(path);
    console.log(req.method);
    if(path === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Calculator</h1>');
        res.write('<form id="calcForm">');
        res.write('<select name="operation" id="operation">');
        res.write('<option value="add">Add</option>');
        res.write('<option value="subtract">Subtract</option>');
        res.write('<option value="multiply">Multiply</option>');
        res.write('<option value="divide">Divide</option>');
        res.write('</select><br><br>');
        res.write('<input type="number" name="a" placeholder="Enter first number" required><br><br>');
        res.write('<input type="number" name="b" placeholder="Enter second number" required><br><br>');
        res.write('<button type="submit">Calculate</button>');
        res.write('</form>');
        res.write('<script>');
        res.write('document.getElementById("calcForm").onsubmit = function(e) {');
        res.write('  e.preventDefault();');
        res.write('  const operation = document.getElementById("operation").value;');
        res.write('  const a = this.elements.a.value;');
        res.write('  const b = this.elements.b.value;');
        res.write('  window.location.href = `/${operation}?a=${a}&b=${b}`;');
        res.write('};');
        res.write('</script>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(path === '/add'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>add</h1>');
        res.write('<p>result is ' + (Number(query.a) + Number(query.b)) + '</p>');
        res.write('<a href="/">Back to home</a>');
        return res.end();
    }
    else if(path === '/subtract'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>subtract</h1>');
        res.write('<p>result is ' + (Number(query.a) - Number(query.b)) + '</p>');
        res.write('<a href="/">Back to home</a>');
        return res.end();
    }
    else if(path === '/multiply'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>multiply</h1>');
        res.write('<p>result is ' + (Number(query.a) * Number(query.b)) + '</p>');
        res.write('<a href="/">Back to home</a>');
        return res.end();
    }
    else if(path === '/divide'){
        if(Number(query.b) === 0){
            return res.end('Error: Division by zero');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>divide</h1>');
        res.write('<p>result is ' + (Number(query.a) / Number(query.b)) + '</p>');
        res.write('<a href="/">Back to home</a>');
        return res.end();
    }
    else{
        res.end('Error: Invalid path');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
