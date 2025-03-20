import axios from "axios";

export async function getImage(inputValue, currentPage) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
      key: "22926721-5d20aa08498ffd1ff2f906542",
      q: inputValue,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 15,
      page: currentPage,
    });

const url = `${BASE_URL}${END_POINT}?${params}`;

return await axios.get(url)
.then(responce => {
    
return responce.data;

}).catch(error => {
    console.log(error);
});
}