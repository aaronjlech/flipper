let user = {};


user.username = 'username@mail.com';
user.display_name = 'Billy';
user.password = 'imacoolperson1';


let message = {};


message.user = user.id;
message.text_body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolore aut earum deleniti, numquam!';
message.title = 'Im a title';



let likes = {};


likes.message = message.id;
likes.user = user.id;
