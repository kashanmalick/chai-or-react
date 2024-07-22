import config from '../config/config';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email, password,name}) {
       try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another Method
                return this.login({email, password});

            } else{
                return userAccount
            }
                
       }catch (error){
        throw error;
       }
    }

    async login({email, password}) {
        try{
            const userAccount = await this.account.createEmailSession(email, password);
            return userAccount;
        }catch (error){
            throw error;
        }
    }

    async getCurrentuser() {
        try{
            const userAccount = await this.account.get();
            return userAccount;
        }catch (error){
            console.log("Appwrite service :: getCurrentuser :: ", error);
        }
        return null;
    }

    async logout() {
        try{
            const userAccount = await this.account.deleteSessions();
            return userAccount;
        }catch (error){
            console.log("Appwrite service :: logout :: ", error);
        }
        return null;
    }
    
}

const authService = new AuthService();

export default authService;