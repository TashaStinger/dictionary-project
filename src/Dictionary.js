import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        // console.log(response.data[0]);
        console.log("API call");
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log("Pexel API call");
        console.log(response.data.photos);
        setPhotos(response.data.photos);
    }

    function search(event){
        event.preventDefault();
        // alert(`Searching for ${keyword} definition`);
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        
        let pexelsApiKey = "563492ad6f9170000100000163d725d7ca0b48929642885888124473";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={search}>
                    <input type="search" placeholder="Type a word..." onChange={handleKeywordChange} />
                </form>
                <div className="hint">
                    Suggested words: <em>sunset, city, world, fog...</em>
                </div>
            </section>
            <Photos photos={photos} />
            <Results results={results} />
        </div>
    ) 
}