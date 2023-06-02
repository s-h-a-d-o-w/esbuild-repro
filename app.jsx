import * as React from 'react'
import * as Server from 'react-dom/server'

const foo = [0, 1, 2]
let Greet = () => <h1>Hello, world! {foo.includes(2)}</h1>
console.log(Server.renderToString(<Greet />))
