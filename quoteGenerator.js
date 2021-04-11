let quoteKnop1 = document.getElementById('quoteknop');
let plekVoorQuote = document.getElementById('quotePlek');

let houtQuotes = [
  '"She might have melted a heart of stone, but nothing can melt a heart of wood." - Victor Hugo' ,
'"Wood feeds the fire which burns it." - Leonardo da Vinci' ,
'"Wood burns faster when you have to cut and chop it yourself." - Harrison Ford' ,
'"Wood burns because it has the proper stuff in it; and a man becomes famous because he has the proper stuff in him." - Johann Wolfgang von Goethe' ,
'"Nothing is more beautiful than the loveliness of the woods before sunrise." - George Washington Carver' ,
'"A bad historian is even more dangerous than dead documentary wood." - Norman Davies' ,
'"Use what talent you possess: the woods would be very silent if no birds sang except those that sang best." - Henry Van Dyke' ,
'"A tree without roots is just a piece of wood." - Marco Pierre White' ,
'"The woods decay, the woods decay and fall!" - Alfred Lord Tennyson' ,
'"The whole wood seemed running now, running hard, hunting, chasing, closing in round something or - somebody? In panic, he began to run too, aimlessly, he knew not whither." - Kenneth Grahame' ,
'"In the woods we return to reason and faith." - Ralph Waldo Emerson' ,
'"When the uncarved wood is split, its parts are put to use. When the sage is put to use, he becomes the head." - Laozi' ,
'"Wood carving is such an amazing skill and very underrated; once you cut it, its hard to go back." - Jonathan Anderson' ,
'"The woods always look different at night...as if the daytime trees and flowers and stones had gone to bed and sent slightly more ominous versions of themselves to take their places." - Suzanne Collins' ,
'"To dwellers in a wood, almost every species of tree has its voice as well as its feature." - Thomas Hardy' ,
'"The woods seemed all answer and healing and more than enough to live for." - Josephine Winslow Johnson' ,
'"As the woods are the same, the trees standing in their places, the rocks and the earth... they are always different too, as lights and shadows and seasons and moods pass through them." - Emily Carr' ,
'"Glorious are the woods in their latest gold and crimson, Yet our full-leaved willows are in the freshest green. Such a kindly autumn, so mercifully dealing With the growths of summer, I never yet have seen." - William C. Bryant' ,
'"Wood is universally beautiful to man. It is the most humanly intimate of all materials." - Frank Lloyd Wright' ,
'"Crooked wood burns just as well as straight." - German Proverb' ,
'"That fire is best, which is made of drie and wet wood. For wet and greene wood is discommodious; and so are coales, because they make the head heavie and dry up naturall moysture." - William Vaughan' ,
'"For the mind does not require filling like a bottle, but rather, like wood, it only requires kindling to create in it an impulse to think independently and an ardent desire for the truth." - Plutarch' ,
'"As I go through the woods now, so many oak and other leaves have fallen the rustling noise somewhat disturbs my musing." - Henry David Thoreau'];

quoteKnop.addEventListener('click', function(){
    let gekozenQuote = houtQuotes[Math.floor(Math.random() * houtQuotes.length)];
  plekVoorQuote.innerHTML = gekozenQuote;
})



