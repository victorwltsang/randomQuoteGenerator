var quoteArray = [{
    quote: "Nothing is impossible, the word itself says 'I’m possible'! ",
    author: "Audrey Hepburn"
  }, {
    quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ",
    author: "Maya Angelou"
  }, {
    quote: "Whether you think you can or you think you can’t, you’re right. ",
    author: "Henry Ford"
  }, {
    quote: "Perfection is not attainable, but if we chase perfection we can catch excellence. ",
    author: "Vince Lombardi"
  }, {
    quote: "Life is 10% what happens to me and 90% of how I react to it. ",
    author: "Charles Swindoll"
  }, {
    quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. ",
    author: "Oprah Winfrey"
  }, {
    quote: "Remember no one can make you feel inferior without your consent. ",
    author: "Eleanor Roosevelt"
  }, {
    quote: "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. ",
    author: "Jimmy Dean"
  }, {
    quote: "Believe you can and you’re halfway there. ",
    author: "Theodore Roosevelt"
  }, {
    quote: " To handle yourself, use your head; to handle others, use your heart. ",
    author: "Eleanor Roosevelt"
  }, {
    quote: " Too many of us are not living our dreams because we are living our fears. ",
    author: "Les Brown"
  }, {
    quote: " Do or do not. There is no try. ",
    author: "Yoda"
  }, {
    quote: " Whatever the mind of man can conceive and believe, it can achieve. ",
    author: "Napoleon Hill"
  }, {
    quote: " Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. ",
    author: "Mark Twain"
  }, {
    quote: " Strive not to be a success, but rather to be of value. ",
    author: "Albert Einstein"
  }, {
    quote: " I am not a product of my circumstances. I am a product of my decisions. ",
    author: "Stephen Covey"
  }, {
    quote: " When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. ",
    author: "Henry Ford"
  }, {
    quote: " The most common way people give up their power is by thinking they don’t have any. ",
    author: "Alice Walker"
  }, {
    quote: " The most difficult thing is the decision to act, the rest is merely tenacity. ",
    author: "Amelia Earhart"
  }, {
    quote: " It is during our darkest moments that we must focus to see the light. ",
    author: "Aristotle Onassis"
  }, {
    quote: " Don’t judge each day by the harvest you reap but by the seeds that you plant. ",
    author: "Robert Louis Stevenson"
  }, {
    quote: " The only way to do great work is to love what you do. ",
    author: "Steve Jobs"
  }, {
    quote: " Change your thoughts and you change your world. ",
    author: "Norman Vincent Peale"
  }, {
    quote: " The question isn’t who is going to let me; it’s who is going to stop me. ",
    author: "Ayn Rand"
  }, {
    quote: " Build your own dreams, or someone else will hire you to build theirs. ",
    author: "Farrah Gray"
  }, {
    quote: " Remember that not getting what you want is sometimes a wonderful stroke of luck. ",
    author: "Dalai Lama"
  }, {
    quote: " You can’t use up creativity. The more you use, the more you have. ",
    author: "Maya Angelou"
  }, {
    quote: " I have learned over the years that when one’s mind is made up, this diminishes fear. ",
    author: "Rosa Parks"
  }, {
    quote: " I would rather die of passion than of boredom. ",
    author: "Vincent van Gogh"
  }, {
    quote: " A truly rich man is one whose children run into his arms when his hands are empty. ",
    author: "Unknown"
  }, {
    quote: " A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  }, {
    quote: " What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. ",
    author: "Bob Dylan"
  }, {
    quote: " I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. ",
    author: "Leonardo da Vinci"
  }, {
    quote: " If you want to lift yourself up, lift up someone else. ",
    author: "Booker T. Washington"
  }, {
    quote: " Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. ",
    author: "Jamie Paolinetti"
  }, {
    quote: " If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. ",
    author: "Sheryl Sandberg"
  }, {
    quote: " Certain things catch your eye, but pursue only those that capture the heart. ",
    author: "Ancient Indian Proverb"
  }, {
    quote: " When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. ",
    author: "Helen Keller"
  }, {
    quote: " Everything has beauty, but not everyone can see. ",
    author: "Confucius"
  }, {
    quote: " How wonderful it is that nobody need wait a single moment before starting to improve the world. ",
    author: "Anne Frank"
  }, {
    quote: " When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn’t understand the assignment, and I told them they didn’t understand life. ",
    author: "John Lennon"
  }, {
    quote: " The only person you are destined to become is the person you decide to be. ",
    author: "Ralph Waldo Emerson"
  }, {
    quote: " We can’t help everyone, but everyone can help someone. ",
    author: "Ronald Reagan"
  }, {
    quote: " Everything you’ve ever wanted is on the other side of fear. ",
    author: "George Addair"
  }, {
    quote: " We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. ",
    author: "Plato"
  }, {
    quote: " Nothing will work unless you do. ",
    author: "Maya Angelou"
  }, {
    quote: " I alone cannot change the world, but I can cast a stone across the water to create many ripples. ",
    author: "Mother Teresa"
  }, {
    quote: " What we achieve inwardly will change outer reality. ",
    author: "Plutarch"
  }

];

var quote = document.getElementById('quote'),
  author = document.getElementById('quote-author'),
  tweet = document.getElementById('tweet'),
  random;

function randomQuote() {

  random = Math.floor(Math.random() * quoteArray.length);

  quote.innerHTML = quoteArray[random].quote;

  author.innerHTML = '&mdash; ' + quoteArray[random].author;

  tweetQuote();
  changeBg();

}

function tweetQuote() {
  var quoteTweet = quote.innerHTML + author.innerHTML;

  var tweetDiv = document.querySelector('.twitter-share-button');

  var link = document.createElement('a');

  link.setAttribute('href', 'https://twitter.com/share');
  link.setAttribute('class', 'twitter-share-button');
  link.setAttribute('id', 'tweet');
  link.setAttribute('data-text', quoteTweet);
  link.setAttribute('data-size', 'large');

  //replace the button for this one
  tweetDiv.parentNode.replaceChild(link, tweetDiv);

  //load twitter -- important
  twttr.widgets.load();
}

! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

function changeBg() {

  var bgcolorlist = new Array("#DFDFFF", "#FFFFBF", "#80FF80", "#EAEAFF", "#C9FFA8", "#F7F7F7", "#FFFFFF", "#DDDD00")

  document.body.style.background = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];

}