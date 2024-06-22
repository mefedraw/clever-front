import telebot
from telebot import types

bot = telebot.TeleBot("7328939490:AAFlCpYQIIEB9EVan7TOjqpD-VTkzO6mVco")

@bot.message_handler(commands=['start'])
def start(message):
    markup_inline = types.InlineKeyboardMarkup()
    web_url = types.WebAppInfo("https://helloworld9999999.github.io/123/idx_main_page.html")
    url_button = types.InlineKeyboardButton(text="Play the Game", web_app=web_url)  
    markup_inline.add(url_button)
    bot.send_message(
        message.chat.id,
        f"HI, <b>{message.from_user.first_name}</b>! LET'$ PLAY!",
        reply_markup=markup_inline,
        parse_mode="html"
    )

bot.polling(none_stop=True)