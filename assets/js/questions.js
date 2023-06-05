const questionsList = [
    {
        section: "General",
        question: "Which US state has had the highest number of  reported sasquatch sightings (according to the Bigfoot Field Research Organisation)",
        A: "A: Ohio",
        B: "B: Illinois",
        C: "C: Washington",
        correct: "C: Washington",
        info: "This number does not take into account the stories told by indiginous peoples of their encounters with sasquatch, and many encounters are not reported."
    },
    {
        section: "General",
        question: "In which year did Jerry Crew make a cast of a 16 inch footprint, bringing the creature to popular attention and helping christen the name 'Bigfoot'?",
        A: "A: 1949",
        B: "B: 1958",
        C: "C: 1962",
        correct: "B: 1958",
        info: "Jerry was a bulldozer operator for a Northern Californian logging company when he made the discovery."
    },
    {
        section: "General",
        question: "Who is the President of the Bigfoot Field Research Organisation (BFRO)?",
        A: "A: Carl Cashflow",
        B: "B: Matt Moneymaker",
        C: "C: David Dollars",
        correct: "B: Matt Moneymaker",
        info: "Matt is also a host on the Animal Planet TV show 'Finding Bigfoot'."
    },
    {
        section: "General",
        question: "Which indigenous language does the word 'sasquatch' derive from?",
        A: "A: Halqemeylem",
        B: "B: Algonqian",
        C: "C: Siouan",
        correct: "A: Halqemeylem",
        info: "In western Canada, the Sts'ailes First Nation people have the word “Sasq'ets” to refer to the wild men of the forests."
    },
    {
        section: "General",
        question: "Which of the following countries does NOT have a hairy wild-man phenomenon?",
        A: "A: China",
        B: "B: Spain",
        C: "C: Vietnam",
        correct: "B: Spain",
        info: "Sasquatch is known as 'yeren' in China and 'nguoi rung' (or 'Rock Ape') in Vietnam."
    },
    {
        section: "General",
        question: "By which name is the local version of sasquatch known in Australia?",
        A: "A: Grassman",
        B: "B: Skunk Ape",
        C: "C: Yowie",
        correct: "C: Yowie",
        info: "Sasquatch (or the local version thereof) is known as Grassman in Ohio and Skunk Ape in Florida."
    },
    {
        section: "General",
        question: "In which US state was the first law prohibiting the killing of sasquatch passed?",
        A: "A: Washington",
        B: "B: Texas",
        C: "C: Oregon",
        correct: "A: Washington",
        info: "The first place to outlaw Bigfoot slaughter explicitly was Skamania County, Washington, in 1969."
    },
    {
        section: "General",
        question: "Approximately how many sasquatch reports are on the BRFO website?",
        A: "A: 2500",
        B: "B: 3600",
        C: "C: 5800",
        correct: "B: 3600",
        info: "There have been at least 3,583 reported sightings in the contiguous United States, beginning in the mid-nineteenth century. Most sightings, however, are thought to remain unreported, and BFRO do not publish all reports they receive."
    },
    {
        section: "General",
        question: "Which cult 1972 movie helped to popularise the sasquatch phenomenon in America?",
        A: "A: The Legend of Boggy Creek",
        B: "B: It Exists",
        C: "C: Bigfoot Ate My Baby",
        correct: "A: The Legend of Boggy Creek",
        info: "'...Boggy Creek' presented as a docu-drama, mixing interviews about supposedly true encounters with a dramatic re-enactment."
    },
    {
        section: "General",
        question: "Grover Krantz and Rene Dahinden were two of the 'Four Horsemen of Sasquatchery'. Who of the following was NOT a member of this group?",
        A: "A: John Green",
        B: "B: Cliff Barackman",
        C: "C: Peter Byrne",
        correct: "B: Cliff Barackman",
        info: "Peter Byrne is the last surviving member of the Four Horsemen, known for their extensive research into the phenomenon. Cliff Barackman is a presenter of the popular Finding Bigfoot TV show."
    },
    {
        section: "PGF",
        question: "In which year was the Patterson-Gimlin footage filmed?",
        A: "A: 1967",
        B: "B: 1973",
        C: "C: 1975",
        correct: "A: 1967",
        info: "Roger Patterson and Bob Gimlin captured the most famous footage of sasquatch ever whilst horseback riding in northern California in October 1967."
    },
    {
        section: "PGF",
        question: "Which name has been given to the creature filmed by Roger Patterson?",
        A: "A: Fatty",
        B: "B: Lumpy",
        C: "C: Patty",
        correct: "C: Patty",
        info: "The beast was named 'Patty' possibly after Roger Patterson's wife, Patricia Patterson."
    },
    {
        section: "PGF",
        question: "Who performed detailed analysis of the Patterson-Gimlin footage and released the book 'When Roger Met Patty' in 2014?",
        A: "A: MK Davis",
        B: "B: Bill Munns",
        C: "C: Paul Freeman",
        correct: "B: Bill Munns",
        info: "Munns has performed the most comprehensive analysis yet of the footage, utilising at least 7 first-generation copies of the original lost film."
    },
    {
        section: "PGF",
        question: "What disease did Roger Patterson die of?",
        A: "A: Cirrhosis of the liver",
        B: "B: Hodgkin's lymphoma",
        C: "C: Heart disease",
        correct: "B: Hodgkin's lymphoma",
        info: "Patterson passed away in January 1972. He maintained the validity of the footage until his death."
    },
    {
        section: "PGF",
        question: "How many frames of footage are there on the Patterson-Gimlin film?",
        A: "A: 954",
        B: "B: 1108",
        C: "C: 566",
        correct: "A: 954",
        info: "Some controversy exists about the number of frames; 2 'extra' frames were discovered during Bill Munns' analysis, making the total 954, although 952 is also widely accepted."
    },
    {
        section: "PGF",
        question: "Who, in 2002, claimed to have made the 'gorilla suit' used in the PGF?",
        A: "A: Philip Morris",
        B: "B: Mark Chesterfield",
        C: "C: Sally Camel",
        correct: "A: Philip Morris",
        info: "Costume maker Philip Morris has never displayed a suit comparable to what's seen in the famous footage, and many believe his claim to have been a marketing stunt to drive his business."
    },
    {
        section: "PGF",
        question: "Al DeAtley took the Patterson-Gimlin film to be developed. What was his relationship to Roger Patterson?",
        A: "A: Cousin",
        B: "B: Brother-in-law",
        C: "C: Step-father",
        correct: "B: Brother-in-law",
        info: "DeAtley subsequently took charge of touring the film around the country."
    },
    {
        section: "PGF",
        question: "Who claimed to be 'the man in the Patty costume'?",
        A: "A: Bob Titmus",
        B: "B: Bob Heironimus",
        C: "C: Harry Boronigus",
        correct: "B: Bob Heironimus",
        info: "Bob Heronimus passed a lie-detector test claiming he was in a bigfoot suit for the Patterson-Gimlin film, though his story has several inconsistencies with other known facts. Incidentally, Roger Patterson also passed a lie-detector test stating that the creature he filmed was genuine."
    },
    {
        section: "PGF",
        question: "In which area of California was the PGF filmed?",
        A: "A: Saltspring Island",
        B: "B: South Bend",
        C: "C: Bluff Creek",
        correct: "C: Bluff Creek",
        info: "Bluff Creek is a remote wooded area in northern California."
    },
    {
        section: "PGF",
        question: "How many times did Roger Patterson start and stop the camera during the course of the footage?",
        A: "A: 6 times",
        B: "B: 4 times",
        C: "C: 2 times",
        correct: "A: 6 times",
        info: "Bill Munns' analysis revealed that the camera started and stopped 6 times as Roger ran, crossed the creek, and then steadied himself to shoot the footage."
    },
    {
        section: "Science",
        question: "Which ancient hominid is sasquatch most commonly thought to be related to?",
        A: "A: Gigantopithicus blacki",
        B: "B: Meganthropus",
        C: "C: Lufengpithecus",
        correct: "A: Gigantopithicus blacki",
        info: "Gigantopithicus blacki was a giant ape living in Asia roughly 2 million to 350,000 years ago. Dr Grover Krantz hypothesised that sasquatch is an extant relative and that it reached continental America by crossing the Bering Straits when there was a land-bridge. Other scientists have put forward paranthropus and australopithecus as possible ancestors"
    },
    {
        section: "Science",
        question: "Which of these anatomical features is sasquatch NOT said to possess?",
        A: "A: Mid-tarsal break",
        B: "B: Sagittal crest",
        C: "C: Rhinarium",
        correct: "C: Rhinarium",
        info: "Dr Jeffrey Meldrum hypothesised a mid-tarsal break from cast analysis, a feature present in early hominids that modern humans no longer possess. Great apes often have a sagittal crest, a bony skull protuberance that gives the head a cone-like appearance and supports powerful jaws."
    },
    {
        section: "Science",
        question: "How is the walking style of sasquatch scientifically described?",
        A: "A: Compliant gait",
        B: "B: Antalgic gait",
        C: "C: Ataxic gait",
        correct: "A: Compliant gait",
        info: "The compliant gait is characterised by a bent-knee stride, high lifting of the feet and the footprints being arranged in a straight line rather than being staggered, among other features."
    },
    {
        section: "Science",
        question: "Which scientific rule, which states that mammals tend to grow larger in colder climates, do sasquatch footprints appear to adhere to?",
        A: "A: Moore's law",
        B: "B: Bergmann's rule",
        C: "C: Moneymaker's maxim",
        correct: "B: Bergmann's rule",
        info: "Larger sasquatch footprints do tend to be found at higher latitudes, following Bergmann's rule."
    },
    {
        section: "Science",
        question: "In 1969 Grover Krantz examined a cast of a deformed sasquatch foot, which he believed could not have been faked. What is this cast known as?",
        A: "A: The Cripplefoot cast",
        B: "B: The Limpsquatch cast",
        C: "C: The Hobblefoot cast",
        correct: "A: The Cripplefoot cast",
        info: "The cast appears to show the congenital condition 'metatarsus adductus', more commonly known as 'skew foot'."
    },
    {
        section: "Science",
        question: "Which famous cast is theorised to show the body imprint of a sasquatch lying in the mud?",
        A: "A: The Mount Adams Cast",
        B: "B: The Skookum Cast",
        C: "C: The Bindernagel Cast",
        correct: "B: The Skookum Cast",
        info: "The Skookum Cast was made in Mount Adams, Washington. Among the scientists who examined it were Dr John Bindernagel and Dr Jeffrey Meldrum."
    },
    {
        section: "Science",
        question: "At which university is Dr Jeffrey Meldrum a professor?",
        A: "A: Idaho State University",
        B: "B: Brigham Young University",
        C: "C: Stony Brook University",
        correct: "A: Idaho State University",
        info: "Prominent Bigfoot researcher Dr Meldrum received his Undergraduate and Masters degrees from Brigham Young and his Doctorate from Stony Brook, and lectures at Idaho State."
    },
    {
        section: "Science",
        question: "What medical pathology is supposedly visible on the creature in the footage?",
        A: "A: Dislocated shoulder",
        B: "B: Fractured ulna",
        C: "C: Herniation of the thigh",
        correct: "C: Herniation of the thigh",
        info: "Bill Munns first described the possible herniation on frame 353 and MK Davis performed further video analysis of that section of the footage."
    },
    {
        section: "Science",
        question: "Sasquatch eyes are often said to shine, or glow in the dark. Which physical attribute could account for this?",
        A: "A: Lacrimal gland",
        B: "B: Vitrous humor",
        C: "C: Tapetum lucidum",
        correct: "C: Tapetum lucidum",
        info: "The tapetum lucidum is a layer in the choroid chiefly of nocturnal mammals that reflects light, causing the eyes to glow when light strikes them at night. Cats and black bears have this feature."
    },
    {
        section: "Science",
        question: "Which feature of the foot is visible in some casts that provides some of the strongest scientific evidence for sasquatch?",
        A: "A: Pronounced talus",
        B: "B: Dermal ridges",
        C: "C: High arch",
        correct: "B: Dermal ridges",
        info: "In certain soils, footprints can show dermal ridges - an equivalent of fingerprints of the foot. These would be remarkably hard to fake, leading many to count them as strong evidence that these footprints are from a living creature."
    }
    ]



    // {
    //     section: "General",
    //     question: "Which family adopted Bigfoot in the 1987 movie 'Harry and the...:' ",
    //     A: "A: Freemans",
    //     B: "B: Dahindens",
    //     C: "C: Hendersons",
    //     correct: "C: Hendersons",
    //     info: "The movie also spawned a TV spin-off of the same name."
    // },