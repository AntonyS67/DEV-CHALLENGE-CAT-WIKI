
import {ReactSearchAutocomplete} from 'react-search-autocomplete'

function Banner() {
    const items = [
        {
          id: 0,
          name: 'Cobol'
        },
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Basic'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
    ]

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }
    
    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    return (
        <div className="banner">
            <div className="banner-description">
                <h2><img src="/logo_black.png" alt="cat wiki"/></h2>
                <div>
                    <p>Get to know more about your</p>
                    <p>cat breed</p>
                </div>

                {/* <div className="input-search">
                    <input type="search" name="search" placeholder="Enter your breed"/>
                    <span className="icon-search"><i className="fas fa-search"></i></span>
                </div> */}
                <div className="search-autocomplete">
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                    />
                </div>
            </div>
            <div className="banner-image">
                <img src="assets/HeroImagelg.png" alt="hero"/>
            </div>
        </div>
    )
}

export default Banner
