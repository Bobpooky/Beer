import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function BeerCardDetails({
  id,
  name,
  imageUrl,
  tagline,
  ibu,
  firstBrewed,
  abv,
  srm,
  description,
  ingredients,
  foodPairing,
  close,
  handleClick,
}) {
  const [back, setBack] = useState(true);

  const handleBack = () => {
    setBack(!back);
  };

  return (
    <div className="beerCardDetailsContainer">
      {back ? (
        <div className="beerCardDetails">
          <div className="btnCroix">
            <div
              onClick={close}
              role="button"
              onKeyDown={close}
              tabIndex={0}
              className="btnCroixSVG"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                onClick={close}
                role="button"
                onKeyDown={close}
                tabIndex={0}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292894 10.2929C-0.0976309 10.6834 -0.0976309 11.3166 0.292894 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893Z"
                  fill="#592C1C"
                />
              </svg>
            </div>
          </div>
          <div className="marg">
            <h3 className="title">{name}</h3>
            <div className="imgAndText">
              <div className="imgAndTagLine">
                <img className="img" src={imageUrl} alt="" />
                <h4 className="taglineBeer">{tagline}</h4>
              </div>
              <div className="blockText">
                <div className="dateAndAlc">
                  <p className="date">First brewed: {firstBrewed}</p>
                  <p className="alc">Alc: {abv}°</p>
                </div>
                <div className="brewDetails">
                  <p>
                    <h5>Bitterness:</h5> o o o o o IBU {ibu} (International
                    Bitterness Unit)
                  </p>
                  <div>
                    <p>
                      <h5>Color:</h5> <div className="brewColor" /> SRM {srm}
                      (European Brewery Convention)
                    </p>
                  </div>
                </div>
                <p id="paragraphe">{description}</p>
                <button className="btn" type="button" onClick={handleClick}>
                  Add to Favorite{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="buttonArrowFront">
            <div
              onClick={handleBack}
              role="button"
              onKeyDown={handleBack}
              tabIndex={0}
              className="buttonArrowFrontSVG"
            >
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8046 0.279964C14.1876 -0.0958387 14.8056 -0.0929361 15.1849 0.286448L21.7174 6.81955C22.0942 7.19639 22.0942 7.80361 21.7174 8.18045L15.1849 14.7136C14.8056 15.0929 14.1876 15.0958 13.8046 14.72C13.4217 14.3442 13.4187 13.732 13.7981 13.3526L18.6834 8.4669H0.976019C0.436979 8.4669 0 8.034 0 7.5C0 6.966 0.436979 6.5331 0.976019 6.5331H18.6834L13.7981 1.64735C13.4187 1.26797 13.4217 0.655767 13.8046 0.279964Z"
                  fill="#592C1C"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-is-flipped">
          <div className="flippedContent">
            <div className="btnCroix">
              <div
                onClick={close}
                role="button"
                onKeyDown={close}
                tabIndex={0}
                className="btnCroixSVG"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292894 10.2929C-0.0976309 10.6834 -0.0976309 11.3166 0.292894 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893Z"
                    fill="#592C1C"
                  />
                </svg>
              </div>
            </div>
            <div className="flippedContainers">
              <div className="recipe">
                <div className="imageRecipe">
                  <img
                    src="src/assets/oh-my-brew-icon-ingredients.png"
                    alt="ingredients"
                  />
                </div>
                <div className="ingredients">
                  <div>
                    <h4>Ingredients:</h4>
                    <div>
                      <p>Malt:</p>
                      {ingredients.malt.map((malts) => (
                        <li key={`malts${malts.name}`}>{malts.name}</li>
                      ))}
                    </div>
                    <div>
                      <p>Hops:</p>
                      {ingredients.hops.map((hops) => (
                        <li key={`hops${hops.name}`}>
                          {hops.name}
                          <li />
                        </li>
                      ))}
                    </div>
                    <div>
                      <p>Yeast:</p>
                      <li>{ingredients.yeast}</li>
                    </div>
                  </div>
                </div>
                <div className="ingredientsBTN">
                  <button className="btn" type="button">
                    <NavLink to={`/recipe/${id}`}>Recipe</NavLink>
                  </button>
                </div>
              </div>
              <div className="foodPairing">
                <div className="foodPairingIMG">
                  <img
                    src="src/assets/oh-my-brew-icon-food-pairing.png"
                    alt="ingredients"
                  />
                </div>
                <div className="dishes">
                  <h4>Food pairing</h4>
                  {foodPairing !== undefined ? (
                    foodPairing.map((dish) => (
                      <li key={`dish${dish}`}>{dish}</li>
                    ))
                  ) : (
                    <p>
                      No food pairing : drink it without food or with your
                      favorite dish!
                    </p>
                  )}
                </div>
                <div className="foodPairingBTN">
                  <button className="btn" type="button" onClick={handleClick}>
                    Add to Favorite{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="buttonArrowBack">
              <div
                onClick={handleBack}
                role="button"
                onKeyDown={handleBack}
                tabIndex={0}
                className="buttonArrowBackSVG"
              >
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.8046 0.279964C14.1876 -0.0958387 14.8056 -0.0929361 15.1849 0.286448L21.7174 6.81955C22.0942 7.19639 22.0942 7.80361 21.7174 8.18045L15.1849 14.7136C14.8056 15.0929 14.1876 15.0958 13.8046 14.72C13.4217 14.3442 13.4187 13.732 13.7981 13.3526L18.6834 8.4669H0.976019C0.436979 8.4669 0 8.034 0 7.5C0 6.966 0.436979 6.5331 0.976019 6.5331H18.6834L13.7981 1.64735C13.4187 1.26797 13.4217 0.655767 13.8046 0.279964Z"
                    fill="#592C1C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

BeerCardDetails.propTypes = {
  close: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ibu: PropTypes.number.isRequired,
  firstBrewed: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  srm: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  foodPairing: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BeerCardDetails;
