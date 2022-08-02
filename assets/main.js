const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8fSncSIwWZT5dzJf-dLxOA&part=snippet%2Cid&order=date&maxResults=2';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '26d3894012msh45dfa973a9f8b99p12f182jsnecf0e80299fa',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};



async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        
        let view = `${videos.items.map(video => `
            
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 log:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        
        
        
        `).slice(0, 2).join('')}
        `;
        content.innerHTML = view;
    } catch (error){ 
        console.log(error);
    }
})();