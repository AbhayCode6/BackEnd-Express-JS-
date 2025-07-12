# BackEnd-Express-JS-
BackEnd is creating using Express JS
<br>
app.get() //for get request.. <br>
res.send() :- <br>
1: It can send any type of data to the frontend <br>
2: It also set the header automatically according to the content-type. <br>
3: It end the response cycle after serve.. <br>
4: It aslo stringify the data(json.data) to the frontend that we send.. <br>
res.json() :- It strictly allows to pass only json data <br><br>
******------------MIDDLE WARES-------------********* <br>
Middleware is a function or method that performs some task between the client request and the server response.<br>
app.use(express.urlencoded()) app.use() : to add middle ware function, express.urlencoded is the middleware.. : It parses incoming data from HTML forms and makes it available in req.body<br>
urlencoded :-- It parse only form data,It append the data(value) to the key body..<br>
next() : it pass control to next middleware or route. (it must)<br>
Note:- Browser Always run Client side Script <br>
__dirname :- It provides the path of parent folder


