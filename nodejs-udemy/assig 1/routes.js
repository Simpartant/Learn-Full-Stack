
const requestHandel = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url);

if(url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"/>');
    res.write('<button type="submit">User</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}
if(url === '/users'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>User</h1>');
    res.write('<ul>');
    res.write('<li>Son</li><li>Son1</li><li>Son2</li><li>Son3</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}
if(url === "/create-user"){
    const body = [];
    req.on('data' , (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        console.log(parseBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
}

    
}

module.exports = requestHandel;