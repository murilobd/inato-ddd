# Setup instructions

-   it needs node >= v18
-   run `yarn install`

## How to use:

### API

-   simply run `yarn api start` and you should see a message in the terminal showing the port (default to 8080)
-   using any REST client, simply call "http://localhost:8080/api/v1/trials/country/fr" and you should see a list of ongoing trials in France
-   endpoints
    -   `/api/v1/trials/country/<country>` -> will list all ongoing clinical trials in the typed country (it should be the country code, like FR, DE, etc...)
    -   -   `/api/v1/trials/sponsor/<sponsor>` -> will list all ongoing clinical trials by sponsor (ex: sanofi)
-   to run tests: `yarn api test`

### CLI

-   API must be running
-   simply run `yarn cli start -p <path> -s <search-param>` where:
    -   _path_: country OR sponsor
    -   _search-param_: if `path` is country, the country code; if `path` is sponsor, the sponsor name
