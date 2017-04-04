# jcmock
Tiny command line app to mock endpoints and returned data on demand.

# Installation

1. Install NodeJS 7.8.0 or greater. To do that, go to https://nodejs.org/en/, click on the big gren button and follow the instructions.
2. On a command line console, execute: npm install -g jcmock


# Usage

On a Command Line, execute this:

set JCMOCK_PORT=4333 && set JCMOCK_URL=/somepath && set JCMOCK_RESPONSE_PATH=/dev/om/response.json && jcmock

*JCMOCK_PORT*: Port where mocked endpoint will be listening. IE: 4333 (defaults to 8080)

*JCMOCK_URL*: Path to mock. IE: /person

*JCMOCK_RESPONSE_PATH*: Path to response that will be returned when endpoint is hit. IE: {"key":"value"}
