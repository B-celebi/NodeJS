const getRandomInt = (max) => {
  return Math.round(Math.random() * (max - 1) + 1);
};

const posts = [];

const checkUnique = (check) => {
  //base case
  if (!posts.some((post) => check === post.id)) {
    return check;
  }
  return checkUnique(getRandomInt(1000));
};

//Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

const getPosts = () => {
  return Promise.resolve(posts);
};

const createPost = async (title, content) => {
  posts.push({
    id: checkUnique(getRandomInt(1000)),
    title: title,
    content: content,
    user_id: getRandomInt(1000),
  });
};

const showPosts = async (promisedPosts) => {
  promisedPosts.forEach((post) => {
    console.log(post.title);
    console.log(post.content);
    console.log("======");
  });
};

const main = async (title, content) => {
  try {
    await createPost(
      "First Post!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia placeat quod a beatae cum fugiat molestias, ad libero adipisci sit minima, vel veniam cumque voluptates."
    );
    await createPost(
      "Second Post!",
      "Nisi voluptatem architecto repudiandae eos! Maxime cum tempora delectus iste dolores reprehenderit."
    );
    await createPost(
      "Third Post!",
      "A beatae cum fugiat molestias, ad libero adipisci sit minima, vel veniam cumque voluptates."
    );

    let promisedPosts = await getPosts();

    await showPosts(promisedPosts);

    await createPost(title, content);

    promisedPosts = await getPosts();

    await showPosts(promisedPosts);
  } catch (err) {
    console.error(err);
  }
};
const inputtedParameters = process.argv.slice(2, 4);
main(String(inputtedParameters[0]), String(inputtedParameters[1]));
