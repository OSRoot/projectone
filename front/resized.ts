const body =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>image resized</title>
    <style>
    *{
    box-sizing: border-box;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 0;
    padding: 11px;
    justify-content: center;
    text-align: center;
    background-color: rgb(255, 237, 209);
    color: rgb(0, 138, 0);
    text-transform: lowercase;
    scroll-behavior: smooth;
}
.content{
    display:flex;
    justfy-content:space-between;
}

li {
 list-style-type: none; 
 font-size: large;  
 font-weight: bold;
}
a {
    text-decoration: none;
    font-size: 24px;
    font-weight: 800;
}

.tool-bar .logo{
    padding: 2px;
    margin: 0;
    font-size: 3em;
    font-weight: 800;
}

.tool-bar{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: rgb(65, 48, 26);

}
</style>
</head>
<link rel="stylesheet" href="style.css">
<body>

    <div class="tool-bar">
        <a class="logo" href="http://localhost:3000/myapi/images?filename=fjord&width=500&height=500">resize</a>
        <ul>
            <a href="#">resize</a>
            <a href="#">delete</a>
            <a href="#">about</a>
        </ul>
    </div>
    <h3>The output image will be under the name : out_.jpg</h3>

    <div class="main">
       <div class="done">
        <h1>the picture you chose was resized successfully and saved to your hard drive</h1>
       </div>
       <div class="content">
       <img src="http://localhost:3000/thumbnails/out_.jpg">
       <a href="http://localhost:3000/myapi"  style= "padding: 200px">go back</a>
       </div>
    
       <div class="back">
        </div>
    
    </div>
</body>
</html>`

export default body;