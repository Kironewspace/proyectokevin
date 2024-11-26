from flask import render_template, Flask, request
import pyodbc

sql_config = {
    'driver': 'ODBC Driver 17 for SQL Server',
    'server': 'localhost',
    'database': 'contacts',
    'user': 'SA',
    'password': 'MTp070213.'
}
conn_str = (
    f"DRIVER={sql_config['driver']};"
    f"SERVER={sql_config['server']};"
    f"DATABASE={sql_config['database']};"
    f"UID={sql_config['user']};"
    f"PWD={sql_config['password']};"
    "TrustServerCertificate=yes;"
)

app = Flask(__name__)

@app.route('/')
def showhtml():
    return render_template('contacto.html')

@app.route('/contacto', methods=['POST'])
def form():
    nombre = request.form['nombre']
    email = request.form['email']
    message = request.form['mensaje']

    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()


    cursor.execute("SELECT COUNT(*) FROM info WHERE usr_name=?", (nombre,))
    user_exists = cursor.fetchone()[0] > 0
   

    if user_exists:
        cursor.close()
        return "El usuario ya existe en la base de datos."
    
  
    cursor.execute("INSERT INTO info (usr_name, usr_email, usr_message) values (?,?,?)", (nombre, email, message))
    cursor.commit()
    cursor.close()
    

    return "Datos insertados correctamente."

if __name__ == '__main__':
    app.run(port=5005, debug=True)
