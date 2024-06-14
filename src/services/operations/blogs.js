import { apiConnector } from '../apiConnector';
import { endpoints } from '../apis';

const { BLOGS_API } = endpoints;

export const getAllBlogs = async () => {
    try {
        const response = await apiConnector('GET', BLOGS_API);
        console.log('All blogs:', response.data); // Debugging: log all blogs
        return response.data;
    } catch (error) {
        console.error('Error fetching all blogs:', error);
        throw error;
    }
};

export const getBlogById = async (id) => {
    try {
        const response = await apiConnector('GET', `${BLOGS_API}/${id}`);
        console.log('Blog by ID:', response.data); // Debugging: log blog by ID
        return response.data;
    } catch (error) {
        console.error('Error fetching blog by ID:', error);
        throw error;
    }
};
  
  export const createBlog = async (blogData) => {
    try {
      const response = await apiConnector("POST", BLOGS_API, blogData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateBlog = async (id, blogData) => {
    try {
      const response = await apiConnector("PUT", `${BLOGS_API}/${id}`, blogData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteBlog = async (id) => {
    try {
      const response = await apiConnector("DELETE", `${BLOGS_API}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
