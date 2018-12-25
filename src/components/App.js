import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/unsplash';
import ImageList  from './ImageList';


class App extends React.Component{
    state = {images: []};

    onSearchSubmit = async (term) => {
      const response = await Unsplash.get('/search/photos',{
        params:{query: term}
        
        });
       this.setState({images: response.data.results});
    }
   
   
    render(){
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearch={this.onSearchSubmit} />
        found {this.state.images.length} images
        <ImageList images={this.state.images}/>
    </div>
    );
}
}
export default App;