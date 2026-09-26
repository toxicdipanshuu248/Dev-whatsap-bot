# FIREBALL REMASTERED ENGINE

Encrypted WhatsApp Bot with Telegram Control Panel.

## Features

- **Telegram Control** — Pair and manage WhatsApp bots via Telegram
- **Self Admin** — Paired number automatically becomes admin
- **Encrypted Payload** — Source code is fully obfuscated
- **Multi-Bot** — Unlimited WhatsApp sessions
- **Anti-RAM** — Only processes commands, skips everything else
- **Brand System** — Change brand name in config.js, entire bot updates

## Requirements

- Node.js 18 or higher
- A Telegram Bot Token (from @BotFather)
- WhatsApp phone number(s) for pairing

## Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd fireball-remastered
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure

Edit `config.js`:

```javascript
const BRAND_NAME = 'YOUR_BRAND';        // Your brand name
const TELEGRAM_BOT_TOKEN = '123:ABC';   // Token from @BotFather
const TELEGRAM_OWNER_ID = '';           // Optional — auto-set on first /start
const CMD_PREFIX = '!';                 // WhatsApp command prefix
```

### 4. Run

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

### 5. Setup via Telegram

1. Open your Telegram bot
2. Send `/start` — you become the owner
3. Send `/addbot 91XXXXXXXXXX` — pair a WhatsApp number
4. Enter the pairing code in WhatsApp → Linked Devices
5. Done! Bot is online.

## Telegram Commands

| Command | Description |
|---------|-------------|
| `/start` | Open control panel |
| `/addbot <number>` | Pair a WhatsApp session |
| `/status` | View fleet status |
| `/mybots` | List your WhatsApp bots |
| `/delete <Bot_N>` | Remove a WhatsApp session |
| `/id` | Show your Telegram user ID |
| `/help` | Show all commands |

## WhatsApp Commands

All WhatsApp commands use the prefix set in `config.js` (default: `!`).

| Command | Description |
|---------|-------------|
| `!menu` | Open command menu |
| `!status` | View system status |
| `!ping` | Speed check |
| `!txt <mode> <name>` | Template spam |
| `!nc <emoji_key> <name>` | Name change turbo |
| `!target` | Lock a target |
| `!slide` | Reply attack |
| `!stopall` | Stop all tasks |
| `!admin` | Claim admin (DM only) |

## Project Structure

```
fireball-remastered/
├── bot.js          # Encrypted bot payload (do NOT edit)
├── config.js       # Settings file (edit this)
├── package.json    # Dependencies
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## Runtime Files (Auto-generated, NOT in git)

```
├── auth/           # WhatsApp session data
├── data/           # Bot configuration and roles
├── users/          # Per-user data
└── store/          # Message cache
```

## Security

- The `bot.js` file is fully encrypted (ZLIB + XOR + BASE64)
- Session data in `auth/` is automatically managed
- Never share your `config.js` with real token/IDs
- Never commit `auth/` or `data/` folders

## License

Private — Do not distribute without permission.

---

Powered by **FIREBALL REMASTERED ENGINE**