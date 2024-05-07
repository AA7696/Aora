import { Client, Account } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.myorg.aora',
    projectId: '663a14780015a3842b29',
    databaseId: '663a18730007afe64124',
    userCollectionId: '663a18be000ea0fee90c',
    videoCcollectionId: '663a197a0029fa65589f',
    storageId:  '663a1d6b0034b4f724b9'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = () =>{
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

}
