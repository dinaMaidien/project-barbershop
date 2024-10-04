import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api';



const AuthService = {
    async login(username, password) {
      try {
        const response = await axios.post(`${API_BASE_URL}/users`, {
          username,
          password,
            
        },
        {
              headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            
            },
          }
        );
  
        if (response.status === 200) {

          localStorage.setItem('username', response.data.username);
          localStorage.setItem('role', response.data.role);
          return true;
        }
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },
  
    async addTeamSave(email, password, firstName, lastName, phone, address, role, userName) {
      const token = await localStorage.getItem('jwtToken');
      const username = await localStorage.getItem('userName');
      console.log(token);
      if (!token) {
        throw new Error('No token found');
      }
      console.log(email);
      console.log(password);
      console.log(firstName);
      console.log(userName);
      console.log(phone);
      console.log(address);
      console.log(role);
      console.log(lastName);
      try {
        const response = await axios.post(
          `${API_BASE_URL}/add_team/`,
          {
            params:
            {
              username: userName,
              email: email,
              password: password,
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              address: address,
              role: role,
            }
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
              'Authorization': `Bearer ${token}`,
              'Accept': '*/*',
            },
            withCredentials: true,
          }
        );
  
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        if (error.response) {
          console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
        throw error;
      }
    },


  
};

export default AuthService;