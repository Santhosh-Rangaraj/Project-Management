import { FaceSlightlyFrowning } from "lucide-react";
import "../styles/Notfound.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">  
     <FaceSlightlyFrowning size={58} color="#e35353" />
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
