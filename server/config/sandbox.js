let user = {};


user.username = 'username@mail.com';
user.display_name = 'Billy';
user.password = 'imacoolperson1';

let message = {};

message.id = 10
message.user = 2;
message.text_body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolore aut earum deleniti, numquam!';
message.title = 'Im a title';

//stored on session
let currentUser = {
   id: 2,
   display_name: "Bubba",
   username: "bubba@mail.com"
}
//hit like button
//hit post route on server for /like/:messageId messageId = 10
models.Likes.create({
   messsage: req.params.messageId, // = 10
   message: req.session.currentUser.id // = 2
})


app.put('/messages/:messageId', (req, res) => {
   message.likes += 1
})


id |""|""|
1   '' ''
let likes = {};

likes.message = message.id;
likes.user = user.id;

<span>{{display_name}} posted: {{message}}</span>
<button className="className">like</button><span>{{likes.length}}</span>

let likeExists = models.likes.findAll({
   where: {
      message: currentMessage.id,
      user: currentUser.id
   }
})

if(likeExists){
   models.likes.destroy(likeExists.id)
   redirect('/message-page')
}else{
   models.likes.create({
      message: currentMessage.id,
      user: currentUser.id
   })
   redirect('/message-page')
}
