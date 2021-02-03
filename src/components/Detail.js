import ScoreIndicator from "./ScoreIndicator";

function Detail({breed}) {
    if(Object.keys(breed).length <= 0) return null;

    return (
        <div className="container-component-detail">
            <div className="container-detail-description">
                <img src={breed.url} alt="" width="180" height="180"/>
                <div className="detail-description">
                    <p className="title">{breed.breeds[0].name}</p>
                    <div>{breed.breeds[0].description}</div>
                    <div><strong>Temperament: </strong>{breed.breeds[0].temperament}</div>
                    <div><strong>Origin: </strong>{breed.breeds[0].origin}</div>
                    <div><strong>Life Span: </strong>{breed.breeds[0].life_span}</div>
                    <div className="breed-detail"><strong>Adaptability: </strong><ScoreIndicator name='Adaptability' score={breed.breeds[0].adaptability}/></div>
                    <div className="breed-detail"><strong>Affection level: </strong><ScoreIndicator name='Affection' score={breed.breeds[0].affection_level}/> </div>
                    <div className="breed-detail"><strong>Child Friendly: </strong><ScoreIndicator name='Child' score={breed.breeds[0].child_friendly}/></div>
                    <div className="breed-detail"><strong>Grooming: </strong><ScoreIndicator name='Grooming' score={breed.breeds[0].grooming}/></div>
                    <div className="breed-detail"><strong>Intelligence: </strong><ScoreIndicator name='Intelligence' score={breed.breeds[0].intelligence}/></div>
                    <div className="breed-detail"><strong>Health Issues: </strong><ScoreIndicator name='Health' score={breed.breeds[0].health_issues}/></div>
                    <div className="breed-detail"><strong>Social needs: </strong><ScoreIndicator name='Social' score={breed.breeds[0].social_needs}/></div>
                    <div className="breed-detail"><strong>Stranger friendly: </strong><ScoreIndicator name='Stranger' score={breed.breeds[0].stranger_friendly}/></div>
                </div>
            </div>
            {/* <div className="container-detail-related">
                <h2>Other photos</h2>
            </div> */}
        </div>
    )
}

export default Detail
