const cat_Facts = [ // cat facts
    "Cats have \"nine lives\" thanks to a flexible spine and powerful leg and back muscles",
    "In just 7 years, one un-spayed female cat and one un-neutered male cat and their offspring can result in 420,000 kittens",
    "When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows. They also held elaborate funerals during which they drank wine and beat their breasts. The cat was embalmed with a sculpted wooden mask and the tiny mummy was placed in the family tomb or in a pet cemetery with tiny mummies of mice",
    "In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning",
    "Cats hate the water because their fur does not insulate well when it's wet. The Turkish Van, however, is one cat that likes swimming. Bred in central Asia, its coat has a unique texture that makes it water resistant",
    "The first cat show was in 1871 at the Crystal Palace in London",
    "In Holland's embassy in Moscow, Russia, the staff noticed that the two Siamese cats kept meowing and clawing at the walls of the building. Their owners finally investigated, thinking they would find mice. Instead, they discovered microphones hidden by Russian spies. The cats heard the microphones when they turned on",
    "Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible",
    "A cat can sprint at about thirty-one miles per hour",
    "Cats have 32 muscles that control the outer ear (compared to human's 6 muscles each). A cat can rotate its ears independently 180 degrees, and can turn in the direction of sound 10 times faster than those of the best watchdog",
    "Cats are subject to gum disease and to dental caries. They should have their teeth cleaned by the vet or the cat dentist once a year",
    "Among many other diseases, cats can suffer from anorexia, senility, feline AIDS and acne",
    "Cats are the world's most popular pets, outnumbering dogs by as many as three to one",
    "About 37% of American homes today have at least 1 cat",
    "Not every cat gets \"high\" from catnip. Whether or not a cat responds to it depends upon a recessive gene: no gene",
    "Cats have 32 muscles that control the outer ear (humans have only 6). A cat can independently rotate its ears 180 degrees",
    "Isaac Newton invented the cat flap. Newton was experimenting in a pitch-black room. Spithead, one of his cats, kept opening the door and wrecking his experiment. The cat flap kept both Newton and Spithead happy",
    "In contrast to dogs, cats have not undergone major changes during their domestication process",
    "The first commercially cloned pet was a cat named \"Little Nicky.\" He cost his owner $50,000, making him one of the most expensive cats ever",
    "A cat has 230 bones in its body. A human has 206. A cat has no collarbone, so it can fit through any opening the size of its head",
    "A form of AIDS exists in cats",
    "70% of your cat's life is spent asleep",
    "Despite imagery of cats happily drinking milk from saucers, studies indicate that cats are actually lactose intolerant and should avoid it entirely",
    "People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better",
    "A healthy cat has a temperature between 38 and 39 degrees Celcius",
    "The cat's front paw has 5 toes, but the back paws have 4. Some cats are born with as many as 7 front toes and extra back toes (polydactl)",
    "A sexually-active feral tom-cat \"owns\" an area of about three square miles and \"sprays\" to mark his territory with strong smelling urine",
    "Approximately 1/3 of cat owners think their pets are able to read their minds",
    "A female cat can be referred to as a molly or a queen, and a male cat is often labeled as a tom",
    "The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat",
    "Cats should not be fed tuna exclusively, as it lacks taurine, an essential nutrient required for good feline health.  Make sure you have the proper Pet supplies to keep your cat happy and healthy",
    "The strongest climber among the big cats, a leopard can carry prey twice its weight up a tree",
    "Like birds, cats have a homing ability that uses its biological clock, the angle of the sun, and the Earth's magnetic field. A cat taken far from its home can return to it. But if a cat's owners move far from its home, the cat can't find them",
    "A cat can jump 5 times as high as it is tall",
    "The first formal cat show was held in England in 1871; in America, in 1895",
    "A cats field of vision is about 185 degrees",
    "Your cat's heart beats at a rate almost double that of yours, from 110-140 beats per minute",
    "A cat's hearing is better than a dog's. And a cat can hear high-frequency sounds up to two octaves higher than a human",
    "Purring does not always indicate that a cat is happy and healthy - some cats will purr loudly when they are terrified or in pain",
    "Both humans and cats have identical regions in the brain responsible for emotion",
    "The cat appears to be the only domestic companion animal not mentioned in the Bible",
    "Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC",
    "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down",
    "Perhaps the most famous comic cat is the Cheshire Cat in Lewis Carroll's Alice in Wonderland. With the ability to disappear, this mysterious character embodies the magic and sorcery historically associated with cats",
    "Unlike other cats, lions have a tuft of hair at the end of their tails",
    "Abraham Lincoln loved cats. He had four of them while he lived in the White House",
    "Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while walking. All species of wild cats hold their tail horizontally or tucked between their legs while walking",
    "Cats are extremely sensitive to vibrations. Cats are said to detect earthquake tremors 10 or 15 minutes before humans can",
    "A cat has more bones than a human being; humans have 206 and the cat has 230 bones",
    "The Amur leopard is one of the most endangered animals in the world",
    "A female cat is called a queen or a molly",
    "The Ancient Egyptian word for cat was mau, which means \"to see\"",
    "The normal body temperature of a cat is between 100.5 ° and 102.5 °F. A cat is sick if its temperature goes below 100 ° or above 103 °F",
    "You check your cats pulse on the inside of the back thigh, where the leg joins to the body. Normal for cats: 110-170 beats per minute",
    "According to a Gallup poll, most American pet owners obtain their cats by adopting strays",
    "Relative to its body size, the clouded leopard has the biggest canines of all animals' canines. Its dagger-like teeth can be as long as 1.8 inches (4.5 cm)",
    "At 4 weeks, it is important to play with kittens so that they do not develope a fear of people",
    "A cat's normal pulse is 140-240 beats per minute, with an average of 195",
    "Baking chocolate is the most dangerous chocolate to your cat",
    "Unlike humans, cats cannot detect sweetness which likely explains why they are not drawn to it at all",
    "A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet",
    "In 1987, cats overtook dogs as the number one pet in America (about 50 million cats resided in 24 million homes in 1986). About 37% of American homes today have at least one cat",
    "Polydactyl cats (a cat with 1-2 extra toes on their paws) have this as a result of a genetic mutation. These cats are also referred to as 'Hemingway cats' because writer Ernest Hemingway reportedly owned dozens of them at his home in Key West, Florida",
    "Cats spend nearly 1/3 of their waking hours cleaning themselves",
    "Cats have 30 teeth (12 incisors, 10 premolars, 4 canines, and 4 molars), while dogs have 42. Kittens have baby teeth, which are replaced by permanent teeth around the age of 7 months",
    "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding",
    "Cats lap liquid from the underside of their tongue, not from the top",
    "The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens",
    "Lions are the only cats that live in groups, called prides. Every female within the pride is usually related",
    "The Egyptian Mau is probably the oldest breed of cat. In fact, the breed is so ancient that its name is the Egyptian word for \"cat.\"",
    "Cats see six times better in the dark and at night than humans",
    "Female cats are polyestrous",
    "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter)",
    "Tylenol and chocolate are both poisionous to cats",
    "Siamese kittens are born white because of the heat inside the mother's uterus before birth. This heat keeps the kittens' hair from darkening on the points",
    "Long, muscular hind legs enable snow leopards to leap seven times their own body length in a single bound",
    "The cat's footpads absorb the shocks of the landing when the cat jumps",
    "In relation to their body size, cats have the largest eyes of any mammal",
    "In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found",
    "Like humans, cats tend to favor one paw over another",
    "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat",
    "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by \"crossing\" its eyes",
    "The cheetah is the world's fastest land mammal. It can run at speeds of up to 70 miles an hour (113 kilometers an hour)",
    "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically",
    "Cats step with both left legs, then both right legs when they walk or run",
    "A cat's nose is as unique as a human's fingerprint",
    "Cats can be taught to walk on a leash, but a lot of time and patience is required to teach them. The younger the cat is, the easier it will be for them to learn",
    "In 1987 cats overtook dogs as the number one pet in America",
    "A cat's back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34",
    "A cat's brain is more similar to a man's brain than that of a dog",
    "Cats make about 100 different sounds. Dogs make only about 10",
    "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. I n the cat family, only cheetahs cannot retract their claws",
    "In an average year, cat owners in the United States spend over $2 billion on cat food",
    "Cats have 300 million neurons; dogs have about 160 million",
    "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance",
    "It has been scientifically proven that stroking a cat can lower one's blood pressure",
    "The cat who holds the record for the longest non-fatal fall is Andy. He fell from the 16th floor of an apartment building (about 200 ft/.06 km) and survived",
    "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds",
    "Cat's urine glows under a black light",
    "Spanish-Jewish folklore recounts that Adam's first wife, Lilith, became a black vampire cat, sucking the blood from sleeping babies. This may be the root of the superstition that a cat will smother a sleeping baby or suck out the child's breath",
    "Smuggling a cat out of ancient Egypt was punishable by death. Phoenician traders eventually succeeded in smuggling felines, which they sold to rich people in Athens and other important cities",
    "If your cat snores, or rolls over on his back to expose his belly, it means he trusts you",
    "The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze",
    "Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!",
    "A happy cat holds her tail high and steady",
    "Since cats are so good at hiding illness, even a single instance of a symptom should be taken very seriously",
    "The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k). Females weigh between 10 and 15 lbs (4.5-6.8 k)",
    "The world's rarest coffee, Kopi Luwak, comes from Indonesia where a wildcat known as the luwak lives. The cat eats coffee berries and the coffee beans inside pass through the stomach. The beans are harvested from the cat's dung heaps and then cleaned and roasted. Kopi Luwak sells for about $500 for a 450 g (1 lb) bag",
    "Grown cats have 30 teeth. Kittens have about 26 temporary teeth, which they lose when they are about 6 months old",
    "Blue-eyed, pure white cats are frequently deaf",
    "A cat named Dusty, aged 1 7, living in Bonham, Texas, USA, gave birth to her 420th kitten on June 23, 1952",
    "Cats walk on their toes",
    "The first official cat show in the UK was organised at Crystal Palace in 1871",
    "When a cat drinks, its tongue - which has tiny barbs on it - scoops the liquid up backwards",
    "It is estimated that cats can make over 60 different sounds",
    "Normal body temperature for a cat is 102 degrees F",
    "According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat",
    "The average cat food meal is the equivalent to about five mice",
    "Cats can judge within 3 inches the precise location of a sound being made 1 yard away",
    "Researchers believe the word \"tabby\" comes from Attabiyah, a neighborhood in Baghdad, Iraq. Tabbies got their name because their striped coats resembled the famous wavy patterns in the silk produced in this city",
    "A cat's brain is biologically more similar to a human brain than it is to a dog's. Both humans and cats have identical regions in their brains that are responsible for emotions",
    "Cats and kittens should be acquired in pairs whenever possible as cat families interact best in pairs",
    "Cheetahs do not roar, as the other big cats do. Instead, they purr",
    "Cats' eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror",
    "A tiger's stripes are like fingerprints",
    "Cats, just like people, are subject to asthma. Dust, smoke, and other forms of air pullution in your cat's environment can be troublesome sources of irritation",
    "The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the Proailurus, which means \"first cat\" in Greek. The group of animals that pet cats belong to emerged around 12 million years ago",
    "The little tufts of hair in a cat's ear that help keep out dirt direct sounds into the ear, and insulate the ears are called \"ear furnishings.\"",
    "The first true cats came into existence about 12 million years ago and were the Proailurus",
    "Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories",
    "Edward Lear, author of \"The Owl and the Pussycat\", is said to have had his new house in San Remo built to exactly the same specification as his previous residence, so that his much-loved tabby, Foss, would immediately feel at home",
    " A cat only has the ability to move their jaw up and down, not side to side like a human can",
    "A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through",
    "Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination",
    "The average lifespan of an outdoor-only cat is about 3 to 5 years while an indoor-only cat can live 16 years or much longer",
    "A cat has the ability to rotate their ears 180 degrees,with the help of 32 muscles that they use to control them",
    "Heat occurs several times a year and can last anywhere from 3 to 15 days",
    "The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat",
    "The Cat Fanciers Association (CFA) recognizes 44 breeds of cats",
    "The most expensive cat was an Asian Leopard cat (ALC)-Domestic Shorthair (DSH) hybrid named Zeus. Zeus, who is 90% ALC and 10% DSH, has an asking price of £100,000 ($154,000)",
    "The average lifespan of an outdoor-only (feral and non-feral) is about 3 years; an indoor-only cat can live 16 years and longer. Some cats have been documented to have a longevity of 34 years",
    "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat",
    "Purring does not always indicate that a cat is happy. Cats will also purr loudly when they are distressed or in pain",
    "The way you treat kittens in the early stages of it's life will render it's personality traits later in life",
    "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership",
    "Female felines are \"superfecund",
    "A cat's eyesight is both better and worse than humans. It is better because cats can see in much dimmer light and they have a wider peripheral view. It's worse because they don't see color as well as humans do. Scientists believe grass appears red to cats",
    "In Ancient Egypt, when a person's house cat passed away, the owner would shave their eyebrows to reflect their grief",
    "Two members of the cat family are distinct from all others: the clouded leopard and the cheetah. The clouded leopard does not roar like other big cats, nor does it groom or rest like small cats. The cheetah is unique because it is a running cat; all others are leaping cats. They are leaping cats because they slowly stalk their prey and then leap on it",
    "The first cat in space was a French cat named Felicette (a.k.a. \"Astrocat\") In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip",
    "A cat lover is called an Ailurophilia (Greek: cat+lover)",
    "Many cats love having their forehead gently stroked",
    "Cats control the outer ear using 32 muscles; humans use 6",
    "Approximately 40,000 people are bitten by cats in the U.S. annually",
    "There are up to 60 million feral cats in the United States alone",
    "A cat can jump up to five times its own height in a single bound",
    "A cat's heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute",
    "There are approximately 60,000 hairs per square inch on the back of a cat and about 120,000 per square inch on its underside",
    "The leopard is the most widespread of all big cats",
    "A cat's nose pad is ridged with a unique pattern, just like the fingerprint of a human",
    "Owning a cat is actually proven to be beneficial for your health",
    "The ability of a cat to find its way home is called \"psi-traveling.\" Experts think cats either use the angle of the sunlight to find their way or that cats have magnetized cells in their brains that act as compasses",
    "Tests done by the Behavioral Department of the Musuem of Natural History conclude that while a dog's memory lasts about 5 minutes, a cat's recall can last as long as 16 hours",
    "A cat has two vocal chords, and can make over 100 sounds",
    "All cats have claws, and all except the cheetah sheath them when at rest",
    "The smallest wildcat today is the Black-footed cat. The females are less than 20 inches (50 cm) long and can weigh as little as 2.5 lbs (1.2 kg)",
    "Cats' hearing is much more sensitive than humans and dogs",
    "After humans, mountain lions have the largest range of any mammal in the Western Hemisphere",
    "The female cat reaches sexual maturity within 6 to 10 months; most veterinarians suggest spaying the female at 5 months, before her first heat period. The male cat usually reaches sexual maturity between 9 and 12 months",
    "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light",
    "The first cartoon cat was Felix the Cat in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon \"Puss Gets the Boot.\" In 1981 Andrew Lloyd Weber created the musical Cats, based on T.S. Eliot's Old Possum's Book of Practical Cats",
    "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor",
    "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully",
    "Miacis, the primitive ancestor of cats, was a small, tree-living creature of the late Eocene period, some 45 to 50 million years ago",
    "A cat usually has about 12 whiskers on each side of its face",
    "Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible",
    "The life expectancy of cats has nearly doubled since 1930 - from 8 to 16 years",
    "A cat uses its whiskers for measuring distances.  The whiskers of a cat are capable of registering very small changes in air pressure",
    "Fossil records from two million years ago show evidence of jaguars",
    "Blue-eyed, white cats are often prone to deafness",
    "In one stride, a cheetah can cover 23 to 26 feet (7 to 8 meters)",
    "Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby. Legend says that tabby cats have an \"M\" for Mohammed on top of their heads because Mohammad would often rest his hand on the cat's head",
    "A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face. The tail area and paws also carry the cat's scent",
    "Cats only use their meows to talk to humans, not each other. The only time they meow to communicate with other felines is when they are kittens to signal to their mother",
    "The Pilgrims were the first to introduce cats to North America",
    "Cats must have fat in their diet because they can't produce it on their own",
    "While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia, black cats are considered lucky",
    "The average cat can jump 8 feet in a single bound, nearly six times its body length!",
    "Cats have supersonic hearing",
    "Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins. Though milk is not toxic, it can cause an upset stomach and gas. Tylenol and aspirin are extremely toxic to cats, as are many common houseplants. Feeding cats dog food or canned tuna that's for human consumption can cause malnutrition",
    "Most cats adore sardines",
    "Contrary to popular belief, the cat is a social animal. A pet cat will respond and answer to speech , and seems to enjoy human companionship",
    "Cat bites are more likely to become infected than dog bites",
    "It has been scientifically proven that owning cats is good for our health and can decrease the occurrence of high blood pressure and other illnesses",
    "On average, a cat will sleep for 16 hours a day",
    "Kittens remain with their mother till the age of 9 weeks",
    "A cat has the power to sometimes heal themselves by purring. A domestic cat's purr has a frequency of between 25 and 150 Hertz, which happens to be the frequency at which muscles and bones best grow and repair themselves. ",
    "A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages)",
    "Cats prefer to remain non-confrontational. They will not fight to show dominance, but rather to stake their territory. Cats will actually go to extremes to avoid one another in order to prevent a possible confrontation",
    "All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads",
    "A cat cannot see directly under its nose",
    "Cats eat grass to aid their digestion and to help them get rid of any fur in their stomachs",
    "In multi-cat households, cats of the opposite sex usually get along better",
    "A group of cats is called a clowder",
    "The average litter of kittens is between 2 - 6 kittens",
    "A steady diet of dog food may cause blindness in your cat - it lacks taurine",
    "Unlike humans, cats do not need to blink their eyes on a regular basis to keep their eyes lubricated",
    "A group of cats is called a \"clowder.\"",
    "In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens",
    "The largest breed of cat is the Ragdoll with males weighing in at 1 5 to 20 lbs. The heaviest domestic cat on record was a neutered male tabby named Himmy from Queensland, Australia who weighed 46 lbs. 1 5 oz",
    "Ancient Egyptian family members shaved their eyebrows in mourning when the family cat died",
    "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more",
    "Cats with long, lean bodies are more likely to be outgoing, and more protective and vocal than those with a stocky build",
    "When your cats rubs up against you, she is actually marking you as 'hers' with her scent. If your cat pushes his face against your head, it is a sign of acceptance and affection",
    "There is a species of cat smaller than the average housecat. It is native to Africa and it is the Black-footed cat (Felis nigripes). Its top weight is 5.5 pounds",
    "Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors",
    "Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived",
    "Neutering a cat extends its life span by two or three years",
    "In the 1750s, Europeans introduced cats into the Americas to control pests",
    "Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male",
    "Cats purr at the same frequency as an idling diesel engine, about 26 cycles per second",
    "The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\"",
    "Cats take between 20-40 breaths per minute",
    "The technical term for a cat's hairball is a \"bezoar.\"",
    "A cat's jaw has only up and down motion; it does not have any lateral, side to side motion, like dogs and humans",
    "Cats bury their feces to cover their trails from predators",
    "Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs",
    "Cats have 30 vertebrae (humans have 33 vertebrae during early development; 26 after the sacral and coccygeal regions fuse)",
    "A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime",
    "Cats respond most readily to names that end in an \"ee\" sound",
    "In Siam, the cat was so revered that one rode in a chariot at the head of a parade celebrating the new king",
    "A cat's jaw can't move sideways, so a cat can't chew large chunks of food",
    "Today there are about 100 distinct breeds of the domestic cat",
    "Cat paws act as tempetature regulators, shock absorbers, hunting and grooming tools, sensors, and more",
    "Cats have 3 eyelids",
    "Some notable people who disliked cats:  Napoleon Bonaparte, Dwight D. Eisenhower, Hitler",
    "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won't darken and they will stay a creamy white",
    "It may take as long as 2 weeks for a kitten to be able to hear well.  Their eyes usually open between 7 and 10 days, but sometimes it happens in as little as 2 days",
    "A cat has more bones than a human; humans have 206, and the cat - 230",
    "A cat's normal temperature varies around 101 degrees Fahrenheit",
    "Cats respond better to women than to men, probably due to the fact that women's voices have a higher pitch",
    "The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high",
    "Cats have been domesticated for half as long as dogs have been",
    "THERE IS A HORSE COMING TO YOU"
]
// while the site is loading
document.addEventListener('DOMContentLoaded', () => {
    // declare that catTag is the cat-fact class
    const catTag = document.querySelector('#cat-fact');
    // then get a random index from the cat facts. 
    const randomIndex = Math.floor(Math.random() * cat_Facts.length);
    // then set whatever is in that index to the catTag text.
    catTag.textContent = cat_Facts[randomIndex];
});