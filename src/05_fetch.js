/**
 * Yo, let's practice our API knowledge.
 */

const NicosRepositories = `https://api.github.com/users/minimumviableperson/repos`;

// 1. This ^ is an endpoint that returns Nico's github repositories.
// Write a function called `getNamesOfNicosRepos`. It should:
//  - fetch data from the NicosRepositories endpoint.
//  - only keep the .name property of each repository.
//  - return all Nico's repo names as an array of strings.
let repos = []
let reposNames = []
fetch('https://api.github.com/users/minimumviableperson/repos')
    .then(resp => resp.json()).then(reposFromServer => repos = reposFromServer)
for (let repo of repos) {
    reposNames.push(repo.name)
}
// 2. Create a JSON server. Add a /posts endpoint to it, which returns a list of posts.
// A post is: {
//   id: number,
//   title: string,
//   text: string
// }
'src\db.json'
// 2.1 Write a function called createPost that:
// - takes a post as an argument
// - save your post in the JSON server
// - console.log the newly created post from the response (it must contain the new post's id);

function createPost(post) {
    fetch('https://api.github.com/users/minimumviableperson/repos', {
        method: 'POST',
        body: JSON.stringify({
            id: post.id,
            title: post.title,
            text: post.text
        }),
        headers: {
            'Content- type': 'application / json; charset = UTF - 8'
        }
    }).then(resp => resp.json()).then(postFromServer => console.log(postFromServer))
}
