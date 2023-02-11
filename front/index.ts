const body =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To My Image Processing Api</title>

    <style>
    
    *{
        box-sizing: border-box;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin: 0;
        padding: 11px;
        justify-content: center;
        text-align: center;
        background-color: #e5e5e5;
        color: rgb(0, 138, 0);
        text-transform: lowercase;
        scroll-behavior: smooth;
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
        <a class="logo" href="http://localhost:3000/myapi/images?filename=fjord&width=400&height=400">resize</a>
        <ul>
            <a href="#">resize</a>
            <a href="#">delete</a>
            <a href="#">about</a>
        </ul>
    </div>
    <h1> the only functional button is the logo button</h1>

    <div class="main">
       <div class="howto">
        <h1>How to use this api?</h1>
        <ul>
            <li>1- Enter the url followed by the endpoint.</li>
            <li>2- The paramaters available are : _ filename, _ height, _ width.</li>
            <li>3- The paramaters should be correct.</li>
            <p>e.g. http://localhost:3000/myapi/images?filename=fjord&width=200&height=200 </p>
        </ul>
       </div>

        <div class="expect-what">
            <h1>What do you expect from this api?</h1>
            <ul>
                <li>1- To resize the picture you select.</li>
                <li>2- There will be a new resized picture saved to your disk</li>
            </ul>
        </div>
    
    </div>
</body>
</html>`

export default body;