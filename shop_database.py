import sqlite3


def create_database():

    connection = sqlite3.connect("vashiton.db")

    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            price INTEGER NOT NULL,
            image TEXT NOT NULL
        )
    """)

    connection.commit()

    connection.close()

    print("база данных создана")


create_database()
