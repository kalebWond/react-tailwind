import { useState } from 'react';

function ImageSearch({searchTerm}) {
    const [text, setText] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        searchTerm(text);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden mx-auto my-10">
            <form className="w full max-w-sm" onSubmit={submitHandler}>
                <div className="flex items-center border-b-2 border-green-500 p-2">
                    <input type="text" placeholder="Search image term ..." onChange={e => setText(e.target.value)}
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    <button type="submit" className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 
                        hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded focus:outline-none">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ImageSearch;