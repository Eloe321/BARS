const axios = require('axios');

async function testLogin() {
  try {
    console.log('Testing login with invalid email format: "string2"...');
    
    const response = await axios.post('http://localhost:3306/auth/login', {
      email: 'string2',
      password: 'string'
    }, {
      validateStatus: () => true, // Accept any status code
      timeout: 5000 // 5 second timeout
    });
    
    console.log('\n✅ Response received (no timeout):');
    console.log('Status:', response.status);
    console.log('Data:', JSON.stringify(response.data, null, 2));
    
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error('\n❌ Request timed out after 5 seconds');
    } else if (error.code === 'ECONNREFUSED') {
      console.error('\n❌ Cannot connect to server. Is it running?');
    } else {
      console.error('\n❌ Error:', error.message);
    }
  }
}

testLogin();
