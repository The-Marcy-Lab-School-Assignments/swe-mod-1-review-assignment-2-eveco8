# swe-assignment-2.5-2-objects-iterators

- [Reminders](#reminders)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Setup](#setup)
- [Short Response Questions](#short-response-questions)
- [Coding Problems](#coding-problems)
  - [Problem 1: Managing a Shopping Cart](#problem-1-managing-a-shopping-cart)
  - [Problem 2: Book Collection Dictionary](#problem-2-book-collection-dictionary)
  - [Problem 3: Debugging Reference Types](#problem-3-debugging-reference-types)
  - [Problem 4: Song Analysis](#problem-4-song-analysis)
  - [Problem 5: Library Analysis](#problem-5-library-analysis)

## Reminders

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

### Be Okay With Being "Provisionally Complete"

At Marcy, we will deem an assignment as "complete" if the solution passes at least **75%** of the automated tests.

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That’s why we encourage you to be comfortable with being **“provisionally complete.”** This means:

- Submitting your work even if it isn’t perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

````sh
git checkout -b draft   # switch to the draft branch before starting

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
src```

When you are finished, create a pull request and tag your instructor for review.

## Short Response Questions

Short response questions can be found in the `src/short-response.md` file. Write your responses directly in that file! Do not forget to complete this part of the assignment.

## Coding Problems

### Problem 1: Managing a Shopping Cart

You are building a shopping cart feature for an e-commerce site.

**Part A:** Create an object called cart with the following properties:

- `customerName`: "Alex"
- `totalPrice`: 0
- `itemCount`: 0

**Part B:** Use dot notation to add a new property `items` with the value `['apples', 'bananas', 'cherries']`
**Part C:** Write code that updates `itemCount` to `3` and `totalPrice` to `99.99`
**Part D:** Remove the `customerName` property from the cart object
**Part E:** Log the final `cart` object to verify all changes were made correctly

Expected Final Output:

```js
{
  items: ['apples', 'bananas', 'cherries'],
  totalPrice: 99.99,
  itemCount: 3
}
````

### Problem 2: Book Collection Dictionary

You have an object that maps book titles to the number of copies available:

```js
const bookInventory = {
  "The Bluest Eye": 3,
  Beloved: 5,
  Homegoing: 2,
  "The Vanishing Half": 4,
  "Between the World and Me": 1,
};
```

**Part A:** Use `Object.keys()` and a for loop to print each book and its availability in this format:

```
The Bluest Eye: 3 copies available
Beloved: 5 copies available
etc...
```

**Part B:** Calculate and log the total number of books across all titles (should be 15)

Hint: You'll need a variable to keep track of the running total as you loop through the keys

### Problem 3: Debugging Reference Types

Given this code:

```js
const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20,
};

const team2 = team1;
team2.wins = 50;
team2.losses = 15;
```

- **Part A:** What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment.
- **Part B:** Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
- **Part C:** Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)

### Problem 4: Song Analysis

Your job is to analyze this data from a music streaming service.

```js
const songs = [
  {
    title: "Essence",
    artist: "Wizkid",
    streams: 2500000,
    duration: 226,
    releaseYear: 2020,
  },
  {
    title: "Peru",
    artist: "Fireboy DML",
    streams: 1800000,
    duration: 195,
    releaseYear: 2021,
  },
  {
    title: "Last Last",
    artist: "Burna Boy",
    streams: 3200000,
    duration: 275,
    releaseYear: 2022,
  },
  {
    title: "Calm Down",
    artist: "Rema",
    streams: 4100000,
    duration: 239,
    releaseYear: 2022,
  },
  {
    title: "Love Nwantiti",
    artist: "CKay",
    streams: 3800000,
    duration: 134,
    releaseYear: 2019,
  },
  {
    title: "Buga",
    artist: "Kizz Daniel",
    streams: 2100000,
    duration: 242,
    releaseYear: 2022,
  },
];
```

**Part A:** Use `filter` to create a new array called `hitSongs` containing only songs with more than 3 million streams.

**Part B:** Use `map` to create an array called `songTitles` containing just the titles of all songs.

**Part C:** Use `find` to locate the song "Calm Down" and store it in a variable called `calmDown`.

**Part D:** Use `forEach` to log each song in this format:

```
Essence by Wizkid - 2500000 streams
Peru by Fireboy DML - 1800000 streams
etc...
```

### Problem 5: Library Analysis

You are building analytics for a library system:

```js
const books = [
  {
    title: "The Fire Next Time",
    author: "James Baldwin",
    pages: 224,
    available: true,
    checkouts: 45,
  },
  {
    title: "Sister Outsider",
    author: "Audre Lorde",
    pages: 192,
    available: false,
    checkouts: 38,
  },
  {
    title: "The Autobiography of Malcolm X",
    author: "Malcolm X",
    pages: 466,
    available: true,
    checkouts: 52,
  },
  {
    title: "I Know Why the Caged Bird Sings",
    author: "Maya Angelou",
    pages: 289,
    available: true,
    checkouts: 67,
  },
  {
    title: "The Souls of Black Folk",
    author: "W.E.B. Du Bois",
    pages: 264,
    available: false,
    checkouts: 41,
  },
  {
    title: "Their Eyes Were Watching God",
    author: "Zora Neale Hurston",
    pages: 219,
    available: true,
    checkouts: 59,
  },
];
```

**Part A:** Use `filter` to get all available books and store them in a variable called `availableBooks`.
**Part B:** Use `map` on the `availableBooks` array to create a new array called `availableTitles` containing just the titles of available books.
**Part C:** Chain `filter` and `map` together in a single expression to get the titles of all books with more than 50 checkouts. Store this in a variable called `popularBookTitles`.
**Part D:** Use `reduce` to calculate the total number of checkouts across ALL books. Store this in a variable called `totalCheckouts`.
**Part E:** Use `reduce` to find the highest number of checkouts any single book has received. Store this in a variable called `mostCheckouts`.

Hint for Part E: Start with `0` and compare each book's checkouts to your accumulator. If the book's checkouts are higher, return that number; otherwise, return the current accumulator.
