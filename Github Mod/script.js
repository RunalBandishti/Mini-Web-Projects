const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUser(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('There is no user with that username!!');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');

    addRepo(data);
  } catch (err) {
    createErrorCard('Problem fetching repos!!');
  }
}

function createUser(user) {
  const cardHTML = ` 
        <div class="card">
            <div>
            <img src="${user.avatar_url}" class="avatar">
            </div>
            <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
            <li><strong>Followers:</strong>${user.followers}</li>
            <li><strong>Following:</strong>${user.following}</li>
            <li><strong>Repos:</strong>${user.public_repos}</li>
            </ul>
            
            <div id="repos">
            </div>
            </div>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addRepo(repos) {
  const reposeEl = document.getElementById('repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoLink.innerText = repo.name;

    reposeEl.appendChild(repoLink);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = '';
  }
});
