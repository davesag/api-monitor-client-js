# api-monitor-client-js

    npm install --save api-monitor-client

Then in your code.

    import { monitor } from ‘api-monitor-client’

    monitor.watch(’https://api.slack.com/heartbeat’, apiKey, options)

Get your apiKey by registering at https://api-monitor.io (domain to be confirmed) You can also use your email address as an API Key if you want to demo the system.  Demo users can't override default options.

The `options` are:

    {
      method: 'GET,    // defaults to GET
      headers: {},     // custom headers
      body: {},        // custom body
      frequency: 5,    // minutes - default is 5
      statusOnly: true // only watch for change in status code, not response body
    }

Then simply listen for changes

    monitor.on(‘changed’, ({from: <state>, to: <state>}) => {
      // do something with from and to states.
    })

or errors

    monitor.on(‘error’, (err) => {
      // do something with err, log it, or ignore it.
    })

`err` is the usual Javascript Error object.

state is modelled as:

    {
      api,
      name: one of [‘happy’, ‘sad’, ‘broken’],
      response
    }

The `api` includes the following:

    {
      uri: ‘https://the.full.uri/heartbeat,
      method: 'GET' // get is the default
    }

The `response` is summarised from the standard `httpResponse`:

    {
      statusCode: 200,
      message: 'okay'
    }

