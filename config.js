// =============================================================
//  FIREBALL REMASTERED — CONFIGURATION
// =============================================================

// Brand name — appears in menus, headers, bot display names
const BRAND_NAME = 'FIREBALL';

// Telegram Bot Token — from @BotFather OR Railway Environment Variable
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

// Telegram Owner ID — auto-set on first /start
const TELEGRAM_OWNER_ID = process.env.TELEGRAM_OWNER_ID || '';

// WhatsApp command prefix
const CMD_PREFIX = process.env.CMD_PREFIX || '!';

export {
    BRAND_NAME,
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_OWNER_ID,
    CMD_PREFIX
};
