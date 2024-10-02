import actionImg from "../assets/action.png";
import dramaImg from "../assets/drama.png";
import fantasyImg from "../assets/fantasy.png";
import fictionImg from "../assets/fiction.png";
import horrorImg from "../assets/horror.png";
import musicImg from "../assets/music.png";
import romanceImg from "../assets/romance.png";
import thrillerImg from "../assets/thriller.png";
import westernImg from "../assets/western.png";

// populated each category with genre ID
const categories = [
  { name: "Action", color: "#ff5108", image: actionImg, genreId: "28" },
  { name: "Drama", color: "#d7a4ff", image: dramaImg, genreId: "18" },
  { name: "Romance", color: "#148a08", image: romanceImg, genreId: "10749" },
  { name: "Thriller", color: "#84c2ff", image: thrillerImg, genreId: "53" },
  { name: "Western", color: "#902500", image: westernImg, genreId: "37" },
  { name: "Horror", color: "#7358ff", image: horrorImg, genreId: "27" },
  { name: "Fantasy", color: "#ff4ade", image: fantasyImg, genreId: "14" },
  { name: "Music", color: "#e61e32", image: musicImg, genreId: "10402" },
  { name: "Fiction", color: "#6cd061", image: fictionImg, genreId: "878" },
];

export default categories;
