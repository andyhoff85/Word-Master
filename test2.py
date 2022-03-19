from ast import Pass
import random
import time
import enchant
import sqlite3 as sl
my_dict = enchant.Dict("en_US")

while True:

    WhereWeGoing = input("Type P to play a round, S to see the scores, or Q to exit.")
    if WhereWeGoing == "P":
        PlayerName = input("What is your name?")
        HowManyVowels = random.randint(1,5) #This selects a random number that determines how many vowels to pick.
        vowels = "A" , "E" , "I" , "O" , "U"
        RoundVowels = random.sample(vowels,HowManyVowels) #This selects our vowels.
        HowManyConsonants = 7 - HowManyVowels #This determines the number of consonants to be chosen.
        Consonants = ["B" , "C" , "D" , "F" , "G" , "H" , "J" , "K" , "L" , "M" , "N" , "P" , "Q" ,"R" , "S" , "T" , "V" , "W" , "X" , "Y" , "Z"]
        RoundConsonants = random.sample(Consonants,HowManyConsonants) #Consonants are chosen.
        RoundLetters = RoundVowels + RoundConsonants #Vowels and Consonants combined to make our Round Letters.
        LCRoundLetters = [letters.lower() for letters in RoundLetters] #This list contains the lower case letters.
        LettersToTest = RoundLetters + LCRoundLetters #This list is used to contain both the upper and lower case letters.
        print(RoundLetters)
        WordsGuessed = []
        check = False
        timeout = time.time() + 60*1   # 1 minute from now
        while True:
            test = 0
            if test == 1 or time.time() > timeout:
                break
            test = test - 1
            PlayerWord = input("What letters can you make from these letters?")
            for letter in PlayerWord: # This will loop through the input word
                if letter not in LettersToTest:
                    print('Letter not in allowed list')
                    check = True
                    break
            if check:
                check = False
                continue
            else:
                WordsGuessed.append(PlayerWord)

        WordsGuessed = list(dict.fromkeys(WordsGuessed)) #Removes duplicates from the WordsGuessed list
        print("You found")
        print(WordsGuessed)
        WordsToScore = []
        for Word in WordsGuessed:
            if len(Word) < 3:  #This checks that the words submitted are over 2 in length.
                print("uh oh, this word is too short")
                print(Word)
            elif my_dict.check(Word) == False: #This checks that the words submitted are actually legit words.
                print("uh oh, this word wasn't found")
                print(Word)
            else:
                WordsToScore.append(Word)
        print("These words will be scored")
        print(WordsToScore)
        Score = [0]
        Score.append(len(WordsToScore)) # Number of words added for points
        for SWords in WordsToScore: #Score Determined
            if len(SWords) == 3:
                Score.append(int(5))
            if len(SWords) == 4:
                Score.append(int(10))
            if len(SWords) == 5:
                Score.append(int(25))
            if len(SWords) == 6:
                Score.append(int(50))
            if len(SWords) == 7:
                Score.append(int(100))
            if len(SWords) == 8:
                Score.append(int(250))
            if len(SWords) > 9:
                Score.append(int(500))
        print("Your final score is")
        print(sum(Score))
        RoundLetters.sort() #sorting the round letters to track stats
        LetterString = ''.join(RoundLetters) #combining letters for DB purposes
        FinalScore = sum(Score)
        WordCount = len(WordsToScore)

    #This updates the sqlite database with the score from each round, the letters selected, word count and player name. 

        con = sl.connect('wordgame.db')
        sql = "INSERT INTO SCORES (LETTERS, SCORE, WORDCOUNT, PLAYERNAME) VALUES (?, ?, ?, ?)"
        val = (LetterString, FinalScore, WordCount, PlayerName)

        with con:
            con.execute(sql, val)

    if WhereWeGoing == "S":
        con = sl.connect('wordgame.db')
        mycursor = con.cursor()
        mycursor.execute("SELECT * FROM scores ORDER BY score desc LIMIT 100")
        myresult = mycursor.fetchall()
        for x in myresult:
            print(x)
    if WhereWeGoing == "Q":
        break

