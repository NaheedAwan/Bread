
const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>Default</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" integrity="sha512-Ojqt7YpXqYM6//AdMhErV3ot38rYgGF5QLJEwx7zhesjL9VqfhWiRz/dWK22hsn96RNz0CLl85+pg1P0BmfgVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/Z2eVATePGHOkMIn+xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        {/* <h1>HTML Rendered!</h1> */}
        <div className="wrapper">
          <header>
            <h1><a href="/breads">BreadCRUD</a></h1>
          </header>
        </div>
        <div className="container">
          {html.children}
        </div>
      </body>
    </html>
  )
}

module.exports = Default