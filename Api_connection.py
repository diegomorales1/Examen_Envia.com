from flask import Flask, render_template
import requests

api_url = 'https://api.ecartapi.com/api/v2/products'

#Token de acceso de la API de mercado libre
access_token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJYUnRhM09mWnFNVXlMdzBTa053alYyZE55a3dKMmw5eiIsImlhdCI6MTcwNTg1MzU3MTc2M30.Bod1zx7GtM3y6Bw2icdub9m99i4Ku1uXyJ7v_8IREIpdfJcdCWJ5qM7r4SbW7MQEaYOjp87oNoTPxmQsaGv3ag'

headers = {'Authorization': f'Bearer {access_token}'}

#Framework que nos ayudara a la conexion y el manejo de los datos de los productos
app = Flask(__name__)

@app.route('/')
def index():
    response = requests.get(api_url, headers=headers)

    if response.status_code == 200:
        #Aqui se obtiene la lista de productos de la respuesta de la API
        products_data = response.json()['products']
        return render_template('prueba.html', products_data=products_data)
    else:
        return f"Error en la solicitud: {response.status_code} - {response.text}"

if __name__ == '__main__':
    app.run(debug=True)

