var _pj;

var Consonants, FinalScore, HowManyConsonants, HowManyVowels, LCRoundLetters, LetterString, LettersToTest, PlayerName, PlayerWord, RoundConsonants, RoundLetters, RoundVowels, Score, WhereWeGoing, WordCount, WordsGuessed, WordsToScore, check, test, timeout, vowels;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

while (true) {
  WhereWeGoing = input("Type P to play a round, S to see the scores, or Q to exit.");

  if (WhereWeGoing === "P") {
    PlayerName = input("What is your name?");
    HowManyVowels = random.randint(1, 5);
    vowels = ["A", "E", "I", "O", "U"];
    RoundVowels = random.sample(vowels, HowManyVowels);
    HowManyConsonants = 7 - HowManyVowels;
    Consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
    RoundConsonants = random.sample(Consonants, HowManyConsonants);
    RoundLetters = RoundVowels + RoundConsonants;

    LCRoundLetters = function () {
      var _pj_a = [],
          _pj_b = RoundLetters;

      for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
        var letters = _pj_b[_pj_c];

        _pj_a.push(letters.lower());
      }

      return _pj_a;
    }.call(this);

    LettersToTest = RoundLetters + LCRoundLetters;
    console.log(RoundLetters);
    WordsGuessed = [];
    check = false;
    timeout = time.time() + 60 * 1;

    while (true) {
      test = 0;

      if (test === 1 || time.time() > timeout) {
        break;
      }

      test = test - 1;
      PlayerWord = input("What words can you make from these letters?");

      for (var letter, _pj_c = 0, _pj_a = PlayerWord, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        letter = _pj_a[_pj_c];

        if (!_pj.in_es6(letter, LettersToTest)) {
          console.log("Letter not in allowed list");
          check = true;
          break;
        }
      }

      if (check) {
        check = false;
        continue;
      } else {
        WordsGuessed.append(PlayerWord);
      }
    }

    WordsGuessed = list(dict.fromkeys(WordsGuessed));
    console.log("You found");
    console.log(WordsGuessed);
    WordsToScore = [];

    for (var Word, _pj_c = 0, _pj_a = WordsGuessed, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
      Word = _pj_a[_pj_c];

      if (Word.length < 3) {
        console.log("uh oh, this word is too short");
        console.log(Word);
      } else {
        if (my_dict.check(Word) === false) {
          console.log("uh oh, this word wasn't found");
          console.log(Word);
        } else {
          WordsToScore.append(Word);
        }
      }
    }

    console.log("These words will be scored");
    console.log(WordsToScore);
    Score = [0];
    Score.append(WordsToScore.length);

    for (var SWords, _pj_c = 0, _pj_a = WordsToScore, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
      SWords = _pj_a[_pj_c];

      if (SWords.length === 3) {
        Score.append(Number.parseInt(5));
      }

      if (SWords.length === 4) {
        Score.append(Number.parseInt(10));
      }

      if (SWords.length === 5) {
        Score.append(Number.parseInt(25));
      }

      if (SWords.length === 6) {
        Score.append(Number.parseInt(50));
      }

      if (SWords.length === 7) {
        Score.append(Number.parseInt(100));
      }

      if (SWords.length === 8) {
        Score.append(Number.parseInt(250));
      }

      if (SWords.length > 9) {
        Score.append(Number.parseInt(500));
      }
    }

    console.log("Your final score is");
    console.log(sum(Score));
    RoundLetters.sort();
    LetterString = "".join(RoundLetters);
    FinalScore = sum(Score);
    WordCount = WordsToScore.length;
  }

  if (WhereWeGoing === "Q") {
    break;
  }
}
