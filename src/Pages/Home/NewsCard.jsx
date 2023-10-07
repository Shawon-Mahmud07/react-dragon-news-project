import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const NewsCard = ({ data }) => {
  const { title, image_url, details, _id } = data;
  return (
    <div>
      <h1 className="text-[#403F3F] md:text-xl font-semibold md:font-bold ml-4  mt-3 ">
        {title}
      </h1>
      <Card className="mt-10 mb-10  ">
        <CardHeader className="rounded-sm md:rounded-md">
          <img src={image_url} alt="card-image" />
        </CardHeader>

        <CardBody>
          {details.length > 200 ? (
            <Typography>
              {details.slice(0, 200)}{" "}
              <Link
                to={`/news/${_id}`}
                className="text-[#FF8C47] block text-base font-semibold"
              >
                Read More...
              </Link>
            </Typography>
          ) : (
            <Typography>{details}</Typography>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

NewsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default NewsCard;
