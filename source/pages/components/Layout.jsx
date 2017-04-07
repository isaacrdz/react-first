import React from 'react';

function Layout(props) {
    return (
        <!DOCTYPE html>
        <html lang="en">
          <head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
              <title>{props.title}</title>
          </head>
          <body>
              <div id="render-target"
                dangerouslySetInnerHtml={{
                  __html: props.content,
              }}
            />
            <script src= "http://localhost:3001/app.js"/>
          </body>
      </html>
  );
}


export default Layout;
