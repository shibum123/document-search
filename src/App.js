import React from "react";
import "./App.scss";
import SearchOverview from './components/SearchOverview';
// import axios from "axios";
/* 
	axios
	.post('http://localhost:9200/doc-index-01/doc/_search', {
		query: {
		match: {
			filename: 'BFL_Condo_Wordings_-_TOR_-_Property9.pdf'
		}
		}
	})
	.then(res => {
		const results = res.data.hits.hits.map(h => h._source)
		this.setState({ suggestions: results })
	})
*/

class App extends React.Component {
    render() {
        return ( <
            SearchOverview / >
        );
    }
}

export default App;