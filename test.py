from ast import Pass

import sqlite3 as sl


WhereWeGoing = input("Type P to play a round or S to see the scores.")
if WhereWeGoing == "P":
    pass
if WhereWeGoing == "S":
    con = sl.connect('wordgame.db')
    mycursor = con.cursor()
    mycursor.execute("SELECT * FROM scores ORDER BY score desc LIMIT 100")
    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)





