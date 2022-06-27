import random
from statistics import mean, stdev, variance

letter_combos = []
letterscore = 0
letter_score_list = []

test = 0
while True:
    if test >= 5000000:
        break
    test = test + 1
    HowManyVowels = random.randint(1,5)
    vowels = ["A" , "E" , "I" , "O" , "U"]
    RoundVowels = random.sample(vowels,HowManyVowels) #This selects our vowels.
    HowManyConsonants = 7 - HowManyVowels #This determines the number of consonants to be chosen.
    Consonants = ["B" , "C" , "D" , "F" , "G" , "H" , "J" , "K" , "L" , "M" , "N" , "P" , "Q" ,"R" , "S" , "T" , "V" , "W" , "X" , "Y" , "Z"]
    RoundConsonants = random.sample(Consonants,HowManyConsonants) #Consonants are chosen.
    RoundLetters = RoundVowels + RoundConsonants #Vowels and Consonants combined to make our Round Letters.
    RoundLetters.sort() #sorting the round letters to track stats
    LetterString = ''.join(RoundLetters) #combining letters for DB purposes
    letter_combos.append(LetterString)
    for c in RoundLetters:
        if c == "A" or c == "E" or c == "I" or c == "O" or c == "U" or c == "L" or c == "R" or c == "S" or c == "T" or c == "N":
            letterscore += 1
        elif c == "D" or c == "G":
            letterscore += 2
        elif c == "B" or c == "C" or c == "M" or c == "P":
            letterscore += 3
        elif c == "F" or c == "H" or c == "V" or c == "W" or c == "Y":
            letterscore += 4
        elif c == "K":
            letterscore += 5
        elif c == "J" or c == "X":
            letterscore += 8
        elif c == "Q" or c == "Z":
            letterscore += 10
    letter_score_list.append(letterscore)
    letterscore = 0
    
letter_score_mean = mean(letter_score_list)   
letter_score_stdev = stdev(letter_score_list)        
            

print(letter_combos)
print(letter_score_list)
    

    
         