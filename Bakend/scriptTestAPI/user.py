import requests,json

id="5e27932281fe3e190aa7b97d"
data={
      'email': "aghiles.goumeziane@gmail.com",
      'password': 'prg2014'
    }

#data={
#      '_id': 'oeihfzeomoihi',
#      'title': 'Mon deuxième objet',
#      'description': 'Les infos de mon deuxième objet',
#      'imageUrl': 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
#      'price': 2900,
#      'userId': 'qsomihvqios',
#    }

print(data)
#r=requests.post("http://localhost:3000/api/auth/signup",json=data)

r=requests.post("http://localhost:3000/api/auth/login",json=data)

print(r.json())
