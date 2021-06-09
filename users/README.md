Generally you'll have a remote server from which graphQL APIs will fetch the data from.
We're gonna use 'json-server' npm package to create a dummy server inside this same project.
db.json inside users folder will act as a remote server.

After installing `json-server`, add a script in package.json - `json:server": "json-server --watch db.json`.
Hit the command `npm run json:server` in the terminal and you could you server running at `http://localhost:3000`.

Go to `http://localhost:3000/users` to fetch user details.
Go to `http://localhost:3000/users/23` to fetch user data using id details.

Now you can check users details using company details, so its now a circular relation
