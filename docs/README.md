# Auto-Pinger Bot
## Installation
Open the `src` folder and fill out the `config.json` file.
### For All Platforms:
Install [node.js](https://nodejs.org/en/download/) with a minimum version of `12.0.0`.
### For Windows:
Run `installer.bat` and then `start.bat`.
### For Mac & Linux:
Run the `src` folder in the terminal\
and run the commands `npm install` and `npm run start`.
## Licensing
This bot is not meant to be reproducted or distributed.\
All credit goes to `Reverse#0001` or User ID `658346535087636505` on Discord.\
See `LICENSE.md` for more information.
## Discord Rate Limiting
The Discord Rate Limiting is about 1 request per second, per client in one server.\
I suggest putting the interval no shorter than 5 seconds.
## Configuring Pings
### Turning on Developer Mode
Go to "User Settings" in the bottom left corner.
![-](https://cdn.discordapp.com/attachments/721749508077125684/734729827533324328/unknown.png)
Go to "Appearance", scroll down, and turn on "Developer Mode".
![-](https://cdn.discordapp.com/attachments/721749508077125684/734730483602292816/unknown.png)
![-](https://cdn.discordapp.com/attachments/721749508077125684/734731518479695896/unknown.png)
If you need more help, go to [this page!](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
### Getting a user ID
Now, simply right click a user then click "Copy ID".
![-](https://cdn.discordapp.com/attachments/721749508077125684/734732659363676270/unknown.png)\
Then add to the "MENTION" object in config.json (to only auto-ping that user):\
`<@MY USER ID>`\
Example:\
`<@658346535087636505>`.
### Getting a role ID
Simply right click "Copy ID" while hovering over a role.\
![-](https://cdn.discordapp.com/attachments/721749508077125684/734734866603573248/unknown.png)\
Then add to the "MENTION" object in config.json (to only auto-ping that role):\
`<@&MY_ROLE_ID>`\
Example:\
`<@&732562920554364929>`.
### For a simple @everyone
Add to the "MENTION" object in config.json:\
`@everyone`.
### For a simple @here
Add to the "MENTION" object in config.json:\
`@here`.
## Notes
- The "INTERVAL" object is counted in milliseconds, because in the code\
it is multiplied by 1000, making it count in seconds because the `setInterval()` function\
is counted in milliseconds.
