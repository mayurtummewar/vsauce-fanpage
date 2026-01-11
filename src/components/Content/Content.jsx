import React from 'react'
import VideoItem from './VideoItem'

const Content = () => {
  const videoList = [
    {
      videoName: "The Banach-Tarski Paradox",
      videoLink: "https://youtu.be/s86-Z-CbaHA?si=1d0sdBjlRsJ1EAfB",
      videoThumbnail: "https://i.ytimg.com/vi/s86-Z-CbaHA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdU6AjCIHwqbNMSgLBn_tj3eolew/maxresdefault.jpg",
      videoDescription: "This video dives into the Banach–Tarski Paradox — that wild mathematical idea that you can, in theory, break a solid ball into a few pieces and reassemble them into two balls the same size as the original, like some insane duplication trick. It’s all about set theory, infinity, and how weird math gets when you use abstract rules like the Axiom of Choice. Vsauce walks you through why it sounds impossible, yet how the paradox works in pure math, mixing logic with mind-bending visuals and that classic “wait, what?” vibe."
    },
    {
      videoName: "Is Earth Actually Flat?",
      videoLink: "https://youtu.be/VNqNnUJVcVs?si=BEnzpi-P4MftUWw6",
      videoThumbnail: "https://i.ytimg.com/vi/VNqNnUJVcVs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiTnbu4lcgl1SC59-kt5bnLhxrOQ/maxresdefault.jpg",
      videoDescription: "This video starts with that classic Vsauce energy — Michael kicking off by asking if the Earth might actually be flat and then takes you on a weirdly satisfying ride through the physics, history, and flat-Earth theories versus reality. It’ll show why Kansas is literally flatter than a pancake, what “gravity” would feel like on a disk world, and how old misconceptions about a flat Earth stick around even though scientists have known it’s round for millennia. It’s goofy, clever, and somehow makes you rethink old arguments while still demolishing them with real science."
    },
    {
      videoName: "What Will We Miss?",
      videoLink: "https://youtu.be/7uiv6tKtoKg?si=DuDxc0FObq-ZFLYN",
      videoThumbnail: "https://i.ytimg.com/vi/7uiv6tKtoKg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf_x495rK4oQTLm4CjL6inbEg8oQ/maxresdefault.jpg",
      videoDescription: "This video is a classic Vsauce journey asking the big, bittersweet question: what amazing things in the universe will we never get to see? Michael runs through cosmic timelines — from weird calendar quirks and insanely slow pyramids to future supernovas, the Milky Way colliding with Andromeda, Niagara Falls disappearing, and moons drifting away — all framed around how short human lives are compared to these epic events. It’s the perfect mix of awe, science, and that low-key existential “wow, time is wild” feeling that sticks with you."
    },
    {
      videoName: "Spooky Coincidences?",
      videoLink: "https://youtu.be/sHCHEykUxP4?si=f929l-qOXFcF-TAQ",
      videoThumbnail: "https://i.ytimg.com/vi/sHCHEykUxP4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRkUsLv7RTVic4vdTFDW9MUl3H8A/maxresdefault.jpg",
      videoDescription: "This video digs into all those spooky coincidences that make you go “huh?” — from weird pattern matches like numbers lining up with pyramids to the classic Lincoln–Kennedy quirks — and asks why our brains are so good at spotting them (and sometimes way over-interpreting them). It’s about the psychology of pattern-making, chance events that seem eerie but are just random, and how we fool ourselves into finding meaning in chaos, wrapped in that playful, curious Vsauce style."
    },
    {
      videoName: "Which Way Is Down?",
      videoLink: "https://youtu.be/Xc4xYacTu-E?si=j0NMG51ZcZK9F5Et",
      videoThumbnail: "https://i.ytimg.com/vi/Xc4xYacTu-E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsdDNhoSLq6E9u9_a6WMxoRXN0zg/maxresdefault.jpg",
      videoDescription: "This video turns a simple question — which way is down? — into a trip through gravity, relativity, and curved space-time. It shows how “down” isn’t just a direction but tied to how mass warps the world around us, why things fall the way they do, and how perspective literally shapes physics. It’s goofy, deep, and makes you rethink something you’ve always taken for granted."
    },
    {
      videoName: "Illusions of Time",
      videoLink: "https://youtu.be/zHL9GP_B30E?si=sKq2H8exT6i_eYnk",
      videoThumbnail: "https://i.ytimg.com/vi/zHL9GP_B30E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm_w91c2AOCyXXADTfr-2NAFYWVA/maxresdefault.jpg",
      videoDescription: "This one messes with your head by showing that time isn’t the smooth, uniform thing we think it is. It walks through how our minds trick us — why birthdays fly by, why some moments feel longer or shorter, and how memory and perception make time feel different. It’s part science, part psychology, and all that familiar weird Vsauce swirl that makes time feel slippery."
    },
    {
      videoName: "Did The Past Really Happen?",
      videoLink: "https://youtu.be/O2jkV4BsN6U?si=4842ouRKR82hp9el",
      videoThumbnail: "https://i.ytimg.com/vi/O2jkV4BsN6U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDlAThfyi8-4GYbix-x20LpnHpmg/maxresdefault.jpg",
      videoDescription: "This video begins with a quirky story and spirals into a big philosophical dive on memory, history, and how we claim to know what happened before. It challenges the idea that the past is definite, teases apart how evidence shapes belief, and wonders how future explorers might interpret us. It’s one of those videos that makes history feel like a question, not a fact."
    },
    {
      videoName: "Do Chairs Exist?",
      videoLink: "https://youtu.be/fXW-QjBsruE?si=OEr7vFzimGRDo-i2",
      videoThumbnail: "https://i.ytimg.com/vi/fXW-QjBsruE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNt38s9o4YLWjk-LYdFVTJUK59Aw/maxresdefault.jpg",
      videoDescription: "This video takes the everyday chair and asks: does it really exist? It turns out a chair isn’t some magical object, but just a bunch of tiny particles arranged in a way that looks like a chair to our brains. It’s philosophy mixed with physics about what “exists” even means, and somehow it makes you rethink every seat you’ve ever sat on."
    },
    {
      videoName: "The Napkin Ring Problem",
      videoLink: "https://youtu.be/J51ncHP_BrY?si=luvrbwp93IlfZo07",
      videoThumbnail: "https://i.ytimg.com/vi/J51ncHP_BrY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXsOqr8EfLZSdzHAJPBvDqBP5d7g/maxresdefault.jpg",
      videoDescription: "This one is classic Vsauce geometry weirdness — cut a cylindrical hole through a sphere and the leftover “napkin ring” has the same volume no matter what size sphere you started with, as long as the height stays the same. It flips your intuition about shapes on its head and quietly makes math feel like magic."
    },
    {
      videoName: "What is Random?",
      videoLink: "https://youtu.be/9rIy0xY99a0?si=z1SX6NvjJd9fhv9K",
      videoThumbnail: "https://i.ytimg.com/vi/9rIy0xY99a0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAE4mIKZuCphsHNb9s9Ft0x1tf-1A/maxresdefault.jpg",
      videoDescription: "This video hunts down what “random” even means. It shows how nothing we call random (like coin flips) is really random deep down, but more about unpredictability and how we use the idea. It’s the kind of episode that makes you question how random your choices and the universe really are."
    },
    {
      videoName: "Spinning",
      videoLink: "https://youtu.be/XHGKIzCcVa0?si=iPSib45xBS4xD3Q2",
      videoThumbnail: "https://i.ytimg.com/vi/XHGKIzCcVa0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9x4t5KIRZy-69aFNHd26iZF7VcQ/maxresdefault.jpg",
      videoDescription: "Here Vsauce plays with gyroscopes, tops, and spinning things to show why rotation is so wild — things seem to resist falling over, currents shift direction, and physics gets funky when motion and forces mix. It’s physics made fun and unexpectedly deep, with that “wait… how?” energy the whole way."
    },
    {
      videoName: "The Future Of Reasoning",
      videoLink: "https://youtu.be/_ArVh3Cj9rw?si=CXIxvye3MmeoTexW",
      videoThumbnail: "https://i.ytimg.com/vi/_ArVh3Cj9rw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwLq4DB2wjU14YtJxDMQuBR_N6Ow/maxresdefault.jpg",
      videoDescription: "This video starts with a simple thought: where is your mind? and ends up talking about how reasoning isn’t just logic in your head but a social tool we’ve evolved to share ideas and make decisions together. It digs into bias, collaboration, and why reasoning might need a reboot as the world gets more complex."
    },
    {
      videoName: "The Odd Number Rule",
      videoLink: "https://youtu.be/U6VBV4QUMu0?si=8jKOgd2GdTzT7GJO",
      videoThumbnail: "https://i.ytimg.com/vi/U6VBV4QUMu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaiwNSC9dalQJ2hHuiA4_oqVpnOg/maxresdefault.jpg",
      videoDescription: "This video starts off playful and almost wandering, but it ends up zeroing in on a neat pattern: when things fall under constant acceleration, the distances they cover form odd numbers. Michael ties it to Galileo and how math quietly describes gravity, looping in quirky examples like rules, dogs in movies, and oddities that make you smile even as you almost understand physics."
    },
    {
      videoName: "Would Headlights Work at Light Speed?",
      videoLink: "https://youtu.be/ACUuFg9Y9dY?si=RzenkphRv7_5zlR4",
      videoThumbnail: "https://i.ytimg.com/vi/ACUuFg9Y9dY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_N_Zfw7ChkJdxr3EkH2NXQZhcuQ/maxresdefault.jpg",
      videoDescription: "This video answers the silly-seeming but insanely deep thought experiment: if you drove at light speed and flicked on your headlights, what happens? Michael walks you through relativity, showing why light always zips away at the same speed no matter what you’re doing, and why time and distance start to behave in bizarre ways as you chase that cosmic speed limit."
    },
    {
      videoName: "The Moon Terminator Illusion",
      videoLink: "https://youtu.be/Y2gTSjoEExc?si=G6Ln1TNicKJd8BFU",
      videoThumbnail: "https://i.ytimg.com/vi/Y2gTSjoEExc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBegvchElCYbb-Dmvrxt6E91QdapA/maxresdefault.jpg",
      videoDescription: "This video breaks down that weird moment when the bright line between day and night on the Moon doesn’t look like it points right at the Sun. Michael explains how perspective, foreshortening, and how our brains interpret distance trick us into seeing an angle that feels off, even though the light really is just geometry and visual clues playing games with your mind."
    }
  ]
  const bonusVideoList = [
    {
      videoName: "Fixed Points",
      videoLink: "https://youtu.be/csInNn6pfT4?si=uk2TAiCAqFvV9FtI",
      videoThumbnail: "https://i.ytimg.com/vi/csInNn6pfT4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOZPXM2CjIW328fEnqfvJMAOdrYA/maxresdefault.jpg",
      videoDescription: "This video starts with some quirky facts (like secret art on the Moon) and then dives into fixed points — spots that stay put even when everything around them moves. It turns a math idea into this surprising rule about why you can’t smoothly mix up every point in a space without leaving something unchanged. It’s one of those episodes that sneaks basic topology and math into everyday thinking with that familiar playful logic."
    },
    {
      videoName: "The Brachistochrone",
      videoLink: "https://youtu.be/skvnj67YGmw?si=iNj0bw3XjCYehdwo",
      videoThumbnail: "https://i.ytimg.com/vi/skvnj67YGmw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlQk7ozHko-imEpHB9lKg_B535rg/maxresdefault.jpg",
      videoDescription: "This video tackles the brachistochrone problem — what shape path gets you between two points in least time under gravity. Vsauce explores weird curves like cycloids and shows how the fastest route isn’t a straight line but one that lets you accelerate early, blending geometry with physics and surprising intuition. It’s math that feels like a puzzle you can see and almost touch."
    },
    {
      videoName: "Supertasks",
      videoLink: "https://youtu.be/ffUnNaQTfZE?si=kqI_B1wz9bVBq73y",
      videoThumbnail: "https://i.ytimg.com/vi/ffUnNaQTfZE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPwfC4wStxtQyhC9B-fPAE-KEvHw/maxresdefault.jpg",
      videoDescription: "This video plays with the wild idea of doing an infinite number of things in a finite amount of time — imagine slicing a cake forever, faster and faster, and actually finishing all the cuts. It teases out paradoxes about infinity, time, and what “completing” even means when there’s no end to the steps. It’s abstract, strange, and totally delightful in the way only these deep “Vsauce” questions can be."
    },
    {
      videoName: "Laws and Causes",
      videoLink: "https://youtu.be/_WHRWLnVm_M?si=kWotUHPeqIcsogWq",
      videoThumbnail: "https://i.ytimg.com/vi/_WHRWLnVm_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7mKwikK3JHtQFrvpMwDQawP8SXg/maxresdefault.jpg",
      videoDescription: "This one jumps off from something as goofy as a fake penny and uses it to explore why things act the way they do — especially spinning stuff, angular momentum, and how the laws of physics govern motion. It weaves cause, effect, and the rules behind them into a story that’s part physics lesson and part philosophical musing on how we explain the world."
    }
  ]
  return (
    <div className='h-full w-400 mx-auto bg-white px-20 pt-40'>
        <h1 className='text-8xl font-extrabold text-center'>Top 15 most mind-bending Vsauce videos to watch</h1>
            <p className='text-xl text-justify leading-8 py-20'>
            Vsauce is a YouTube channel that explores a wide range of fascinating topics, including science, mathematics, psychology, philosophy, pop culture, and occasionally cosmology.
            What sets Vsauce apart is not just the subjects it covers, but the way those subjects are presented.
            Each video begins with a seemingly simple or even playful question, which then unfolds into a deep, thought-provoking journey filled with unexpected connections and insights.
            This unique approach transforms curiosity into a powerful learning experience.<br /><br />
            The videos are narrated by the channel’s creator, Michael Stevens, whose distinctive storytelling style is a major reason for Vsauce’s lasting popularity.
            His calm yet engaging delivery draws viewers in almost instantly, making complex ideas feel approachable and exciting.
            As the video progresses, viewers often find themselves led far beyond the original question, exploring ideas they never expected to encounter.
            By the end, the conclusion frequently reframes the topic entirely, leaving audiences with a sense of awe and a desire to think more deeply about the world around them.<br /><br />
            Many of the most iconic Vsauce videos are remembered not only for their memorable questions, but also for their ability to connect abstract concepts to everyday experiences.
            Whether discussing the nature of infinity, the psychology of fear, or the philosophical implications of choice and free will,
            Vsauce encourages viewers to question assumptions and see familiar ideas from new perspectives.<br /><br />
            Another standout feature of the channel is its frequent references to books, research papers, and historical anecdotes.
            These references add depth and credibility to the content while also serving as a gateway for viewers who want to explore the subject further.
            For many fans, Vsauce acts as a starting point—sparking curiosity, inspiring reading, and nurturing a lifelong interest in learning.<br /><br />
            </p>
            <div className='py-20'>
              {videoList.map(function(elem, idx){
                return <div key={idx}>
                  <VideoItem index={idx} name={elem.videoName} redirect={elem.videoLink} thumbnail={elem.videoThumbnail} description={elem.videoDescription} />
                </div>
              })}
            </div>

            <p className='text-xl text-justify leading-8 py-20'> Some Bonus Videos :-</p>
            <div>
              {bonusVideoList.map(function(elem, idx){
                return <div key={idx}>
                  <VideoItem name={elem.videoName} redirect={elem.videoLink} thumbnail={elem.videoThumbnail} description={elem.videoDescription} />
                </div>
              })}
            </div>

    </div>
  )
}

export default Content