import BannerComponent from "../../components/banner/Banner";
import Movies from "../../components/movie/Movies";

export default function HomePage(){
    return(
        <div className="flex flex-col items-center m-5">
          <BannerComponent/>
          <Movies/>
        </div>
    );
}