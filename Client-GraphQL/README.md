New MongoDB Atlas Users

1.  Go to: https://www.mongodb.com/cloud/atlas and click the "Start Free" button (or Sign In if you already have account)

2.  Create your MongoDB user account.

3.  After creating your account, you will be prompted to create your first cluster. Leave all free tier options selected - AWS, North America: N. Virginia etc.

4.  Scroll down on the page to name your app.

5.  Click the "Create Cluster" button.

6.  Continue to the All Users instructions below.

Existing MongoDB Atlas Users:

1. Log in to your MongoDB Atlas account

2. In your Cluster Dashboard click the "Context" filter and then click "New Project"

![alt mongo-DB](./media/mongo-DB/image-1.png)

Important - Many students are trying to create a new cluster from inside their current project instead of an entirely new project, and are getting prompted to add a credit card to pay. Make sure you are creating a new project.

3. Name your project and click Next.

4. Your admin user should be automatically added to the project. Click Create Project.

5. You will now be prompted to create your first cluster. Leave all free tier options selected - AWS, North America: N. Virginia etc.

6. Scroll down on the page to name your app.

7. Click the "Create Cluster" button.

8. Continue to the All Users instructions below.

All Users

1.  The cluster will take a few minutes or more to generate, eventually you will see a page like this:

![alt mongo-DB](./media/mongo-DB/image-2.png)

2.  Click the "CONNECT" button in your cluster's sandbox. You will get the following screen asking you to whitelist your address.

Click the "Add your Current IP Address" button.

![alt mongo-DB](./media/mongo-DB/image-3.png)

3. You will then need to create a database user and password - I would highly suggest using the "Autogenerate" button to avoid escaping issues. After doing so, click the "Create MongoDB User" button.

![alt mongo-DB](./media/mongo-DB/image-4.png)

4. After creating the user, you should get this success dialog box. Click the "Choose a connection method" button.

![alt mongo-DB](./media/mongo-DB/image-5.png)

5. Select "Connect Your Application"

![alt mongo-DB](./media/mongo-DB/image-6.png)

6. Copy the address under "Connection String Only"

You will need to replace <PASSWORD> with the database user's actual password created earlier when you paste into your application.

![alt mongo-DB](./media/mongo-DB/image-7.png)

Click the "Close" button and head back over to your application.

7. In the server.js file replace Stephen's connection string with your new connection string like in the example below:

Remember to replace <PASSWORD> with the user's actual password.

const MONGO_URI = 'mongodb+srv://yourusername:yourpassword@cluster0-88ro9.mongodb.net/test?retryWrites=true&w=majority';

8. Next, we need to deal with a version conflict MongoDB Atlas will have with Mongoose by installing a new version. In your terminal run npm uninstall mongoose and then npm install mongoose. This will install the newest available version (currently v5.6.4).

9. Restart your server by running 'npm run dev' and you should see "Connected to MongoLab instance" along with a potential deprecation warning (which shouldn't effect the functionality of your app).

You should now be able to successfully load your app at localhost:4000 and localhost:4000/graphql
