![Chums Logo](https://intranet.chums.com/images/chums/chums-badge-120x120.png)
# CHUMS Local API Modules
This is used on a variety of node.js server instance for standard tasks.

## Required Environment Variables
| Module         | VARIABLE | Default Value | notes |
|----------------| --- | --- | --- |
| General        | DEBUG | chums:* |
| Authentication | JWT_SECRET | | Used to validate if locally generated token |
| Authentication | JWT_ISSUER | | Used to validate if locally generated token |
| Authentication | CHUMS_API_HOST | http://localhost | used for calls to chums /api |
| Authentication | CHUMS_API_USER | | used for API calls to /api/user |
| Authentication | CHUMS_API_PASSWORD | | used for API calls to /api/user |

