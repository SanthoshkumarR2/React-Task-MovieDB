import { useSearch } from "../Context/Search.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import "../Styles/App.css";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function SearchData() {
  const [search, setSearch] = useSearch(); 
  const navigate = useNavigate(); // For navigation

  return (
    <div className="search-main-container">
      <div className="search-container">
        {search && search.length > 0 ? (
          search.map((movie, index) => (
            <Card key={movie.imdbID || index} className="box">
              <img
                className="banner"
                src={movie.Poster}
                alt={movie.Title || "No Poster Available"}
              />
              <CardContent>
                <div className="cardbody">
                  <h6 className="title">
                    {movie.Title}
                    <IconButton
                      color="success"
                      onClick={() => navigate(`/movie/${movie.imdbID}`)}
                    >
                      <InfoIcon />
                    </IconButton>
                  </h6>
                  <h6>Year of Release: {movie.Year}</h6>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="msg">"Oops! No Movies Found..."</div>
        )}
      </div>
    </div>
  );
}

export default SearchData;
