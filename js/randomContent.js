class RandomContentGenerator {
    constructor() {
        this.content = {
            name: [
                "Almost Impressive Person",
                "Professional Procrastinator",
                "Master of Nothing",
                "Chief Mistake Officer",
                "Director of Unfinished Projects"
            ],
            weaknesses: [
                "Expert at losing my own phone while holding it",
                "Can turn any simple task into a complex disaster",
                "Professional meeting forgetter (even with calendar reminders)",
                "Ability to make coffee taste like dishwater",
                "Exceptional at finding Netflix shows instead of doing work"
            ],
            failures: [
                "Microwaved a fork once. Immediate regret.",
                "Started a fitness journey. Ended up at a pizza place.",
                "Tried working from home, spent 4 hours talking to my plant",
                "Applied for a job. Sent the wrong cover letter. Got rejected by my own company.",
                "Attempted meal prep Sunday. Ended up ordering takeout for a week."
            ],
            endorsements: [
                "'They tried.' — Distant Acquaintance",
                "'Sometimes shows up.' — Former Manager",
                "'I've seen worse.' — Anonymous Colleague",
                "'Has potential... somewhere.' — Career Counselor",
                "'At least they're consistent.' — Team Lead"
            ],
            uselessFacts: [
                "Can name 25 types of bread but can't bake one",
                "Knows all Pokemon but can't remember important meetings",
                "Fluent in three programming languages, still prints 'Hello World'",
                "Has watched every cooking show, still burns toast",
                "Memorized pi to 100 digits, still can't calculate tips"
            ]
        };
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generateRandom() {
        const result = {};
        for (const [key, array] of Object.entries(this.content)) {
            result[key] = this.getRandomItem(array);
        }
        return result;
    }

    addContent(category, items) {
        if (!Array.isArray(items)) {
            throw new Error('Items must be an array');
        }
        if (!this.content[category]) {
            this.content[category] = [];
        }
        this.content[category].push(...items);
    }

    getCategories() {
        return Object.keys(this.content);
    }

    getCategoryContent(category) {
        return this.content[category] || [];
    }
}

// Create a singleton instance
const randomContent = new RandomContentGenerator();
