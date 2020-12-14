var quotes = [
    "Be kind, for everyone you meet is fighting a hard battle.  - Ian Maclaren",
    
    "Happiness is when what you think, what you say, and what you do are in harmony.  - Mahatma Gandhi",
    
    "Ask not what your country can do for you, ask what you can do for your country.  - John F. Kennedy",
    
    "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.  - Martin Luther King Jr.",
    
    "Education is the most powerful weapon which you can use to change the world.  - Nelson Mandela",
    
    "Look deep into nature, and then you will understand everything better.  - Albert Einstein",
    
    "A good idea is something that does not solve just one single problem, but rather can solve multiple problems at once.  - Shigeru Miyamoto"
    
    ];
console.log(quotes.length);

$("button").click(function() {
    var random = Math.floor( Math.random() * quotes.length );
    $(".show").text(quotes[random]);
});



