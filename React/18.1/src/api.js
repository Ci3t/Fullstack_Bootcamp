
import axios from "axios";
export async function api(url) {
    var opts = {
        headers: {
          'mode':'no-cors'
        }
      }
  
    const response = await axios.get(url)
    
   return response.data
}

