import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectID);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: ", error);
    }
  }
  async updatePost({ title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: ", error);
    }
  }

  async deletePost(slug) {
    try {
        await this.databases.deleteDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: ", error);
      return false;
    }
  }

  async getPosts(quries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        quries,
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: ", error);
      return false;
    }
  }

  //File Upload Method
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
       await this.bucket.deleteFile(config.appwriteBucketID, fileId);
       return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
      return this.bucket.getFilePreview(config.appwriteBucketID, fileId);
  }
  
}

const service = new Service();

export default service;
