import requests,json
import os


def send_data_to_server(image_path, data, token):

    image_filename = os.path.basename(image_path)

    multipart_form_data = {
        'image':(image_filename, open(image_path, 'rb'),'image/jpg')

    }
    r=requests.post("http://localhost:3000/api/stuff/",data,headers={"Authorization":"Bearer {}".format(token)}, files=multipart_form_data)
    print(r.json())


id="5e27932281fe3e190aa7b97d"
data={
      '_id': "5e27932281fe3e190aa7b97d",
      'title': 'mon trois',
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
image='./img.jpg'
send_data_to_server(image, data, token)

#r=requests.post("http://localhost:3000/api/stuff/",headers={"Authorization":"Bearer {}".format(token)},json=data)

#r=requests.get("http://localhost:3000/api/stuff/",headers={"Authorization":"Bearer {}".format(token)})
#r=requests.put("http://localhost:3000/api/stuff/{id}".format(id=id),json=data)
#r=requests.delete("http://localhost:3000/api/stuff/{id}".format(id=id))
#print(r.json())
