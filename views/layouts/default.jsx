// const React = require('react')
// function Default(html){
//     return(

//     )
// }
// module.exports = Default
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
// </head>
// <body>
    
// </body>
// </html>
const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendered!</h1>
      <div className="container">
        {html.children}
      </div>
    </body>
    </html>
  )
}

module.exports = Default