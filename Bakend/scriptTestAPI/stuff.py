import requests,json

id="5e2915ec65a31f1d381eb87c"
data={
      '_id': "5e27932281fe3e190aa7b97d",
      'title': 'Mon premier objet!!',
      'description': 'Les infos de mon premier objet',
      'imageUrl': 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      'price': 4900,
      'userId': 'qsomihvqios',
    }

token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTI3YWIyY2ZlODhlMjIxZDRlMGM0ZDIiLCJpYXQiOjE1Nzk3NDgzMDYsImV4cCI6MTU3OTgzNDcwNn0.WTUzXOgsoWE9WP3qvqNkQ3O48ZfKnkdp8qFGipp_9Cw'

#data={
#      '_id': 'oeihfzeomoihi',
#      'title': 'Mon deuxième objet',
#      'description': 'Les infos de mon deuxième objet',
#      'imageUrl': 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
#      'price': 2900,
#      'userId': 'qsomihvqios',
#    }

print(data)
#r=requests.post("http://localhost:3000/api/stuff/",headers={"Authorization":"Bearer {}".format(token)},json=data)

#r=requests.get("http://localhost:3000/api/stuff/",headers={"Authorization":"Bearer {}".format(token)})
#r=requests.put("http://localhost:3000/api/stuff/{id}".format(id=id),json=data)
r=requests.delete("http://localhost:3000/api/stuff/{id}".format(id=id),headers={"Authorization":"Bearer {}".format(token)})
print(r.json())
print(r.code)
