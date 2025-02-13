/**
 * Questions, options and answered stored here
 * There are 30 questions
 */
const quizData = [
    {
      question:
        "It is Christmas, no need to be afraid. We are to spread a smile of joy and pray for the other ones. While you pray we are to feed the world too and let them know it is Christmas.",
      options: [
        "Blue Christmas",
        "Jingle Bell Rock",
        "Do they know it's Christmas",
        "Santa Baby",
      ],
      answer: "Do they know it's Christmas",
    },
    {
      question:
        "There is not a lot I want for Christmas, only one thing I need. Santa will not make me happy. Please make my wish come true. I definitely will not ask for much this Christmas. Please just come and hold me tight. I just want to see my baby.",
      options: [
        "All I want for Christmas",
        "It's Beginning to look a lot like Christmas",
        "Feliz Navidad",
        "White Christmas",
      ],
      answer: "All I want for Christmas",
    },
    {
      question:
        "On Christmas Eve Sinatra was swinging and we kissed on a corner and danced through the night. The boys of the NYPD were singing Galway Bay and the bells rang out for Christmas day.",
      options: [
        "Santa Claus is Coming to Town",
        "Fairytale of New York",
        "Merry Xmas Everybody",
        "I wish it could be Christmas everyday",
      ],
      answer: "Fairytale of New York",
    },
    {
      question:
        "There was no crib. But little Lord Jesus lay down his head. The stars looked down on Him while he was asleep. The cattle were lowing as He awoke with no crying.",
      options: [
        "O Come, All Ye Faithful",
        "We Three Kings",
        "Silent Night",
        "Away in a Manger",
      ],
      answer: "Away in a Manger",
    },
    {
      question:
        "The angels sing and give glory to a new born King! There is a lot of joy to be proclaimed for Christ is born in Bethlehem. Christ is adored and is the everlasting Lord. Born so no man may die.",
      options: [
        "Hark! The Herald Angels Sing",
        "Little Donkey",
        "While Shepherds Watched",
        "Joy to the World",
      ],
      answer: "Hark! The Herald Angels Sing",
    },
    {
      question:
        "Israel is captive and mourns in lonely exile. But rejoice for Emmanuel shall come. He ordered all things and gave us a path of knowledge. Israel received the law and were in awe. They were expecting a branch from Jesse's family.",
      options: [
        "O Little Town of Bethlehem",
        "O Come, O Come Emmanuel",
        "In the Bleak Midwinter",
        "The First Noel",
      ],
      answer: "O Come, O Come Emmanuel",
    },
    {
      question:
        "It is time to ask, are you hanging up a stocking on your wall? Because everybody is having fun look to the future now, its only just begun. Are you waiting for the family to arrive? Well maybe not this year. But we are hoping the snow will start to fall. Especially as ITS CHRISTMAS!!!",
      options: [
        "Merry Xmas Everybody",
        "Santa Claus is coming to Town",
        "Baby it's cold outside",
        "Do you hear what I hear?",
      ],
      answer: "Merry Xmas Everybody",
    },
    {
      question:
        "Christmas is a great time of year and it would be great if Christmas happened each day. Especially when the snowman brings the snow and that he puts a great big smile on somebodys face. The smile will lead to the kids starting to sing and the band begins to play. So let the bells ring out for Christmas.",
      options: [
        "Walking in the Air",
        "I Wish it could Be Christmas Everyday",
        "Mistletoe and Wine",
        "Step into Christmas",
      ],
      answer: "I Wish it could Be Christmas Everyday",
    },
    {
      question:
        "Can not wait to see those faces. Cos it has been so long. Just trying to pass the time away. As it is gonna take some time, but I will get there. Even though there are red lights all around. I take a look at the person next to me, and he is just the same. I have a thousand memories of you to help me get by.",
      options: [
        "Driving Home for Christmas",
        "Happy Xmas (War is Over)",
        "Stay Another Day",
        "Rudolph the Rednose Reindeer",
      ],
      answer: "Driving Home for Christmas",
    },
    {
      question:
        "There was a dusty road, but we gotta keep plodding along as we have a precious load. Through a winters night we aren't going to give up, Bethlehem is in sight. Ring out the bells, follow that star. We had a heavy day, but the journey's end is near, the star is guiding us, heaven is shining clear.",
      options: [
        "Little Donkey",
        "O Little Town of Bethlehem",
        "Once in Royal David's City",
        "Little Drummer Boy",
      ],
      answer: "Little Donkey",
    },
    {
      question:
        "We come bearing gifts and have traveled so far, following yonder star. Born a King on Bethlehem plain, gold I bring to crown Him again, over us all to reign. Frankincense I have to offer, incense is owed to a Deity high, we shall worship Him, God on high.",
      options: [
        "We Three Kings",
        "Good King Wenceslas",
        "For Unto Us a Child is Born",
        "In the Bleak Midwinter",
      ],
      answer: "We Three Kings",
    },
    {
      question:
        "The Lord has come, so let Earth receive her King. Every heart must prepare Him room, while heaven and nature sing. The saviour reigns. Mortal songs employ, while the fields and floods, rocks, hills and plains, repeat the sounding joy.",
      options: [
        "Joy to the World",
        "O Little Town of Bethlehem",
        "While Shepherd's Watched",
        "Silent Night",
      ],
      answer: "Joy to the World",
    },
    {
      question:
        "A silent night, a holy night, where all is calm and bright. A virgin mother and child rest peacefully while heavenly hosts sing 'Alleluia'. The dawn of redeeming grace shines upon them.",
      options: [
        "Silent Night",
        "Away in a Manger",
        "Hark! The Herald Angels Sing",
        "O Holy Night",
      ],
      answer: "Silent Night",
    },
    {
      question:
        "A beautiful sight, we are happy tonight, walking through a world of white. As we stroll, we will build a frosty friend, asking if he is the marrying type.",
      options: [
        "Jingle Bells",
        "Winter Wonderland",
        "Let It Snow",
        "Frosty the Snowman",
      ],
      answer: "Winter Wonderland",
    },
    {
      question:
        "Snow is falling all around, children playing, having fun. It is the season for love and understanding, so let us celebrate together with joy and cheer.",
      options: [
        "Merry Christmas Everyone",
        "I Wish It Could Be Christmas Everyday",
        "Step Into Christmas",
        "Last Christmas",
      ],
      answer: "Merry Christmas Everyone",
    },
    {
      question:
        "One foggy night, a reindeer stood apart, mocked for his nose so bright. But when the weather turned dire, he guided the sleigh and became a hero overnight.",
      options: [
        "Rudolph the Red-Nosed Reindeer",
        "Frosty the Snowman",
        "Jingle Bells",
        "Santa Claus is Coming to Town",
      ],
      answer: "Rudolph the Red-Nosed Reindeer",
    },
    {
      question:
        "A wish for a joyful season filled with love and light. May your days be cheery and bright, and may all your celebrations be as white as snow.",
      options: [
        "White Christmas",
        "Have Yourself a Merry Little Christmas",
        "Let It Snow",
        "Blue Christmas",
      ],
      answer: "White Christmas",
    },
    {
      question:
        "Children sing, as bells ring out, spreading the festive cheer. In a world of wonder, laughter fills the air. It is time to rejoice and step into the holiday spirit.",
      options: [
        "Step Into Christmas",
        "I Wish It Could Be Christmas Everyday",
        "Merry Christmas Everybody",
        "Rockin' Around the Christmas Tree",
      ],
      answer: "Step Into Christmas",
    },
    {
      question:
        "Amidst the cold, a single night of hope and love. A world weary from sorrow finds solace as divine light breaks through the darkness, filling the night with wonder.",
      options: [
        "O Holy Night",
        "Silent Night",
        "The First Noel",
        "It Came Upon the Midnight Clear",
      ],
      answer: "O Holy Night",
    },
    {
      question:
        "Beneath the mistletoe's glow, lips meet for a festive kiss. The fire burns bright, as love fills the air, making the season merry and warm.",
      options: [
        "Underneath the Tree",
        "All I Want for Christmas Is You",
        "Mistletoe",
        "Last Christmas",
      ],
      answer: "Mistletoe",
    },
    {
      question:
        "A sleigh ride through the snow, dashing along in an open sleigh. Laughter fills the crisp winter air as bells jingle in a cheerful tune.",
      options: [
        "Jingle Bells",
        "Frosty the Snowman",
        "Let It Snow",
        "Sleigh Ride",
      ],
      answer: "Jingle Bells",
    },
    {
      question:
        "Rocking around a festive centerpiece, voices rise in joyful song. The Christmas spirit is in full swing, as the new old-fashioned way takes over.",
      options: [
        "Rockin' Around the Christmas Tree",
        "Jingle Bell Rock",
        "Step Into Christmas",
        "Merry Christmas Everybody",
      ],
      answer: "Rockin' Around the Christmas Tree",
    },
    {
      question:
        "The sound of tiny hooves upon the rooftop signals his arrival. With a jolly laugh and a sack full of toys, he's making his list and checking it twice.",
      options: [
        "Santa Claus is Coming to Town",
        "Jingle Bells",
        "Here Comes Santa Claus",
        "Frosty the Snowman",
      ],
      answer: "Santa Claus is Coming to Town",
    },
    {
      question:
        "A town bathed in divine light as a wondrous birth takes place. Though the streets are silent, the everlasting light watches over all who dream tonight.",
      options: [
        "O Little Town of Bethlehem",
        "Silent Night",
        "It Came Upon the Midnight Clear",
        "The First Noel",
      ],
      answer: "O Little Town of Bethlehem",
    },
    {
      question:
        "A guiding light appears in the night sky, leading shepherds and kings to witness the miracle of a holy birth. The earth rejoices as the good news is shared far and wide.",
      options: [
        "The First Noel",
        "Angels We Have Heard on High",
        "It Came Upon the Midnight Clear",
        "O Holy Night",
      ],
      answer: "The First Noel",
    },
    {
      question:
        "A heavenly host appears on high, singing a song of great joy. Echoing through the hills, their voices rise in a jubilant refrain of 'Gloria'.",
      options: [
        "Angels We Have Heard on High",
        "Hark! The Herald Angels Sing",
        "O Come, All Ye Faithful",
        "The First Noel",
      ],
      answer: "Angels We Have Heard on High",
    },
    {
      question:
        "A call to all faithful ones, urging them to come with joyful hearts. Born on this holy night, the King of Angels welcomes all to adore Him.",
      options: [
        "O Come, All Ye Faithful",
        "Silent Night",
        "The First Noel",
        "It Came Upon the Midnight Clear",
      ],
      answer: "O Come, All Ye Faithful",
    },
    {
      question:
        "A message of peace is carried by the wind, soft and sweet. The world, weary from sorrow, listens as angelic voices bring comfort and light.",
      options: [
        "It Came Upon the Midnight Clear",
        "O Holy Night",
        "The First Noel",
        "Silent Night",
      ],
      answer: "It Came Upon the Midnight Clear",
    },
    {
      question:
        "Shepherds in the fields, watching over their flocks by night, receive a glorious vision. An angel of the Lord appears, bringing tidings of great joy that shall be for all people.",
      options: [
        "While Shepherds Watched Their Flocks",
        "The First Noel",
        "Angels We Have Heard on High",
        "It Came Upon the Midnight Clear",
      ],
      answer: "While Shepherds Watched Their Flocks",
    },
    {
      question:
        "Bells ring out across the town as voices cheer in celebration. Though the snow may not fall, the spirit of Christmas fills the air, making this a simply wonderful time of the year.",
      options: [
        "Wonderful Christmastime",
        "I Wish It Could Be Christmas Everyday",
        "Step Into Christmas",
        "Merry Christmas Everybody",
      ],
      answer: "Wonderful Christmastime",
    },
  ];