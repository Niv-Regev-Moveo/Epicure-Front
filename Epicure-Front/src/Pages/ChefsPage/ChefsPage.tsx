import PageTitle from "../../components/Common/PageTitle";
import { StyledPageContainer } from "./styles";
import CardChef from "./CardChef";
import { StyledCardWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchChefs } from "../../redux/chunk/collections/chefs/chefs.thunks";
import { useEffect, useMemo } from "react";
import CategoriesBar from "../../components/Common/CategoriesBar";

const ChefsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { chefs, loading, error } = useSelector(
    (state: RootState) => state.chefsState
  );

  useEffect(() => {
    dispatch(fetchChefs());
  }, [dispatch]);

  const sortedChefsNames = useMemo(() => {
    return [...chefs].sort((a, b) => a.name.localeCompare(b.name));
  }, [chefs]);

  const chefCardsData = useMemo(() => {
    return sortedChefsNames.map((chef: { name: string; image: string }) => ({
      name: chef.name,
      image: chef.image,
    }));
  }, [sortedChefsNames]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const categories = ["All", "New", "Must Viewed"];

  return (
    <StyledPageContainer>
      <PageTitle title="CHEFS" />
      <CategoriesBar categories={categories} />

      {chefCardsData.map((chef, index) => (
        <StyledCardWrapper key={index}>
          <CardChef name={chef.name} image={chef.image} />
        </StyledCardWrapper>
      ))}
    </StyledPageContainer>
  );
};

export default ChefsPage;
