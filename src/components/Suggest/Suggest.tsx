import { memo } from "react";
import { useNavigate } from "react-router";
import { useGetGenshinHeroQuery } from "../../store/genshinApi";
import { filterSuggest } from "../../utils/searchHeroData";
import { transformSingleHeroResponseType } from "../../types/HeroData";
import "./Suggest.css";

interface Props {
  isFocus: boolean;
  request: string;
}

interface AllHeroInfo {
  data: transformSingleHeroResponseType[];
  isLoading: boolean;
}

const Suggest = ({ isFocus, request }: Props) => {
  const navigate = useNavigate();

  const clickSuggest = (searchText: string) => {
    navigate(`/${searchText}`);
  };

  const { data: allHeroInfo, isLoading } =
    useGetGenshinHeroQuery<AllHeroInfo>();

  let suggests: string[] = [];

  if (!isLoading) {
    suggests = filterSuggest(allHeroInfo, request);
  }

  return (
    suggests.length > 0 && (
      <div className={`suggest suggest-${isFocus}`}>
        {[...suggests].map((el, i) => {
          return (
            <p
              className="suggest__request"
              key={i}
              onClick={() => clickSuggest(el)}
            >
              {el}
            </p>
          );
        })}
      </div>
    )
  );
};

export default memo(Suggest);
